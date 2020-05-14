import React from 'react';
import CarouselLists from '../Utils/CarouselLists';
import { Section, Div } from './styles/styles-details';
import TitleDetails from '../Utils/TitleDetails';
import Description from '../Utils/Description';

function ContainerDetails(props) {
  const { state } = props;
  return (
    <Section>
      <Div>
        <CarouselLists 
          autoPlay={false}
          customTransition="all 3s"
          width={'600px'}
          height={'350px'}
          lists={[1,2,3,4,5,6,7,8,9,10]}
        />
        <TitleDetails title="Descripcion">
          <Description name="Marca" description={state.marca} />
          <Description name="Modelo" description={state.modelo} />
        </TitleDetails>
      </Div>
    </Section>
  )
}

export default ContainerDetails;
