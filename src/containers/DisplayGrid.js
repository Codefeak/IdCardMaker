import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import Preview from './preview';
import MainForm from './mainform';
import { default as data } from '../data';

class DisplayGrid extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="center-align main-heading">ID Card Maker</h1>
        <div className="grid twoGrid gridGap center-align">
          <React.Fragment>
            <MainForm onSubmit={() => {}} />
          </React.Fragment>
          <div>
            <Preview {...this.props} data={data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  values: getFormValues('mainform')(state),
});

export default connect(mapStateToProps)(DisplayGrid);
