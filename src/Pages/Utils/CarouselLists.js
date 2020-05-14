import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Div, DivContain } from './styles/Styles-carousel'
import { connect } from 'react-redux';
import fondo from '../../assets/comprar-xiaomi-mi-9-SE.jpg'

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 200},
    items: 1,
    slidesToSlide: 1,
  },
};

function CarouselLists(props) {
  const {
    colores: {shadow, border}
  } = props;
  return (
    <DivContain
      Swidth={props.width}
      Sheight={props.height}
      shadow={shadow}
      border={border}
      primary={props.primary}>
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}// carousel infinito
        autoPlay={props.autoPlay}//auto slide
        keyBoardControl={true}
        autoPlaySpeed={props.autoPlaySpeed}//tiempo demora
        customTransition={props.customTransition}
        transitionDuration={500}
      >
        {props.lists.map((item, i) => (
          <Div key={i} Swidth={props.width} Sheight={props.height}>
            <img src={fondo} alt='product' width={props.width} height={props.height}/>
          </Div>
        ))}
      </Carousel>
    </DivContain>
  )
}

const mapStateToProps = ({ colores }) => {
  return {
    colores,
  }
}

export default connect(mapStateToProps)(CarouselLists);