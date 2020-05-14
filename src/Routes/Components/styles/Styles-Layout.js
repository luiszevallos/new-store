import styled, { css } from 'styled-components';
import { Link as Route } from 'react-router-dom';

export const Header = styled.header`
  background: linear-gradient(90deg, ${(props) => props.color3}, ${(props) => props.color2}, ${(props) => props.color});
  color: ${(props) => props.letra};
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`

//STYLE MENU

export const Ul = styled.nav`
  display: flex;
  list-style: none;
`

export const Li = styled.nav`
  font-size: 14px;
  padding: 2px 8px;
  margin: 0 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`

export const Link = styled(Route)`
  font-size: 14px;
  padding: 2px 8px;
  margin: 0 3px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.letra};
  display: flex;
  align-items: center;
  :hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`


//STYLE DE SEARCH
export const Div = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  ${(props) => props.primary && css`
    margin-left: 10px;
    border-radius: 8px;
    padding: 0;
    background: ${(props) => props.color};
    border: 1px solid ${(props) => props.border || 'transparent'};
  `}
`

export const Input = styled.input`
  border: 0;
  padding: 3px 8px;
  outline: 0;
`

