export const Radio = () => (
  <fieldset>
    <legend>Traditional Sandwiches</legend>
    <label htmlFor="option-1">
      <input type="radio" name="radio" id="roast-beef-sandwich" />
      <span>Roast beef sandwich</span>
    </label>
    <label htmlFor="option-2">
      <input type="radio" name="radio" id="fried-chicken-sandwich" />
      <span>Fried chicken sandwich</span>
    </label>
    <label htmlFor="option-3">
      <input type="radio" name="radio" id="blt" />
      <span>BLT</span>
    </label>
  </fieldset>
);
