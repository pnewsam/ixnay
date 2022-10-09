import styled from "styled-components";

const Div = styled.div`
  width: 40px;
  height: 40px;
`;

const Wrapper = styled.div``;

const Name = styled.h6``;

type Props = {
  style?: Record<string, string>;
  children: React.ReactNode;
  name: string;
};

export const DisplaySquare = ({ name, style, children }: Props) => {
  return (
    <Wrapper style={style}>
      <Name>{name}</Name>
      <Div>{children}</Div>
    </Wrapper>
  );
};
