import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function TitleDetails(props) {
  const {
    colores: {title, shadow, border, fondoProduct}
  } = props;
  return (
    <Div shadow={shadow} border={border} fondo={fondoProduct}>
      <Span letra={title}>{props.title}</Span>
      <DivDetails>
        {props.children}
      </DivDetails>
    </Div>
  )
}

const mapStateToProps = ({ colores }) => {
  return {
    colores,
  };
};

export default connect(mapStateToProps)(TitleDetails);

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-shadow: 2px 2px 2px ${(props) => props.shadow};
  border: 1px solid ${(props) => props.border};
  border-radius: 5px;
  background: ${(props) => props.fondo};
`

const Span = styled.span`
  color: ${(props) => props.letra};
  font-size: 19px;
  font-weight: bold;
  cursor: pointer;
  margin: 5px 0;
`
const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
`