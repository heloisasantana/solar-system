import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section>
          {planets.map(({ name, image }) => (
            <PlanetCard planetName={ name } planetImage={ image } key={ name } />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
