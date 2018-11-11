import React from 'react';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';
import Mainform from '../containers/mainform';

const DisplayGrid = () => (
  <div>
    <React.Fragment>
        <MainForm/>
    </React.Fragment>
    <React.Fragment>
        <CardFront />
        <CardBack />
    </React.Fragment>
  </div>
);

export default DisplayGrid;
