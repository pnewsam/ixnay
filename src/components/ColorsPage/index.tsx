import styled from "styled-components";
import { Section } from "../ui/Section";
import { Swatch } from "../ui/Swatch";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ColorsPage = () => {
  return (
    <Section>
      <h1>Colors</h1>
      <h2>Primary</h2>
      <FlexContainer>
        <Swatch name="10" style={{ "--color": "var(--primary-10)" }} />
        <Swatch name="20" style={{ "--color": "var(--primary-20)" }} />
        <Swatch name="30" style={{ "--color": "var(--primary-30)" }} />
        <Swatch name="40" style={{ "--color": "var(--primary-40)" }} />
        <Swatch name="50" style={{ "--color": "var(--primary-50)" }} />
        <Swatch name="60" style={{ "--color": "var(--primary-60)" }} />
        <Swatch name="70" style={{ "--color": "var(--primary-70)" }} />
        <Swatch name="80" style={{ "--color": "var(--primary-80)" }} />
        <Swatch name="90" style={{ "--color": "var(--primary-90)" }} />
      </FlexContainer>

      <h2>Secondary</h2>
      <FlexContainer>
        <Swatch name="10" style={{ "--color": "var(--secondary-10)" }} />
        <Swatch name="20" style={{ "--color": "var(--secondary-20)" }} />
        <Swatch name="30" style={{ "--color": "var(--secondary-30)" }} />
        <Swatch name="40" style={{ "--color": "var(--secondary-40)" }} />
        <Swatch name="50" style={{ "--color": "var(--secondary-50)" }} />
        <Swatch name="60" style={{ "--color": "var(--secondary-60)" }} />
        <Swatch name="70" style={{ "--color": "var(--secondary-70)" }} />
        <Swatch name="80" style={{ "--color": "var(--secondary-80)" }} />
        <Swatch name="90" style={{ "--color": "var(--secondary-90)" }} />
      </FlexContainer>

      <h2>Neutral</h2>
      <FlexContainer>
        <Swatch name="Black" style={{ "--color": "var(--black)" }} />
        <Swatch
          name="White"
          style={{
            "--color": "var(--white)",
          }}
        />
      </FlexContainer>

      <h2>Grey</h2>
      <FlexContainer>
        <Swatch name="10" style={{ "--color": "var(--grey-10)" }} />
        <Swatch name="20" style={{ "--color": "var(--grey-20)" }} />
        <Swatch name="30" style={{ "--color": "var(--grey-30)" }} />
        <Swatch name="40" style={{ "--color": "var(--grey-40)" }} />
        <Swatch name="50" style={{ "--color": "var(--grey-50)" }} />
        <Swatch name="60" style={{ "--color": "var(--grey-60)" }} />
        <Swatch name="70" style={{ "--color": "var(--grey-70)" }} />
        <Swatch name="80" style={{ "--color": "var(--grey-80)" }} />
        <Swatch name="90" style={{ "--color": "var(--grey-90)" }} />
      </FlexContainer>
    </Section>
  );
};
