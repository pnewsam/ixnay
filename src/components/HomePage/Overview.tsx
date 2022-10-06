import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEnv } from "../../contexts";
import { IS_V2 } from "../../utils";
import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

const PageTitle = styled.h1`
  text-align: center;
`;

export const Overview = () => {
  const { isV2 } = useEnv();

  return (
    <Section>
      <PageTitle>Ixnay</PageTitle>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <Link to="/">Base</Link>
        <Link to="/">Components</Link>
      </div>
      <p>
        Ixnay is a class-less CSS boilerplate. Add it to your project for
        baseline styles, and eject it when you invest in design.
      </p>
      <p>
        Design-wise, this project takes cues from{" "}
        <a href="https://apple.com">Apple</a>, and{" "}
        <a href="https://vercel.com">Vercel</a>. Dev-wise, it's heavily inspired
        by <a href="http://getskeleton.com">Skeleton</a>.
      </p>
      <p>Copy this into your index.html file</p>
      <code>
        &lt;link rel="stylesheet"
        href="https://d162l99amukxws.cloudfront.net/style.css" /&gt;
      </code>

      {isV2 && (
        <>
          <h2>Overview</h2>
          <p>
            The problem with existing CSS frameworks like Tailwind, Bulma, and
            Bootstrap is that they
          </p>
          <p>Things that will take Ixnay to the next level:</p>
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
        </>
      )}

      <SplitPane
        code={
          <>
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Helvetica Neue", "Ubuntu", sans-serif;
          </>
        }
      >
        <div>
          <p>The typeface is the standard fontstack</p>
        </div>
      </SplitPane>
    </Section>
  );
};
