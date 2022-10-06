import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Code = () => (
  <Section>
    <h2>Code and Data</h2>

    <SplitPane
      els={["code", "var", "samp", "kbd", "pre", "time"]}
      code={
        <>
          &lt;p&gt;
          <br />
          &nbsp;&nbsp;If you want some inline code, it will look like
          &lt;code&gt;this&lt;/code&gt;.
          <br />
          &lt;/p&gt;
          <br />
          &lt;var&gt;Var element&lt;/var&gt;
          <br />
          &lt;samp&gt;Sample element&lt;/samp&gt;
          <br />
          &lt;kbd&gt;⌘&lt;/kbd&gt;
          <br />
          &lt;kbd&gt;⇧&lt;/kbd&gt;
          <br />
          &lt;kbd&gt;⌥&lt;/kbd&gt;
          <br />
          &lt;kbd&gt;⌃&lt;/kbd&gt;
          <br />
          &lt;pre&gt;
          <br />
          {
            <>
              {`{`}
              <br />
              &nbsp;&nbsp;&nbsp;
              {`"name": "John",`}
              <br />
              &nbsp;&nbsp;
              {`  "age":30,`}
              <br />
              &nbsp;&nbsp;
              {`  "car":null`}
              <br />
              {`}`}
            </>
          }
          <br />
          &lt;/pre&gt;
        </>
      }
    >
      <p>
        If you want some inline code, it will look like <code>this</code>.
      </p>
      <br />
      <var>Var element</var>
      <br />
      <samp>Sample element</samp>
      <br />
      <kbd>⌘</kbd>
      <br />
      <kbd>⇧</kbd>
      <br />
      <kbd>⌥</kbd>
      <br />
      <kbd>⌃</kbd>
      <br />
      <pre>
        {`{
  "name": "John",
  "age":30,
  "car":null
}`}
      </pre>
    </SplitPane>
  </Section>
);
