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
        <label htmlFor="">Irstfay Name</label>
        <input type="text" />
        <label htmlFor="">Astlay Name</label>
        <input type="text" />
        <br />
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Ubscribesay otay ethay ewsletternay.</label>
        <p>If you check this box, we'll send you marketing updates on the.</p>

        <fieldset>
          <legend>Checkbox options</legend>
          <input type="radio" name="radio" id="option-1" />
          <label htmlFor="option-1">
            <span>Option 1</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </label>
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
