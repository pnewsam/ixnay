import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Headings = () => (
  <Section>
    <SplitPane
      els={["h1", "h2", "h3", "h4", "h5", "h6"]}
      code={
        <>
          &lt;h1&gt;Sandwiches&lt;/h1&gt;
          <br />
          &lt;h2&gt;The best in the world&lt;/h2&gt;
          <br />
          &lt;h3&gt;Available here&lt;/h3&gt;
          <br />
          &lt;h4&gt;Made fresh to order&lt;/h4&gt;
          <br />
          &lt;h5&gt;You won't regret stopping by&lt;/h5&gt;
          <br />
          &lt;h6&gt;Come see the Sandwich Renegade&lt;/h6&gt;
        </>
      }
      codeString={`<h1>Sandwiches</h1>
<h2>The best in the world</h2>
<h3>Available here</h3>
<h4>Made fresh to order</h4>
<h5>You won't regret stopping by</h5>
<h6>Come see the Sandwich Renegade</h6>`}
    >
      <h1>Sandwiches</h1>
      <h2>The best in the world</h2>
      <h3>Available here</h3>
      <h4>Made fresh to order</h4>
      <h5>You won't regret stopping by</h5>
      <h6>Come see the Sandwich Renegade</h6>
    </SplitPane>

    <SplitPane
      els={["hgroup"]}
      code={
        <>
          &lt;hgroup&gt;
          <br />
          &nbsp;&nbsp;&lt;h2&gt;Sandwich Emperor&lt;/h2&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;The best sandwiches this side of the 77th
          meridian.&lt;/p&gt;
          <br />
          &lt;/hgroup&gt;
        </>
      }
    >
      <hgroup>
        <h2>Sandwich Renegade</h2>
        <p>The best sandwiches this side of the 77th meridian.</p>
      </hgroup>
    </SplitPane>
  </Section>
);
