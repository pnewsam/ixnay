export const Datalist = () => (
  <>
    <label htmlFor="sandwich-list-input">List of sandwiches</label>
    <input
      list="sandwich-list-options"
      name="sandwich"
      id="sandwich-list-input"
    />
    <datalist id="sandwich-list-options">
      <option value="Chicken Sandwich" />
      <option value="Egg Sandwich" />
      <option value="Seafood Sandwich" />
      <option value="Roast Beef Sandwich" />
      <option value="Grilled Cheese" />
      <option value="Ham Sandwich" />
      <option value="Nutella Sandwich" />
      <option value="Grilled Chicken Sandwich" />
    </datalist>
  </>
);
