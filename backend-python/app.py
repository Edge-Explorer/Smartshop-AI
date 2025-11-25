from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from groq import Groq
import os
import re
import json

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def extract_list(text):
    """
    Extracts a JSON-like list [1, 2, 3] from the AI response.
    Handles cases where the model returns code blocks, explanations,
    or multiple lists.
    """

    # Remove markdown fences like ```python ... ```
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)

    # Find the FIRST list-like structure
    match = re.search(r"\[[0-9,\s]+\]", text)
    if match:
        try:
            return json.loads(match.group(0))
        except:
            return eval(match.group(0))

    return []  # fallback if nothing found


@app.route("/recommend", methods=["POST"])
def recommend():
    try:
        data = request.json
        query = data.get("query", "")
        products = data.get("products", [])

        prompt = f"""
        You are a strict product recommendation engine.
        User query: "{query}"
        Product list: {products}

        VERY IMPORTANT:
        - Respond ONLY with a JSON list of product IDs.
        - Example: [1, 3, 5]
        - Do NOT explain.
        - Do NOT return code.
        - Do NOT return Python.
        - Do NOT return markdown.
        - ONLY return: [id1, id2, id3]
        """

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[{"role": "user", "content": prompt}]
        )

        text = response.choices[0].message.content.strip()
        print("AI RAW RESPONSE:\n", text)

        ids = extract_list(text)
        print("EXTRACTED IDS:", ids)

        return jsonify({"ids": ids})

    except Exception as e:
        print("🔥 BACKEND ERROR:", str(e))
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5000, debug=True)

