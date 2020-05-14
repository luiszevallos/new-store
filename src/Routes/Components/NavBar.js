import React from 'react';
import { Ul, Li, Link } from './styles/Styles-Layout';
import { connect } from 'react-redux';
import { AccountCircle, Home, ShoppingCart, Notifications } from '@material-ui/icons';
import ModalShooping from '../../Pages/modal/modalShopping';

function NavBar(props) {
  const { 
    colores: {headerLetra}
  } = props;
  return (
    <nav>
      {props.login ? (
        <Ul>
          <li><Link to="/" letra={headerLetra}>
            <Home style={{fontSize: 14, color: headerLetra, paddingRight: 6}} />
            Inicio
          </Link></li>
          <Li>
            <ShoppingCart style={{fontSize: 13, color: headerLetra, paddingRight: 6}} />
            Carrito
          </Li>
          <li><Link to="/" letra={headerLetra}>
            <AccountCircle style={{fontSize: 13, color: headerLetra, paddingRight: 6}} />
            Mi cuenta
            <ModalShooping />
          </Link></li>
          <Li><Notifications style={{fontSize: 18, color: headerLetra}} /></Li>          
        </Ul>
      ) : (
        <Ul>
          <Li><Link to="/" letra={headerLetra}>Inicio</Link></Li>
          <Li><Link to="/Login" letra={headerLetra}>Iniciar sesión</Link></Li>
        </Ul>
      )}
    </nav>
  )
}

const mapStateToProps = ({ data, colores }) => {
  return {
    login: data.login,
    colores,
  };
};

export default connect(mapStateToProps)(NavBar);
