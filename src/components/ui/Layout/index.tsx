import styled from "styled-components";
import { TopNav } from "../TopNav";
import { SideNav } from "../SideNav";
import { Content } from "../Content";
import { Footer } from "../Footer";

const Wrapper = styled.div``;

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      {/* <TopNav /> */}
      {/* <SideNav /> */}
      <Content>{children}</Content>
      {/* <Footer /> */}
    </Wrapper>
  );
};
