import { Typography } from "./Typography";
import { Buttons } from "./Buttons";
import { Code } from "./Code";
import { Forms } from "./Forms";
import { Lists } from "./Lists";
import { Interactable } from "./Interactable";
import { Tables } from "./Tables";

export const HomePage = () => (
  <article>
    <h1>Ixnay</h1>
    <p>
      Ixnay is a sensible CSS boilerplate, with a set of CSS classes to extend.
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
    <p>Dev-wise, it's heavily inspired by:</p>
    <ul>
      <li>
        <a href="http://getskeleton.com">Skeleton</a>
      </li>
    </ul>
    <hr />

    <Typography />
    <hr />

    <Code />
    <hr />

    <Buttons />
    <hr />

    <Forms />
    <hr />

    <Interactable />
    <hr />

    <Lists />
    <hr />

    <Tables />
    <hr />
  </article>
);
