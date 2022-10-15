import styled from "styled-components";
import { Section } from "../ui/Section";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { DefinitionList } from "./DefinitionList";
import { Details } from "./Details";
import { List } from "./List";
import { Menu } from "./Menu";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { Table } from "./Table";

const PageTitle = styled.h1`
  /* text-align: center; */
`;

export const OverviewPage = () => {
  return (
    <>
      <Section>
        <PageTitle>Ixnay</PageTitle>
        <p>
          Ixnay is a class-lite CSS boilerplate. Use it for baseline styles, and
          eject it when you've invested in design. Just throw this into your
          index.html file.
        </p>
        <code className="inline-block">
          &lt;link rel="stylesheet"
          href="https://d162l99amukxws.cloudfront.net/style.css" /&gt;
        </code>
      </Section>

      <hr />

      <h6>Button</h6>
      <Button />
      <br />

      <h6>Checkbox</h6>
      <Checkbox />
      <br />

      <h6>Details</h6>
      <Details />
      <br />

      <h6>Definition List</h6>
      <DefinitionList />
      <br />

      <h6>Input</h6>
      <Input />
      <br />

      <h6>Menu</h6>
      <Menu />
      <br />

      <h6>Radio</h6>
      <Radio />
      <br />

      <h6>Select</h6>
      <Select />
      <br />

      <h6>List</h6>
      <List />
      <br />

      <h6>Table</h6>
      <Table />
    </>
  );
};
