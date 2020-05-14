import React, { Component } from 'react';
import { Link, DivItem, Img, Span, DivName, DivBorder, buttonComprar } from './styles/styles-galeria';
import { connect } from 'react-redux';
import fondo from '../../assets/Xiaomi-Mi-Note-10-face.jpg'
import { Button } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { cantidadProduct } from '../Utils/FunctionExtra';

class ItemProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  handleOnClick = () => {
    alert('hola')
  }

  render() {
    const {
      colores: {border, shadow, fondoProduct, buttonFondo, buttonLetra, letraProduct},
      login, marca, modelo, id, item, dispatch, shopping
    } = this.props;
    const cant = cantidadProduct(shopping, id)
    return (
      <>
        <DivItem border={border} shadow={shadow} color={fondoProduct}>
          <Link 
            to={{
              pathname: `/Details/${id}`,
              state: { id }
            }}>
            <Img src={fondo} alt='product' />
          </Link>
          <DivName>
            <Link 
              to={{
                pathname: `/Details`,
                state: { id }
              }} 
              letra={letraProduct}>
              <Span primary>{marca} {modelo}</Span>
            </Link>
            {login ? (
              <Button style={{minWidth: 'inherit', padding: 0, marginRight: 5}}>
                {this.state.liked ? (
                  <Favorite style={{fontSize: 17, color: 'red'}} />
                ) : (
                  <FavoriteBorder style={{fontSize: 17}} />
                )}
              </Button>
            ) : null}
          </DivName>
          <DivName>
            <Span letra={letraProduct}>$.120</Span>
            {login ? (
              <DivName>
                <Span letra={letraProduct}>{cant}</Span>
                <Button 
                  onClick={() => {
                    if (cant >= 1) {
                      dispatch({ type: 'ADD_SHOPPING_CANT', payload: id });
                    } else {
                      dispatch({ type: 'ADD_SHOPPING', payload: {...item, cantidad: 1} });
                    }
                  }}
                  style={buttonComprar(buttonFondo, buttonLetra)}>
                  Agregar
                </Button>
              </DivName>
            ) : null}
          </DivName>
        </DivItem>
        <DivBorder border={this.props.border} />
      </>
    )  
  }
}

const mapStateToProps = ({ data, colores }) => {
  return {
    colores,
    login: data.login,
    shopping: data.shopping,
  }
}

export default connect(mapStateToProps)(ItemProduct);
