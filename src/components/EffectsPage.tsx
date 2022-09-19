import styled from "styled-components";
import { SnippetCard } from "./ui/SnippetCard";
import { Swatch } from "./ui/Swatch";

const Shadow1Swatch = styled(Swatch)`
  box-shadow: var(--shadow-1);
`;
const Shadow2Swatch = styled(Swatch)`
  box-shadow: var(--shadow-2);
`;

export const EffectsPage = () => {
  return (
    <article>
      <h1 id="form">Effects</h1>

      <SnippetCard
        title="Shadows"
        Code={
          <>
            &lt;div style="box-shadow: var(--shadow-1);" &gt;
            <br />
            &lt;div style="box-shadow: var(--shadow-2);" &gt;
          </>
        }
      >
        <Shadow1Swatch />
        <Shadow2Swatch />
      </SnippetCard>
    </article>
  );
};
