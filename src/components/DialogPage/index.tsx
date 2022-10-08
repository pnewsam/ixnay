import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const DialogPage = () => {
  const toggleDialog = () => {
    const el = document.getElementById("dialog");
    el?.getAttribute("open") === "true"
      ? el.removeAttribute("open")
      : el?.setAttribute("open", "true");
  };

  return (
    <Section>
      <h2>Dialog</h2>
      <SplitPane
        els={["dialog"]}
        code={
          <>
            &lt;dialog id="dialog"&gt;
            <br />
            &nbsp;&nbsp;&lt;header&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;hgroup&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Modal
            heading&lt;/h2&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Description&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/hgroup&gt;
            <br />
            &nbsp;&nbsp;&lt;/header&gt;
            <br />
            &nbsp;&nbsp;&lt;section&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis, nam odit illum voluptatibus
            cumque aspernatur commodi distinctio aliquam excepturi corporis qui
            ut, labore, dolore velit aperiam nihil doloremque quaerat
            consequatur?
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&lt;/section&gt;
            <br />
            &nbsp;&nbsp;&lt;footer&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="secondary"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Submit
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;&lt;/footer&gt;
            <br />
            &lt;/dialog&gt;
            <br />
          </>
        }
      >
        <button onClick={toggleDialog}>Toggle Dialog</button>
        <dialog id="dialog">
          <header>
            <h2>Would you like to continue</h2>
          </header>
          <section>
            <p>
              If you proceed, you will be completing an action that may or may
              not be desirable, depending on your needs.
            </p>
          </section>
          <footer style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="secondary" onClick={toggleDialog}>
              Close
            </button>
            <button
              onClick={() => {
                alert("Submitted!");
                toggleDialog();
              }}
            >
              Submit
            </button>
          </footer>
        </dialog>
      </SplitPane>
    </Section>
  );
};
