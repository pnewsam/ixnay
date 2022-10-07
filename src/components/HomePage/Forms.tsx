import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Forms = () => (
  <Section>
    <h3>Forms</h3>{" "}
    <SplitPane
      els={["input[type='text']"]}
      code={
        <>
          &lt;label htmlFor="sandwich-name"&gt;Sandwich name&lt;/label&gt;
          <br />
          &lt;input type="text" id="sandwich-name" /&gt;
        </>
      }
    >
      <label htmlFor="sandwich-name">Sandwich name</label>
      <input type="text" id="sandwich-name" />
      <br />
    </SplitPane>
    <SplitPane
      els={["input[type='checkbox']"]}
      code={
        <>
          &nbsp;&nbsp;&lt;label htmlFor="subscribe"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="checkbox" name="subscribe"
          id="subscribe" /&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do you like sandwiches? If you
          check this box we'll send you weekly sandwich content.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/span&gt;
          <br />
          &nbsp;&nbsp;&lt;/label&gt;
        </>
      }
    >
      <label htmlFor="subscribe">
        <input type="checkbox" name="subscribe" id="subscribe" />
        <span>
          Do you like sandwiches? If you check this box we'll send you weekly
          sandwich content.
        </span>
      </label>
    </SplitPane>
    <SplitPane
      els={["fieldset", "legend", "input[type='radio']"]}
      code={
        <>
          &nbsp;&nbsp;&lt;fieldset&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;legend&gt;Traditional
          Sandwiches&lt;/legend&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label htmlFor="option-1"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="radio" name="radio"
          id="roast-beef-sandwich" /&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;Roast beef sandwich&lt;/span&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;label htmlFor="option-2"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="radio" name="radio"
          id="fried-chicken-sandwich" /&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;Fried chicken
          sandwich&lt;/span&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;label htmlFor="option-3"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="radio"
          name="radio" id="blt" /&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BLT
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;
          <br />
          &nbsp;&nbsp;&lt;/fieldset&gt;
        </>
      }
    >
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
    </SplitPane>
    <SplitPane
      els={["select", "optgroup", "option"]}
      code={
        <>
          &lt;label htmlFor="sandwiches"&gt;Alternative Sandwiches&lt;/label&gt;
          <br />
          &lt;select name="my-options" id="sandwiches"&gt;
          <br />
          &lt;option value="bagel-lox"&gt;Bagel with lox&lt;/option&gt;
          <br />
          &lt;optgroup label="Wraps"&gt;
          <br />
          &lt;option value="schwarma"&gt;Schwarma&lt;/option&gt;
          <br />
          &lt;option value="hummus-wrap"&gt;Hummus wrap&lt;/option&gt;
          <br />
          &lt;/optgroup&gt;
          <br />
          &lt;optgroup label="Open-face"&gt;
          <br />
          &lt;option value="avocado-toast"&gt;Avocado toast&lt;/option&gt;
          <br />
          &lt;/optgroup&gt;
          <br />
          &lt;/select&gt;
          <br />
        </>
      }
    >
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
    </SplitPane>
    <SplitPane
      els={["input[list]", "datalist", "option"]}
      code={
        <>
          &lt;label htmlFor="sandwich-list-input"&gt;
          <br />
          &nbsp;&nbsp;List of sandwiches
          <br />
          &lt;/label&gt;
          <br />
          &lt;input
          <br />
          &nbsp;&nbsp;list="sandwich-list-options"
          <br />
          &nbsp;&nbsp;id="sandwich-list-input"
          <br />
          &nbsp;&nbsp;name="sandwich"
          <br />
          /&gt;
          <br />
          &lt;datalist id="sandwich-list-options"&gt;
          <br />
          &nbsp;&nbsp;&lt;option value="Chicken Sandwich" /&gt;
          <br />
          &nbsp;&nbsp;&lt;option value="Egg Sandwich" /&gt;
          <br />
          &nbsp;&nbsp;&lt;option value="Seafood Sandwich" /&gt;
          <br />
          &nbsp;&nbsp;&lt;option value="Roast Beef Sandwich" /&gt;
          <br />
          &nbsp;&nbsp;&lt;option value="Grilled Cheese" /&gt;
          <br />
          &nbsp;&nbsp;&lt;option value="Ham Sandwich" /&gt;
          <br />
          &nbsp;&nbsp;&lt;option value="Nutella Sandwich" /&gt;
          <br />
          &nbsp;&nbsp;&lt;option value="Grilled Chicken Sandwich" /&gt;
          <br />
          &lt;/datalist&gt;
        </>
      }
    >
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
    </SplitPane>
  </Section>
);
