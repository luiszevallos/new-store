import styled, { css } from 'styled-components';

export const Div = styled.div`
  width: ${(props) => props.Swidth};
  height: ${(props) => props.Sheight};
`

export const DivContain = styled.div`
  width: ${(props) => props.Swidth};
  height: ${(props) => props.Sheight};
  border: 1px solid ${(props) => props.border};
  box-shadow: 2px 2px 2px ${(props) => props.shadow};
  background: #FFF;
  ${(props) => props.primary && css`
    width: initial;
    height: 400px;
    border: 0;
    box-shadow: initial;
  `}
`