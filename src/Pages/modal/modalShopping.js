import React from 'react';
import ReactDOM from 'react-dom'
import { Div } from './styles/modal';

function ModalShooping(props) {
  return ReactDOM.createPortal(
    <Div />
    ,
    document.getElementById('modal'),
  )  
}

export default ModalShooping;
