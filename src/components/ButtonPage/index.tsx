import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const ButtonPage = () => (
  <Section>
    <h2>Button</h2>
    <SplitPane
      els={["button"]}
      code={
        <>
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
        </>
      }
    >
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
      <div>
        {/* @ts-ignore */}
        <button-2 onClick={() => alert("hello")}>hey</button-2>
      </div>
    </SplitPane>
  </Section>
);
