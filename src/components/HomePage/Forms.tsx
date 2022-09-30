import { Section, SplitPane } from "./index.styled";

export const Forms = () => (
  <Section>
    <h2>Forms</h2>
    <SplitPane>
      <form action="">
        <label htmlFor="">First Name</label>
        <input type="text" />
        <label htmlFor="">Last Name</label>
        <input type="text" />
        <br />
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Check this box?</label>
        <br />

        <fieldset>
          <legend>Checkbox options</legend>
          <input type="radio" name="radio" id="option-1" />
          <label htmlFor="option-1">Option 1</label>
          <input type="radio" name="radio" id="option-2" />
          <label htmlFor="option-2">Option 2</label>
          <input type="radio" name="radio" id="option-3" />
          <label htmlFor="option-3">Option 3</label>
        </fieldset>
        <br />

        <label htmlFor="sandwiches">Sandwiches</label>
        <select name="my-options" id="sandwiches">
          <optgroup label="Group">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </optgroup>
          <option value="3">Option 3</option>
        </select>
        <br />
        <br />

        <label htmlFor="browser">Choose your browser from the list:</label>
        <input list="browsers" name="browser" id="browser" />
        <br />
        <br />

        <label htmlFor="soft-drink-choice">Soft drinks</label>
        <input
          list="soft-drinks"
          id="soft-drink-choice"
          name="soft-drink-choice"
        />
        <datalist id="soft-drinks">
          <option value="Pepsi" />
          <option value="Seven Up" />
          <option value="Fanta" />
          <option value="Dr. Pepper" />
        </datalist>

        <button type="submit">Submit</button>
      </form>
      <div>
        <code className="block"></code>
      </div>
    </SplitPane>
  </Section>
);
