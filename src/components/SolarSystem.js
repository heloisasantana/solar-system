import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <body>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
      </body>
    );
  }
}

export default SolarSystem;
