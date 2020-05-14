import React from 'react';
import styled from 'styled-components';
import LoginContainer from '../Components/LoginContainer';

function LoginScreen(props) {
  return (
    <Main>
      <section></section>
      <LoginContainer />
    </Main>
  )
}

export default LoginScreen;

const Main = styled.main`
  display: grid;
  grid-template-columns: auto 350px;
  height: calc(100vh - 42px);
`