import React from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search'
import { Div, Input } from './styles/Styles-Layout';
import { Button } from '@material-ui/core';

function Search(props) {
  const {
    colores: {border, headerLetra, headerFondo}
  } = props;
  return (
    <Div border={border} primary color={headerLetra}>
      <Input 
        placeholder="Buscar producto.."
      />
      <Button style={{padding: 3, minWidth: 'inherit'}}>
        <SearchIcon style={{color: headerFondo, fontSize: 20}} />
      </Button>
    </Div>
  )
}

const mapStateToProps = ({colores}) => {
  return {
    colores,
  }
}

export default connect(mapStateToProps)(Search);