export const Button = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <button className="ix">Order sandwich</button>
    <button className="ix" disabled>
      Order sandwich
    </button>
  </div>
);
