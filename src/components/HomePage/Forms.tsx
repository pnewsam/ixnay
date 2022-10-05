import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Forms = () => (
  <Section>
    <hgroup>
      <h2>Forms</h2>{" "}
      <p>
        <code>form</code>, <code>label</code>, <code>input</code>,{" "}
        <code>select</code>, <code>optgroup</code>, <code>option</code>, and{" "}
        <code>datalist</code>.
      </p>
    </hgroup>
    <SplitPane>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <br />
        <label htmlFor="subscribe">
          <input type="checkbox" name="subscribe" id="subscribe" />
          <span>
            Do you like sandwiches? If you check this box we'll send you weekly
            sandwich content.
          </span>
        </label>

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
            BLT
          </label>
        </fieldset>
        <br />

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

        <label htmlFor="more-sandwiches">More sandwiches:</label>
        <input list="browsers" name="browser" id="more-sandwiches" />

        <label htmlFor="soft-drink-choice">Additional sandwiches</label>
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

        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <code className="block"></code>
      </div>
    </SplitPane>
  </Section>
);
