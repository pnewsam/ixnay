import styled from "styled-components";
import { SideNav } from "../SideNav";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas: "sidenav content";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const Content = styled.div`
  background-color: var(--grey-10);
  grid-area: content;
  padding: 2rem 2rem 8rem;
`;

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <SideNav />
      <Content>{children}</Content>
    </Wrapper>
  );
};