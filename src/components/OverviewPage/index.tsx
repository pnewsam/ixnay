import { Button } from "./Button";
import { Input } from "./Input";

export const OverviewPage = () => {
  return (
    <>
      <section>
        <h1 className="ix">Ixnay</h1>
        <p className="ix">
          Ixnay is a class-lite CSS boilerplate. Use it for baseline styles, and
          eject it when you've invested in design. Just throw this into your
          index.html file.
        </p>
        <code className="ix">
          &lt;link rel="stylesheet"
          href="https://d162l99amukxws.cloudfront.net/style.css" /&gt;
        </code>
      </section>

      <hr className="ix" />

      <h6 className="ix">Button</h6>
      <Button />
      <br />

      <h6 className="ix">Input</h6>
      <Input />
      <br />
    </>
  );
};
