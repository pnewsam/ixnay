import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEnv } from "../../contexts";
import { Section } from "../ui/Section";

const PageTitle = styled.h1`
  /* text-align: center; */
`;

export const OverviewPage = () => {
  const { isV2 } = useEnv();

  return (
    <Section>
      <PageTitle>Ixnay</PageTitle>
      <p>
        Ixnay is a class-lite CSS boilerplate. Add it to your project for
        baseline styles, and easily eject it when you invest in design.
        Design-wise, this project takes cues from{" "}
        <a href="https://apple.com">Apple</a>, and{" "}
        <a href="https://vercel.com">Vercel</a>. Dev-wise, it's heavily inspired
        by <a href="http://getskeleton.com">Skeleton</a>.
      </p>
      <h2>Quick start</h2>
      <p>Copy this into your index.html file to load the styles.</p>
      <code className="inline-block">
        &lt;link rel="stylesheet"
        href="https://d162l99amukxws.cloudfront.net/style.css" /&gt;
      </code>
      <p>
        And then simply start writing your markup normally. Because Ixnay's
        styles are opt-out, they'll be automatically applied to your HTML tags
        without any extra code.
      </p>
      <code className="inline-block">
        &lt;h1&gt;This heading will be styled.&lt;/h1&gt;
      </code>
      <p>If you want to opt out of the styles, apply a class of `nix`.</p>
      <code className="inline-block">
        &lt;h1 class="nix"&gt;This heading will not be styled.&lt;/h1&gt;
      </code>

      {false && (
        <>
          <hr />
          <h2>Apologia</h2>
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
    </Section>
  );
};
