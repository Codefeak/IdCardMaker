import React from 'react';
import { connect } from 'react-redux';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';
import MainForm from './mainform';


const DisplayGrid = props => (
  <div className="grid twoGrid center-align">
    <React.Fragment>
      <MainForm />
    </React.Fragment>
    <div>
      <CardFront {...props} />
      <CardBack />
      <p>Preview</p>
    </div>
  </div>
);

const mapStateToProps = state => ({ data: state.mainform });

export default connect(mapStateToProps)(DisplayGrid);
