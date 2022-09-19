import { SnippetCard } from "./ui/SnippetCard";

export const FormsPage = () => {
  return (
    <article>
      <h1 id="form">Forms</h1>

      <SnippetCard
        title="Input"
        Code={
          <>
            &lt;input type="text" /&gt;
            <br />
            &lt;input type="text" disabled /&gt;
            <br />
            &lt;input type="text" className="lg" /&gt;
          </>
        }
      >
        <input type="text" />
        <br />
        <input type="text" disabled />
        <br />
        <input className="lg" type="text" />
      </SnippetCard>

      <SnippetCard title="Select" Code={<></>}>
        <select name="Name of Select" id="">
          <optgroup>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </optgroup>
          <optgroup>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </optgroup>
        </select>
      </SnippetCard>

      <SnippetCard title="Checkbox" Code={<></>}>
        <input type="checkbox" name="" id="" />
      </SnippetCard>

      <SnippetCard title="Radio" Code={<></>}>
        <input type="radio" name="" id="" />
      </SnippetCard>
    </article>
  );
};
