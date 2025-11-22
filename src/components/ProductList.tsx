interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      <h2>Recommended Products</h2>

      {products.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id} style={{ marginBottom: "10px" }}>
              <strong>{p.name}</strong> — ₹{p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

