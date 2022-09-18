export const ButtonsPage = () => {
  return (
    <article>
      <section>
        <h1 id="form">Buttons</h1>
        <h2>Primary</h2>
        <button>Button</button>
        <br />
        <br />
        <button className="sm">Button - Small</button>
        <br />
        <button className="lg">Button - Large</button>
        <br />
        <button disabled>Button - Disabled</button>

        <h2>Secondary</h2>

        <button className="secondary">Button</button>
        <br />
        <button className="secondary sm">Button - Small</button>
        <br />
        <button className="secondary lg">Button - Large</button>
        <br />
        <button className="secondary" disabled>
          Button - Disabled
        </button>
      </section>
    </article>
  );
};
