import React, { Component } from 'react';
import { Section, Div, Span } from './styles/styles-login';
import FormLogin from './FormLogin';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import FormRegistrar from './FormRegistrar';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrar: false,
    }
  }
  render() {
    const {
      colores: {border, title}
    } = this.props; 
    const { registrar } = this.state;
    return (
      <Section border={border}>
        <Span letra={title}>New Store</Span>
        <Div border={border}>
          <Button
            style={{
              borderRight: 1, borderRightColor: border, borderRightStyle: 'solid', borderRadius: 0,
              backgroundColor: registrar ? 'transparent' : '#f1f2f3',
            }}
            onClick={() => this.setState({registrar: false})}>INICIAR SESIÓN</Button>
          <Button
            style={{borderRadius: 0, backgroundColor: !registrar ? 'transparent' : '#f1f2f3'}}
          onClick={() => this.setState({registrar: true})}>REGISTRAR</Button>
        </Div>
        {registrar ? <FormRegistrar /> : <FormLogin />}
      </Section>
    );
  }
}

const mapStateToProps = ({ colores }) => {
  return {
    colores,
  };
};
 
export default connect(mapStateToProps)(LoginContainer);