import React, { Component } from 'react';
import { Main } from './styles/styles';
import { connect } from 'react-redux';

class ShoppingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    console.log(this.props)
    return (
      <Main className="Scroll">
      </Main>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    shopping: data.shopping,
  };
};
 
export default connect(mapStateToProps)(ShoppingScreen);