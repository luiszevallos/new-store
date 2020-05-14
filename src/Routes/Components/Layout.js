import React from 'react';
import { Header, Div } from './styles/Styles-Layout';
import { connect } from 'react-redux';
import Search from './Search';
import NavBar from './NavBar';

function Layout(props) {
  const {
    colores: {headerFondo, headerFondo2, headerLetra, headerFondo3}
  } = props;
  return (
    <Header color={headerFondo} color2={headerFondo2} color3={headerFondo3} letra={headerLetra}>
      <div>logo</div>
      <Div>
        <NavBar />
        <Search />
      </Div>
    </Header>
  )
}

const mapStateToProps = ({colores}) => {
  return {
    colores,
  }
}

export default connect(mapStateToProps)(Layout);
