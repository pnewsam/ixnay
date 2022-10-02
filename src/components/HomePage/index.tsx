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
    <Section>
      <PageTitle>Ixnay</PageTitle>
      <p>
        Ixnay is a sensible CSS boilerplate, with a set of CSS classes to
        extend.
      </p>
      <p>Design-wise, this project takes cues from:</p>
      <ul>
        <li>
          <a href="https://apple.com">Apple</a>
        </li>
        <li>
          <a href="https://vercel.com">Vercel</a>
        </li>
      </ul>
      <br />
      <p>Copy this into your index.html file</p>
      <br />
      <code className="block">
        &lt;link rel="stylesheet"
        href="https://d162l99amukxws.cloudfront.net/style.css" /&gt;
      </code>
      <br />
      <p>Dev-wise, it's heavily inspired by:</p>
      <br />
      <ul>
        <li>
          <a href="http://getskeleton.com">Skeleton</a>
        </li>
      </ul>
      <hr />
    </Section>

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
