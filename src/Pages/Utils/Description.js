import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

function Description(props) {
  const {
    colores: {title, border}
  } = props;
  return (
    <Div border={border}>
      <Span letra={title} primary>{props.name}</Span>
      <Span letra={title}>{props.description}</Span>
    </Div>
  )
}

const mapStateToProps = ({ colores }) => {
  return {
    colores,
  };
};

export default connect(mapStateToProps)(Description);

const Div = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.border};
  width: 100%;
`

const Span = styled.span`
  color: ${(props) => props.letra};
  font-size: 14px;
  margin: 5px 0;
  ${(props) => props.primary && css`
    font-weight: bold;
    padding-right: 5px;
  `}
`