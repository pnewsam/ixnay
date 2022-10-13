import { Typography } from "../TypographyPage/Typography";
import { Headings } from "../TypographyPage/Headings";

export const TypographyPage = () => {
  return (
    <>
      <h1>Typography</h1>
      <hr />

      <h4>Display Font</h4>
      <p style={{ fontFamily: "var(--display)" }}>
        The display font is used for headings and other large, prominent text.
      </p>

      <h4>Body Font</h4>
      <p style={{ fontFamily: "var(--body)" }}>
        The body font is the core font used in most contexts.
      </p>

      <Headings />
      <Typography />
    </>
  );
};
