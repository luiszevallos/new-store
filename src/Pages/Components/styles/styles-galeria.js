import styled, { css } from 'styled-components';
import { Link as Route } from 'react-router-dom';

export const Link = styled(Route)`
  text-decoration: none;
  color: ${(props) => props.letra};
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`

export const DivItem = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr 1fr;
  height: 200px;
  min-width: 240px;
  max-width: 240px;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid ${(props) => props.border};
  background: ${(props) => props.color};
  box-shadow: 2px 2px 2px ${(props) => props.shadow};
`

export const Img = styled.img`
  width: 240px;
  height: 150px;
  border-radius: 3px;
  cursor: pointer;
`

export const Span = styled.span`
  color: ${(props) => props.letra};
  font-size: 13px;
  padding: 0 3px;
  ${(props) => props.primary && css`
    cursor: pointer;
  `}
`

export const DivName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const buttonComprar = (fondo, letra) => {
  return {
    fontSize: 13,
    padding: 0,
    paddingLeft: 8,
    paddingRight: 8,
    minWidth: 'inherit',
    backgroundColor: fondo,
    color: letra
  }
}

export const DivBorder = styled.div`
  ${(props) => props.border && css`
    border-left: 1px solid #eaeaea;
    margin: 0 4px;
  `}
`