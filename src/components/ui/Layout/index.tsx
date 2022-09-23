import styled from "styled-components";
import { TopNav } from "../TopNav";

const Wrapper = styled.div``;

const Content = styled.div`
  background-color: var(--white);
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;
`;

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <TopNav />
      <Content>{children}</Content>
    </Wrapper>
  );
};
