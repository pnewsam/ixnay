import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Interactable = () => {
  const toggleDialog = () => {
    const el = document.getElementById("dialog");
    el?.getAttribute("open") === "true"
      ? el.removeAttribute("open")
      : el?.setAttribute("open", "true");
  };
  return (
    <Section>
      <hgroup>
        <h2>Interactable</h2>
        <p>
          <code>dialog</code>
        </p>
      </hgroup>
      <SplitPane>
        <div>
          <button onClick={toggleDialog}>Toggle Dialog</button>
          <dialog id="dialog">
            <header>
              <hgroup>
                <h2>Modal heading</h2>
                <p>Description</p>
              </hgroup>
            </header>
            <section>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, nam odit illum voluptatibus cumque aspernatur commodi
                distinctio aliquam excepturi corporis qui ut, labore, dolore
                velit aperiam nihil doloremque quaerat consequatur?
              </p>
            </section>
            <footer>
              <button onClick={toggleDialog}>Close</button>
            </footer>
          </dialog>
        </div>
        <div>
          <code className="block"></code>
        </div>
      </SplitPane>
    </Section>
  );
};
