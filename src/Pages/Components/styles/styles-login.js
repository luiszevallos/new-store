import styled from 'styled-components';

export const Section = styled.section`
  border-left: 1px solid ${(props) => props.border || '#eaeaea'};
`

export const Span = styled.span`
  display: flex;
  font-size: 1.5em;
  font-weight: bold;
  padding: 17px 0;
  justify-content: center;
  color: ${(props) => props.letra};
`

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid ${(props) => props.border || '#eaeaea'};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
`;

export const DivInput = styled.div`
  margin: 10px;
  box-shadow: 2px 2px 2px ${(props) => props.shadow || '#eaeaea'};
`