import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Overview = () => (
  <Section>
    <h2>Overview</h2>
    <SplitPane>
      <div>
        <p>The typeface is the standard fontstack</p>
      </div>
      <div>
        <code className="block">
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Helvetica Neue", "Ubuntu", sans-serif;
        </code>
      </div>
    </SplitPane>
  </Section>
);
