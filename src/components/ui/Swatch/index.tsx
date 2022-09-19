import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: var(--radius-2);
  height: 80px;
  width: 80px;
`;

type Props = {
  className?: string;
  style?: Record<string, string>;
};

export const Swatch = ({ className, style }: Props) => {
  return <Wrapper className={className} style={style} />;
};
