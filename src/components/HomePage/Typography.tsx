import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Typography = () => (
  <Section>
    <hgroup>
      <h2>Typography</h2>
      <p>
        <code>p</code>, <code>span</code>, <code>b</code>, <code>em</code>,{" "}
        <code>i</code>, <code>u</code>, <code>s</code>, <code>mark</code>,{" "}
        <code>q</code>,<code>blockquote</code>, and <code>cite</code>,{" "}
        <code>abbr</code>, <code>address</code>.
      </p>
    </hgroup>

    <SplitPane>
      <div>
        <p>
          A sandwich is a food typically consisting of vegetables, sliced cheese
          or meat, placed on or between slices of bread, or more generally any
          dish wherein bread serves as a container or wrapper for another food
          type. The sandwich began as a portable, convenient finger food in the
          Western world, though over time it has become prevalent worldwide.
        </p>
        <p>
          This sandwich is <b>bolded</b>.
        </p>
        <p>
          This sandwich is <strong>strong</strong>.
        </p>
        <p>
          This sandwich is <em>emphasized</em>.
        </p>
        <p>
          This sandwich is <i>italicized</i>.
        </p>
        <p>
          This sandwich is <u>underlined</u>.
        </p>
        <p>
          This sandwich is <mark>highlighted</mark>.
        </p>
        <p>
          This sandwich is <s>struck through</s>.
        </p>
        <p>
          This sandwich is <sup>superscripted</sup>
        </p>
        <p>
          This sandwich is <sub>subscripted</sub>.
        </p>
        .
        {/* <p>
          In the 21st century there has been considerable debate over the
          precise definition of sandwich; and specifically whether a hot dog or
          open sandwich can be categorized as such. In the United States,
          the&nbsp;
          <i>Department of Agriculture</i> and the{" "}
          <i>Food and Drug Administration</i>&nbsp;are the responsible agencies.
          The USDA uses the definition,{" "}
          <mark>"at least 35% cooked meat and no more than 50% bread"</mark> for
          closed sandwiches, and "at least 50% cooked meat" for open sandwiches.
          In Britain, the British Sandwich Association defines a sandwich as
          "any form of bread with a filling, generally assembled cold", a
          definition which includes wraps and bagels, but{" "}
          <em>excludes dishes assembled and served hot</em>, such as{" "}
          <s>burgers</s>.
        </p> */}
        <blockquote>
          ...any form of bread with a filling, generally assembled cold
        </blockquote>
        <cite>
          Code of Practice and Minimum Standards for Sandwich Manufacturers -
          British Sandwich Association.
        </cite>
        <p>
          The sandwich is named after its supposed inventor,&nbsp;
          <a href="https://en.wikipedia.org/wiki/John_Montagu,_4th_Earl_of_Sandwich">
            John Montagu, 4th Earl of Sandwich
          </a>
          . The Wall Street Journal has described it as Britain's "biggest
          contribution to gastronomy".
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
