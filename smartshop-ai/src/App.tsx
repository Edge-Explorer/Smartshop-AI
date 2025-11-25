import { useState } from "react";
import { products } from "./data/products";
import RecommendationInput from "./components/RecommendationInput";
import ProductList from "./components/ProductList";
import { getRecommendationFromAI } from "./api/gemini";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function App() {
  const [recommended, setRecommended] = useState<Product[]>([]);

  const handleRecommend = async (query: string) => {
    console.log("Sending query:", query);

    const ids = await getRecommendationFromAI(query, products);

    console.log("AI returned:", ids);

    const filtered = products.filter((p) => ids.includes(p.id));
    setRecommended(filtered);
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        color: "white",
        backgroundColor: "#111",
        height: "100vh",
      }}
    >
      <h1>SmartShop AI</h1>
      <RecommendationInput onRecommend={handleRecommend} />
      <ProductList products={recommended} />
    </div>
  );
}

