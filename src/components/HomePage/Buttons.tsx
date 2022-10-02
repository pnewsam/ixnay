import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Buttons = () => (
  <Section>
    <hgroup>
      <h2>Buttons</h2>
      <p>
        <code>button</code>
      </p>
    </hgroup>
    <SplitPane>
      <div className="nix">
        <button>Order sandwich</button>
        <button disabled>Order sandwich</button>
        <br />
        <br />
        <button className="secondary">Cancel order</button>
        <button disabled className="secondary">
          Cancel order
        </button>
      </div>
      <div>
        <code className="block">
          &lt;button&gt;Order sandwich&lt;/button&gt;
          <br />
          &lt;button disabled&gt;Order sandwich&lt;/button&gt;
          <br />
          &lt;button className="secondary"&gt;Cancel order&lt;/button&gt;
          <br />
          &lt;button disabled className="secondary"&gt;Cancel
          order&lt;/button&gt;
          <br />
        </code>
      </div>
    </SplitPane>
  </Section>
);
