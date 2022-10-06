import { Typography } from "./Typography";
import { Buttons } from "./Buttons";
import { Code } from "./Code";
import { Forms } from "./Forms";
import { Headings } from "./Headings";
import { Interactable } from "./Interactable";
import { Lists } from "./Lists";
import { Overview } from "./Overview";
import { Tables } from "./Tables";

export const HomePage = () => {
  return (
    <>
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
};
