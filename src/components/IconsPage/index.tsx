import styled from "styled-components";
import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";
import { DisplaySquare } from "../ui/DisplaySquare";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconsPage = () => (
  <Section>
    <h1>Icons</h1>
    <p>
      Icons are derived from&nbsp;
      <a href="https://feathericons.com/">Feather Icons</a>.
    </p>
    <FlexContainer>
      <DisplaySquare name="Search">
        <svg className="icon-search" />
      </DisplaySquare>
    </FlexContainer>
  </Section>
);
