import styled from "styled-components";
import { Content } from "../Content";

const SFooter = styled.footer`
  background-color: var(--grey-10);
  min-height: 300px;
  width: 100vw;
`;

export const Footer = () => {
  return (
    <footer>
      <div className="columns"></div>
      <Content>
        <SFooter>
          <div>Footer</div>
        </SFooter>
      </Content>
    </footer>
  );

  return (
    <SFooter>
      <Content>
        <p>Something</p>
        <p>Something</p>
        <p>Something</p>
      </Content>
    </SFooter>
  );
};
