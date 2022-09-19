import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: var(--shadow-1);
  border: solid 1px var(--grey-20);
  border-radius: var(--radius-2);
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

const Title = styled.div`
  padding: 0 1rem;
`;

const CodeWrapper = styled.code`
  border-radius: 0 !important;
  margin-left: -1px;
  margin-right: -1px;
`;

const Content = styled.div`
  background-color: var(--white);
  border-bottom-left-radius: var(--radius-2);
  border-bottom-right-radius: var(--radius-2);
  padding: 1.5rem;
`;

type Props = {
  children: React.ReactNode;
  Code: React.ReactNode;
  description?: string;
  title: string;
};

export const SnippetCard = ({ children, title, description, Code }: Props) => {
  return (
    <Wrapper>
      <Title>
        <h5>{title}</h5>
        {description && <p>{description}</p>}
      </Title>
      <CodeWrapper className="block">{Code}</CodeWrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
