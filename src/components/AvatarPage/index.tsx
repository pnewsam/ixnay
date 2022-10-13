import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const AvatarPage = () => (
  <Section>
    <h2>Avatar</h2>
    <p>Display a user avatar.</p>

    <hr />

    <SplitPane els={["i-avatar"]} code={<></>}>
      <></>
    </SplitPane>
  </Section>
);
