# Smartshop-AI
SmartShop AI is a lightweight React + Flask application that delivers intelligent product recommendations using an AI model (Groq API). Users can enter natural-language queries like “phone under 30000”, and the AI automatically filters and returns the most relevant products from a predefined list.

SmartShop AI — AI-Powered Product Recommendation System
Internship Technical Assignment (Completed)

SmartShop AI is a lightweight, end-to-end AI recommendation system built as part of a technical assignment for a Data Science / AI Internship.
It demonstrates the ability to build a React frontend, connect it to a Python Flask backend, and integrate an AI model (Groq Llama 3.1) to generate smart product recommendations.

Features

AI-powered product filtering using natural language

React + TypeScript frontend with clean UI

Flask backend securely handling AI requests

API key stored safely on backend (no exposure to frontend)

Handles queries like:
“phone under 30000”
“budget android phone”

Extensible product dataset (INR pricing)

Tech Stack

Frontend:

React

TypeScript

Vite

Backend:

Python

Flask

Groq API (Llama 3.1 model)

Other Tools:

CORS

Fetch API

Virtual Environment (venv)

Project Structure
SmartShop AI/
│
├── backend-python/       # Flask backend with Groq integration
│   ├── app.py
│   ├── .env
│   └── venv/
│
└── smartshop-ai/         # React frontend
    ├── src/
    │   ├── api/gemini.ts (Groq request helper)
    │   ├── components/
    │   ├── data/products.ts
    │   └── App.tsx

How It Works

User enters a query → “phone under 30000”

React sends query + product list to Flask

Flask forwards the prompt to Groq LLM

AI returns recommended product IDs

Frontend filters and displays the matching products

Run Locally
Backend
cd backend-python
.\venv\Scripts\activate      # Windows
pip install -r requirements.txt
python app.py

Frontend
cd smartshop-ai
npm install
npm run dev

Note

This project was developed as part of an internship technical assignment to demonstrate full-stack AI integration skills.
It is fully functional, extendable, and can be upgraded into a production-ready AI shopping assistant.

Future Improvements

Add category-based recommendations

Add embeddings for semantic product matching

Database integration

Admin panel for product updates

Contact

If you'd like to collaborate or discuss the project:
Karan Shelar
your email here:- karanshelar8775@gmail.com
LinkedIn:- https://linkedin.com/in/karan-shelar-779381343
