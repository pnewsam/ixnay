import { Article } from "../ui/Article";
import { Section } from "../ui/Section";

export const FormPage = () => {
  return (
    <Article>
      <h1 id="form">Form</h1>

      <Section>
        <h2 id="button">Input</h2>
        <input type="text" />
        <br />
        <br />
        <button>Submit Button</button>
      </Section>

      <Section>
        <h2 id="button">Button</h2>
        <button>Button</button>
        <br />
        <br />
        <button>Submit Button</button>
      </Section>

      <Section>
        <h2 id="select">Select</h2>
      </Section>
    </Article>
  );
};
