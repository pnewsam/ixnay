import { Article } from "../ui/Article";
import { Section } from "../ui/Section";

export const TextPage = () => {
  return (
    <Article>
      <h1 id="text">Text</h1>
      <Section>
        <h2>Headers</h2>
        <h1>&lt; h1 &gt; - Header 1</h1>
        <h2>&lt; h2 &gt; - Header 2</h2>
        <h3>&lt; h3 &gt; - Header 3</h3>
        <h4>&lt; h4 &gt; - Header 4</h4>
        <h5>&lt; h5 &gt; - Header 5</h5>
        <h6>&lt; h6 &gt; - Header 6</h6>
      </Section>

      <Section>
        <h2>p tag</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          odio enim eos sunt facere quasi in, et ipsum distinctio error eum
          nulla sint voluptate alias, animi quis dolore ut rerum explicabo
          similique. Ab mollitia minus vel. Quo aliquam suscipit quae nihil
          dignissimos eum ut, eius veritatis perspiciatis corporis similique
          totam!
        </p>
      </Section>

      <Section>
        <h2>a tag</h2>
        <p>
          The link is right <a href="">here</a>.
        </p>
      </Section>
    </Article>
  );
};
