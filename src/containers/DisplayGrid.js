import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import Preview from './preview';
import MainForm from './mainform';
import { default as data } from '../data';

class DisplayGrid extends Component {
  state = {
    file: null,
    imagePreviewUrl: '',
  };

  handleFile = (e) => {
    const reader = new FileReader();
    const newfile = e.target.files[0];
    reader.onloadend = () => this.setState({ file: newfile, imagePreviewUrl: reader.result });
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="center-align main-heading">ID Card Maker</h1>
        <div className="grid twoGrid gridGap center-align">
          <MainForm onSubmit={() => {}} handleFile={this.handleFile} />
          <div>
            <Preview {...this.props} data={data} file={this.state} />
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
