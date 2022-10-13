import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const BadgePage = () => (
  <Section>
    <h2>Badge</h2>
    <p>A badge to indicate</p>
    <hr />

    <SplitPane els={["i-badge"]} code={<></>}>
      {/* @ts-ignore */}
      <i-badge>Standard</i-badge>
      {/* @ts-ignore */}
      <i-badge variant="warning">Warning</i-badge>
      {/* @ts-ignore */}
      <i-badge variant="danger">Danger</i-badge>
      {/* @ts-ignore */}
      <i-badge variant="success">Success</i-badge>
      {/* @ts-ignore */}
      <i-badge variant="info">Info</i-badge>
    </SplitPane>
  </Section>
);
