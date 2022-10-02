import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Typography = () => (
  <Section>
    <hgroup>
      <h2>Typography</h2>
      <p>
        <code>p</code>, <code>span</code>, <code>b</code>, <code>em</code>,{" "}
        <code>i</code>, <code>u</code>, <code>s</code>, <code>mark</code>,{" "}
        <code>blockquote</code>, and <code>cite</code>.
      </p>
    </hgroup>

    <SplitPane>
      <div>
        <p>
          A <b>sandwich</b> is a food typically consisting of vegetables, sliced
          cheese or meat, placed on or between slices of bread, or more
          generally any dish wherein bread serves as a container or wrapper for
          another food type. The sandwich began as a portable, convenient finger
          food in the Western world, though over time it has become
          prevalent&nbsp;
          <u>worldwide</u>.
        </p>

        <p>
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
        </p>

        <br />
        <blockquote>
          ...any form of bread with a filling, generally assembled cold
        </blockquote>
        <br />
        <cite>
          Code of Practice and Minimum Standards for Sandwich Manufacturers -
          British Sandwich Association.
        </cite>
        <br />
        <br />

        <p>
          Sandwiches are a popular type of lunch food, taken to work, school, or
          picnics to be eaten as part of a packed lunch. The bread may be plain
          or be coated with condiments, such as mayonnaise or mustard, to
          enhance its flavour and texture. As well as being homemade, sandwiches
          are also widely sold in various retail outlets and can be served hot
          or cold. There are both savoury sandwiches, such as deli meat
          sandwiches, and sweet sandwiches, such as a peanut butter and jelly
          sandwich.
        </p>

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
