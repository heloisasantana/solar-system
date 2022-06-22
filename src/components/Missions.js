import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section>
          {missions.map(({ name: n, year: y, country: c, destination: d }) => (
            <MissionCard
              name={ n }
              year={ y }
              country={ c }
              destination={ d }
              key={ n }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
