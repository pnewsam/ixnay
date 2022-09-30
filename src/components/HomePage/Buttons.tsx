import { Section, SplitPane } from "./index.styled";

export const Buttons = () => (
  <Section>
    <h2>Buttons</h2>
    <SplitPane>
      <div className="nix">
        <button>Primary</button>
        <br />
        <br />
        <button className="secondary">Secondary</button>
        <br />
        <br />
        <button disabled>Disabled</button>
      </div>
      <div>
        <code className="block">
          &lt;button&gt;Primary Button&lt;/button&gt;
          <br />
          &lt;button className="secondary"&gt;Secondary Button&lt;/button&gt;
          <br />
          &lt;button disabled&gt;Disabled&lt;/button&gt;
        </code>
      </div>
    </SplitPane>
  </Section>
);
