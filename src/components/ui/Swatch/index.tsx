import styled from "styled-components";

const Div = styled.div`
  background-color: var(--color);
  border-radius: var(--radius-2);
  width: 40px;
  height: 40px;
`;

const Wrapper = styled.div``;

const Name = styled.h6``;

type Props = {
  style: Record<string, string>;
  className?: string;
  name: string;
};

export const Swatch = ({ name, style }: Props) => {
  return (
    <Wrapper style={style}>
      <Name>{name}</Name>
      <Div></Div>
    </Wrapper>
  );
};
