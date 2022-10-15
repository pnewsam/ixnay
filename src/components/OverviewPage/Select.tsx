export const Select = () => (
  <>
    <label htmlFor="sandwiches">Alternative Sandwiches</label>
    <select name="my-options" id="sandwiches">
      <option value="bagel-lox">Bagel with lox</option>
      <optgroup label="Wraps">
        <option value="schwarma">Schwarma</option>
        <option value="hummus-wrap">Hummus wrap</option>
      </optgroup>
      <optgroup label="Open-face">
        <option value="avocado-toast">Avocado toast</option>
      </optgroup>
    </select>
  </>
);
