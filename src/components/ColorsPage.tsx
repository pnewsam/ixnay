import { Swatch } from "./ui/Swatch";

export const ColorsPage = () => {
  return (
    <article>
      <h1 id="form">Colors</h1>
      <h5>Primary 90</h5>
      <Swatch style={{ backgroundColor: `var(--primary-90)` }} />
      <h5>Primary 80</h5>
      <Swatch style={{ backgroundColor: `var(--primary-80)` }} />
      <h5>Primary 70</h5>
      <Swatch style={{ backgroundColor: `var(--primary-70)` }} />
      <h5>Primary 60</h5>
      <Swatch style={{ backgroundColor: `var(--primary-60)` }} />
      <h5>Primary 50</h5>
      <Swatch style={{ backgroundColor: `var(--primary-50)` }} />
      <h5>Primary 40</h5>
      <Swatch style={{ backgroundColor: `var(--primary-40)` }} />
      <h5>Primary 30</h5>
      <Swatch style={{ backgroundColor: `var(--primary-30)` }} />
      <h5>Primary 20</h5>
      <Swatch style={{ backgroundColor: `var(--primary-20)` }} />
      <h5>Primary 10</h5>
      <Swatch style={{ backgroundColor: `var(--primary-10)` }} />
    </article>
  );
};
