import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Typography = () => (
  <Section>
    <SplitPane
      els={["p", "span", "b", "em", "i", "u", "s", "mark"]}
      code={
        <>
          &lt;p&gt;
          <br />
          &nbsp;&nbsp;A sandwich is a food typically consisting of vegetables,
          sliced cheese or meat, placed on or between slices of bread, or more
          generally any dish wherein bread serves as a container or wrapper for
          another food type. The sandwich began as a portable, convenient finger
          food in the Western world, though over time it has become prevalent
          worldwide. &lt;/p&gt;
          <br />
          &lt;p&gt;
          <br />
          &nbsp;&nbsp;This sandwich is &lt;strong&gt;strong&lt;/strong&gt;, or
          &lt;em&gt;emphasized&lt;/em&gt;.
          <br />
          &lt;/p&gt;
          <br />
          &lt;p&gt;
          <br />
          &nbsp;&nbsp;This sandwich is &lt;i&gt;italicized&lt;/i&gt;.
          <br />
          &lt;/p&gt;
          <br />
          &lt;p&gt;
          <br />
          &nbsp;&nbsp;This sandwich is &lt;u&gt;underlined&lt;/u&gt;.
          <br />
          &lt;/p&gt;
          <br />
        </>
      }
    >
      <p>
        A sandwich is a food typically consisting of vegetables, sliced cheese
        or meat, placed on or between slices of bread, or more generally any
        dish wherein bread serves as a container or wrapper for another food
        type. The sandwich began as a portable, convenient finger food in the
        Western world, though over time it has become prevalent worldwide.
      </p>
      <p>
        This sandwich is <strong>strong</strong>, or <em>emphasized</em>
      </p>
      <p>
        This sandwich is <i>italicized</i>
      </p>
      <p>
        This sandwich is <u>underlined</u>
      </p>
    </SplitPane>

    <SplitPane
      els={["blockquote", "cite"]}
      code={
        <>
          &lt;blockquote&gt;
          <br />
          &nbsp;&nbsp;...any form of bread with a filling, generally assembled
          cold
          <br />
          &lt;/blockquote&gt;
          <br />
          &lt;cite&gt;
          <br />
          &nbsp;&nbsp;Code of Practice and Minimum Standards for Sandwich
          Manufacturers - British Sandwich Association.
          <br />
          &lt;/cite&gt;
          <br />
        </>
      }
    >
      <blockquote>
        ...any form of bread with a filling, generally assembled cold
      </blockquote>
      <cite>
        Code of Practice and Minimum Standards for Sandwich Manufacturers -
        British Sandwich Association.
      </cite>
    </SplitPane>

    <SplitPane
      els={["code", "var", "samp", "kbd", "pre", "time"]}
      code={
        <>
          &lt;p&gt;
          <br />
          &nbsp;&nbsp;If you want some inline code, it will look like
          &lt;code&gt;this&lt;/code&gt;
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
        If you want some inline code, it will look like <code>this</code>
      </p>
      <p>
        This is a <var>var</var>
      </p>
      <p>
        This is a <samp>samp</samp>
      </p>
      <p>
        These are kbd: <kbd>⌘</kbd>, <kbd>⇧</kbd>, <kbd>⌥</kbd>, <kbd>⌃</kbd>
      </p>
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
