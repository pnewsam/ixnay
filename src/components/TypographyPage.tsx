import { SnippetCard } from "./ui/SnippetCard";

export const TypographyPage = () => {
  return (
    <article>
      <h1 id="text">Typography</h1>
      <SnippetCard
        title="Headings"
        Code={
          <>
            &lt;h1&gt;Heading 1&lt;h1&gt;
            <br />
            &lt;h2&gt;Heading 2&lt;h2&gt;
            <br />
            &lt;h3&gt;Heading 3&lt;h3&gt;
            <br />
            &lt;h4&gt;Subtitle 1&lt;h4&gt;
            <br />
            &lt;h5&gt;Subtitle 2&lt;h5&gt;
          </>
        }
      >
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <span />
        <h4>Subtitle 1</h4>
        <h5>Subtitle 2</h5>
      </SnippetCard>

      <SnippetCard
        title="With Subtitle"
        description="If you place a subtitle right after a title, the margin will between
        them will be removed."
        Code={
          <>
            &lt;h3&gt;Heading 3&lt;h3&gt;
            <br />
            &lt;h4&gt;Subtitle 1&lt;h4&gt;
          </>
        }
      >
        <h3>Heading 3</h3>
        <h4>Subtitle 1</h4>
      </SnippetCard>

      <SnippetCard
        title="Body Text"
        s
        Code={
          <>
            &lt;p&gt; Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores cumque odio modi minus doloribus veniam, incidunt accusamus
            eos amet harum nostrum quod atque voluptate quas ducimus,
            repudiandae voluptatum optio aspernatur. &lt;/p&gt;
            <br />
            <br />
            &lt;p class="sm"&gt; Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque, recusandae. Minima unde obcaecati
            perspiciatis praesentium aspernatur tempore animi id nobis ullam?
            Laudantium rerum similique nisi qui. Molestias sunt quasi natus!
            &lt;/p&gt;
          </>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          cumque odio modi minus doloribus veniam, incidunt accusamus eos amet
          harum nostrum quod atque voluptate quas ducimus, repudiandae
          voluptatum optio aspernatur.
        </p>
        <p className="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          recusandae. Minima unde obcaecati perspiciatis praesentium aspernatur
          tempore animi id nobis ullam? Laudantium rerum similique nisi qui.
          Molestias sunt quasi natus!
        </p>
      </SnippetCard>

      <section>
        <h5>a tag</h5>
        <p>
          The link is right <a href="">here</a>.
        </p>
      </section>
    </article>
  );
};
