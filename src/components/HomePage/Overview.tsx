import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Overview = () => (
  <Section>
    <h2>Overview</h2>
    Things that will take Ixnay to the next level
    <ul>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:has">
          <code>:has</code> pseudo selector
        </a>
      </li>
      <li>
        <a href="https://tabatkins.github.io/specs/css-apply-rule/">
          <code>@apply</code> (native mixins)
        </a>
      </li>
    </ul>
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
