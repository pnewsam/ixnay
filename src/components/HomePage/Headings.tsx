import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Headings = () => (
  <Section>
    <hgroup>
      <h2>Headings</h2>
      <p>
        <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>,{" "}
        <code>h5</code>, <code>h6</code>, and <code>hgroup</code>.
      </p>
    </hgroup>

    <SplitPane>
      <div>
        <h1>Sandwiches</h1>
        <h2>The best food in the world</h2>
        <h3>Available here</h3>
        <h4>Made fresh to order</h4>
        <h5>You won't regret stopping by</h5>
        <h6>Come see the Sandwich Renegade</h6>
      </div>
      <div>
        <code className="block">
          &lt;h1&gt;Sandwiches&lt;/h1&gt;
          <br />
          &lt;h2&gt;The best food in the world&lt;/h2&gt;
          <br />
          &lt;h3&gt;Available here&lt;/h3&gt;
          <br />
          &lt;h4&gt;Made fresh to order&lt;/h4&gt;
          <br />
          &lt;h5&gt;You won't regret stopping by&lt;/h5&gt;
          <br />
          &lt;h6&gt;Come see the Sandwich Renegade&lt;/h6&gt;
          <br />
        </code>
      </div>
    </SplitPane>

    <SplitPane>
      <div>
        <hgroup>
          <h1>Sandwich Renegade</h1>
          <p>The best sandwiches this side of the 77th meridian.</p>
        </hgroup>
      </div>
      <div>
        <code className="block">
          &lt;hgroup&gt;
          <br />
          &nbsp;&nbsp;&lt;h1&gt;Sandwich Emperor&lt;/h1&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;The best sandwiches this side of the 77th
          meridian.&lt;/p&gt;
          <br />
          &lt;/hgroup&gt;
        </code>
      </div>
    </SplitPane>
  </Section>
);
