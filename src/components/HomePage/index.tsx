import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "./Typography";
import { Buttons } from "./Buttons";
import { Code } from "./Code";
import { Forms } from "./Forms";
import { Headings } from "./Headings";
import { Interactable } from "./Interactable";
import { Lists } from "./Lists";
import { Overview } from "./Overview";
import { Tables } from "./Tables";
import { Section } from "../ui/Section";

const PageTitle = styled.h1`
  text-align: center;
`;

export const HomePage = () => (
  <>
    <Section style={{ textAlign: "center" }}>
      <PageTitle>Ixnay</PageTitle>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <Link to="/">Base</Link>
        <Link to="/">Components</Link>
      </div>
      <p>
        Ixnay is a sensible CSS boilerplate, with a set of CSS classes to
        extend.
      </p>
      <p>
        Design-wise, this project takes cues from{" "}
        <a href="https://apple.com">Apple</a>, and{" "}
        <a href="https://vercel.com">Vercel</a>. Dev-wise, it's heavily inspired
        by <a href="http://getskeleton.com">Skeleton</a>.
      </p>
      <p>Copy this into your index.html file</p>
      <code className="block">
        &lt;link rel="stylesheet"
        href="https://d162l99amukxws.cloudfront.net/style.css" /&gt;
      </code>
    </Section>
    <hr />

    <Overview />

    <Headings />

    <Typography />

    <Lists />

    <Code />

    <Buttons />

    <Forms />

    <Interactable />

    <Tables />
  </>
);
