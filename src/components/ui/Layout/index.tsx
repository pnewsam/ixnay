import styled from "styled-components";
import { TopNav } from "../TopNav";
import { SideNav } from "../SideNav";
import { Content } from "../Content";
import { Footer } from "../Footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidenav content";
`;

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      {/* <TopNav /> */}
      <SideNav />
      <Content>{children}</Content>
      {/* <Footer /> */}
    </Wrapper>
  );
};
