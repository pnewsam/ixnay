import styled from "styled-components";
import { SnippetCard } from "./ui/SnippetCard";

const FlexWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;

export const ButtonsPage = () => {
  return (
    <article>
      <section>
        <h1 id="form">Buttons</h1>

        <SnippetCard
          title="Primary"
          Code={
            <>
              &lt;button&gt;Default&lt;button&gt;
              <br />
              &lt;button class="sm"&gt;Small&lt;button&gt;
              <br />
              &lt;button&gt;Medium&lt;button&gt;
              <br />
              &lt;button class="lg"&gt;Large&lt;button&gt;
              <br />
              &lt;button disabled&gt;Disabled&lt;button&gt;
            </>
          }
        >
          <FlexWrapper>
            <button>Default</button>
            <button className="sm">Small</button>
            <button>Medium</button>
            <button className="lg">Large</button>
            <button disabled>Disabled</button>
          </FlexWrapper>
        </SnippetCard>

        <SnippetCard
          title="Secondary"
          Code={
            <>
              &lt;button class="secondary sm"&gt;Small&lt;button&gt;
              <br />
              &lt;button class="secondary"&gt;Medium&lt;button&gt;
              <br />
              &lt;button class="secondary lg"&gt;Large&lt;button&gt;
            </>
          }
        >
          <FlexWrapper>
            <button className="secondary">Default</button>
            <button className="secondary sm">Small</button>
            <button className="secondary">Medium</button>
            <button className="secondary lg">Large</button>
            <button className="secondary" disabled>
              Disabled
            </button>
          </FlexWrapper>
        </SnippetCard>
      </section>
    </article>
  );
};
