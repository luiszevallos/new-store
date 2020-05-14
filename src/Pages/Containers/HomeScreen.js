import React, { Component } from 'react';
import GaleriaProducts from '../Components/GaleriaProducts';
import { Main } from './styles/styles';
import CarouselLists from '../Utils/CarouselLists';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Main className="Scroll">
        <CarouselLists
          primary={true}
          autoPlay={true}
          autoPlaySpeed={8000}
          customTransition="all 6s"
          width={'100%'}
          height={'400px'}
          lists={[1,2,3,4,5,6,7,8,9,10]}
        />
        <GaleriaProducts />
      </Main>
    );
  }
}
 
export default HomeScreen;
