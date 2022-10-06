import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Typography = () => (
  <Section>
    <h2>Typography</h2>

    <SplitPane
      els={[
        "p",
        "span",
        "b",
        "em",
        "i",
        "u",
        "s",
        "mark",
        "q",
        "blockquote",
        "cite",
        "abbr",
        "address",
      ]}
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
        This sandwich is <strong>strong</strong>, or <em>emphasized</em>.
      </p>
      <p>
        This sandwich is <i>italicized</i>.
      </p>
      <p>
        This sandwich is <u>underlined</u>.
      </p>
    </SplitPane>

    <SplitPane
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
  </Section>
);
