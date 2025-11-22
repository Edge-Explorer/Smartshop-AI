export const getRecommendationFromAI = async (
  userQuery: string,
  productList: any[]
) => {
  try {
    const response = await fetch("http://localhost:5000/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: userQuery,
        products: productList,
      }),
    });

    if (!response.ok) {
      console.error("Backend error:", await response.text());
      return [];
    }

    const data = await response.json();
    return data.ids || [];
  } catch (error) {
    console.error("Frontend fetch error:", error);
    return [];
  }
};
