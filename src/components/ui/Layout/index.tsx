import styled from "styled-components";

export const Content = styled.div`
  grid-area: content;
  margin: 0 auto;
  max-width: var(--content-max-width);
  padding: var(--content-padding);
  width: var(--content-full-width);
`;

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* <TopNav /> */}
      {/* <SideNav /> */}
      <Content>{children}</Content>
    </div>
  );
};
