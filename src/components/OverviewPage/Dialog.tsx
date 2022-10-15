export const Dialog = () => {
  const toggleDialog = () => {
    const el = document.getElementById("dialog");
    el?.getAttribute("open") === "true"
      ? el.removeAttribute("open")
      : el?.setAttribute("open", "true");
  };

  return (
    <>
      <button onClick={toggleDialog}>Toggle Dialog</button>
      <dialog id="dialog">
        <header>
          <h2>Would you like to continue</h2>
        </header>
        <section>
          <p>
            If you proceed, you will be completing an action that may or may not
            be desirable, depending on your needs.
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
    </>
  );
};
