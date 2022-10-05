import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Code = () => (
  <Section>
    <hgroup>
      <h2>Code and Data</h2>
      <p>
        <code>code</code>, <code>var</code>, <code>samp</code>, <code>kbd</code>
        , <code>pre</code>, and <code>time</code>.
      </p>
    </hgroup>

    <SplitPane>
      <div>
        <p>
          If you want some inline code, it will look like <code>this</code>.
        </p>
        <br />
        <code className="block">This is a block of code</code>
        <br />
      </div>
      <div>
        <code className="block">
          &lt;p&gt;
          <br />
          &nbsp;&nbsp;If you want some inline code, it will look like
          &lt;code&gt;this&lt;/code&gt;.
          <br />
          &lt;/p&gt;
          <br />
          &lt;code <mark>className="block"</mark>&gt;This is a block of
          code&lt;/code&gt;
        </code>
      </div>
    </SplitPane>

    <SplitPane>
      <div>
        <var>Var element</var>
      </div>
      <div>
        <code className="block">&lt;var&gt;Var element&lt;/var&gt;</code>
      </div>
    </SplitPane>

    <SplitPane>
      <div>
        <samp>Sample element</samp>
      </div>
      <div>
        <code className="block">&lt;samp&gt;Sample element&lt;/samp&gt;</code>
      </div>
    </SplitPane>

    <SplitPane>
      <div>
        <kbd>⌘</kbd>
        <br />
        <kbd>⇧</kbd>
        <br />
        <kbd>⌥</kbd>
        <br />
        <kbd>⌃</kbd>
        <br />
      </div>
      <div>
        <code className="block">
          &lt;kbd&gt;⌘&lt;/kbd&gt;
          <br />
          &lt;kbd&gt;⇧&lt;/kbd&gt;
          <br />
          &lt;kbd&gt;⌥&lt;/kbd&gt;
          <br />
          &lt;kbd&gt;⌃&lt;/kbd&gt;
          <br />
        </code>
      </div>
    </SplitPane>

    <SplitPane>
      <div>
        <pre>
          {`{
  "name": "John",
  "age":30,
  "car":null
}`}
        </pre>
      </div>
      <div>
        <code className="block">
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
        </code>
      </div>
    </SplitPane>

    <SplitPane>
      <div>
        <time>{Date.now().toLocaleString()}</time>
      </div>
      <div>
        <code className="block"></code>
      </div>
    </SplitPane>
  </Section>
);
