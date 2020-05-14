import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemProduct from './ItemProduct';
import { Div } from './styles/styles-galeria';
import Title from '../Utils/Title';
import { DivEspacio } from '../Utils/Styles-global';

class GaleriaProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: {
        item1: 0,
      }
    }
  }
  render() {
    const tecnologia = this.props.products.filter(product => product.categoria === 1)
    const accesorios = this.props.products.filter(product => product.categoria === 2)
    return (
      <section>
        <Div>
          <Title title="Celulares y Teléfonos">
            {tecnologia.map((product, i) => (
              i >= 6 ? null : (
                <ItemProduct 
                  {...product}
                  key={i} 
                  border={i !== (tecnologia.length - 1)}
                  item={product}
                />
              )
            ))}
            <DivEspacio horizontal />
          </Title>
          <Title title="Computación">
            {accesorios.map((product, i) => (
              i >= 6 ? null : (
                <ItemProduct 
                  {...product}
                  key={i} 
                  border={i !== (accesorios.length - 1)}
                  item={product}
                />
              )
            ))}
            <DivEspacio horizontal />
          </Title>
        </Div>
      </section>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    products: data.products,
  };
};
 
export default connect(mapStateToProps)(GaleriaProducts);