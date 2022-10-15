import { Section } from "../ui/Section";

export const Button = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <button>Order sandwich</button>
    <button disabled>Order sandwich</button>
  </div>
);
