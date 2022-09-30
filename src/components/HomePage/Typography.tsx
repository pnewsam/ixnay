import { Section, SplitPane } from "./index.styled";

export const Typography = () => (
  <Section>
    <h2>Typography</h2>
    <SplitPane>
      <div>
        <p>The typeface is the standard fontstack</p>
      </div>
      <div>
        <code className="block">
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Helvetica Neue", "Ubuntu", sans-serif;
        </code>
      </div>
    </SplitPane>

    <br />
    <SplitPane>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h5>Heading 6</h5>

        <hgroup>
          <h1>My heading</h1>
          <p>My subheading</p>
        </hgroup>
      </div>

      <div>
        <code className="block">
          &lt;h1&gt;Heading 1&lt;/h1&gt;
          <br />
          &lt;h2&gt;Heading 2&lt;/h2&gt;
          <br />
          &lt;h3&gt;Heading 3&lt;/h3&gt;
          <br />
          &lt;h4&gt;Heading 4&lt;/h4&gt;
          <br />
          &lt;h5&gt;Heading 5&lt;/h5&gt;
          <br />
          &lt;h5&gt;Heading 6&lt;/h5&gt;
          <br />
          &lt;group&gt;
          <br />
          &lt;h1&gt;My heading&lt;/h1&gt;
          <br />
          &lt;h1&gt;My subheading&lt;/h1&gt;
          <br />
          &lt;/hgroup&gt;
        </code>
      </div>
    </SplitPane>

    <SplitPane>
      <div>
        <p>The base type is 16px over 1.6 line height (24px)</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis at
          accusamus laborum, quis eveniet doloribus incidunt iure omnis nam
          mollitia et optio similique velit tempore itaque sit in illo cum!
        </p>
        <br />

        <strong>Bolded</strong>
        <br />
        <br />
        <em>Emphasized</em>
        <br />
        <br />
        <i>Italicized</i>
        <br />
        <br />
        <a href="/">Link</a>
        <br />
        <br />
        <u>Underlined</u>
        <br />
        <br />
        <mark>Highlighted</mark>
        <br />
        <br />
        <blockquote>
          All of old. Nothing else ever. Ever tried. Ever failed. No matter. Try
          again. Fail again. Fail better.
        </blockquote>
        <p>
          <cite>Worstward Ho</cite> by Samuel Beckett.
        </p>
      </div>
      <div>
        <code className="block">
          &lt;p&gt;The base type is 16px over 1.6 line height (24px)&lt;/p&gt;
          <br />
          &lt;p&gt; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Nobis at accusamus laborum, quis eveniet doloribus incidunt iure omnis
          nam mollitia et optio similique velit tempore itaque sit in illo cum!
          &lt;/p&gt;
          <br />
          &lt;strong&gt;Bolded&lt;/strong&gt;
          <br />
          &lt;em&gt;Emphasized&lt;/em&gt;
          <br />
          &lt;i&gt;Italicized&lt;/i&gt;
          <br />
          &lt;a&gt;Link&lt;/a&gt;
          <br />
          &lt;u&gt;Underlined&lt;/u&gt;
          <br />
        </code>
      </div>
    </SplitPane>
  </Section>
);
