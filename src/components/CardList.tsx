/* eslint-disable import/first */
import * as React from 'react';

import Card from './Card';
import IRobot from '../containers/App';

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  return (
    <div>
      {
        robots.map((robot, i) => {
          return <Card key={i} id={i} name={robot.name} email={robot.email} />
        })
      }
    </div>
  )
}

export default CardList