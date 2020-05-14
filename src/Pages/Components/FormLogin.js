import React from 'react';
import { Form, DivInput } from './styles/styles-login';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';

function FormLogin(props) {
  const {
    colores: {buttonFondo, buttonLetra, shadow},
  } = props;
  return (
    <Form>
      <DivInput shadow={shadow}>
        <TextField
          style={{width: 300}}
          name={'email'}
          label="Correo"
          variant="outlined"
          placeholder={'Correo'}
          size={'small'}
          onChange={props.onChange}
          autoComplete='off'
        />
      </DivInput>
      <DivInput shadow={shadow}>
        <TextField
          type="password"
          style={{width: 300}}
          name={'password'}
          label="Contraseña"
          variant="outlined"
          placeholder={'Contraseña'}
          size={'small'}
          onChange={props.onChange}
          autoComplete='off'
        />
      </DivInput>
      <Button
        style={{backgroundColor: buttonFondo, color: buttonLetra, marginTop: 30,}}
      >
        INICIAR SESIÓN
      </Button>
    </Form>
  )
}

const mapStateToProps = ({colores}) => {
  return {
    colores,
  };
};

export default connect(mapStateToProps)(FormLogin);
