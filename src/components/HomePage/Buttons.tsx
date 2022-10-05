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
        <div style={{ display: "flex", gap: "16px" }}>
          <button>Order sandwich</button>
          <button disabled>Order sandwich</button>
        </div>
        <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
          <button className="secondary">Cancel order</button>
          <button disabled className="secondary">
            Cancel order
          </button>
        </div>
      </div>
      <div>
        <code className="block">
          &lt;button&gt;Order sandwich&lt;/button&gt;
          <br />
          &lt;button disabled&gt;Order sandwich&lt;/button&gt;
          <br />
          <br />
          &lt;button <mark>class="secondary"</mark>&gt;Cancel
          order&lt;/button&gt;
          <br />
          &lt;button disabled <mark>class="secondary"</mark>&gt;Cancel
          order&lt;/button&gt;
          <br />
        </code>
      </div>
      <div>
        {/* prettier-ignore */}
        <pre>
{`{
  'hello': 'asdf',

}`}
        </pre>
      </div>
    </SplitPane>
  </Section>
);
