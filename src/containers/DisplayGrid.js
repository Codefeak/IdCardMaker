import React, { Component } from 'react';
import { connect } from 'react-redux';

import Preview from './preview';
import MainForm from './mainform';

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
          <Preview {...this.props}/>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ data: state.mainform });

export default connect(mapStateToProps)(DisplayGrid);
