import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function Title(props) {
  const {
    colores: {title}
  } = props;
  return (
    <Div>
      <Span onClick={() => alert('hola')} letra={title}>{props.title}</Span>
      <DivDetails className="Scroll">
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

export default connect(mapStateToProps)(Title);

const Div = styled.div`
  display: grid;
  padding: 10px;
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
  overflow: auto;
  padding-right: 30px;
`