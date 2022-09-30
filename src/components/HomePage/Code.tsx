import { Section, SplitPane } from "./index.styled";

export const Code = () => (
  <Section>
    <h2>Code</h2>
    <SplitPane>
      <div>
        <p>
          If you want some inline code, it will look like <code>this</code>.
        </p>
        <br />
        <code className="block">This is a block of code</code>
        <br />
        <var>Var element</var>
        <br />
        <br />
        <samp>Sample element</samp>
        <br />
        <br />
        <kbd>⌘</kbd>
        <kbd>⇧</kbd>
        <kbd>⌥</kbd>
        <kbd>⌃</kbd>
        <br />
        <br />
        <pre>Pre element</pre>
      </div>
      <div>
        <code className="block">This is a block of code</code>
      </div>
    </SplitPane>
  </Section>
);
