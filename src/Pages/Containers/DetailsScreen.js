import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main } from './styles/styles';
import ContainerDetails from '../Components/ContainerDetails';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }
  componentDidMount() {
    const { products, location: {state: { id } } } = this.props;
    if (products.length !== 0) {
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.id === id) {
          this.setState({ product })
          break;
        }
      }
    }
  }
  render() {
    return (  
      <Main>
        <ContainerDetails 
          state={this.state.product}
        />
      </Main>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    products: data.products,
  }
}
 
export default connect(mapStateToProps)(DetailsScreen);