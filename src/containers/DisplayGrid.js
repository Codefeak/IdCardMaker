import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormValues } from "redux-form";

import Preview from "./preview";
import MainForm from "./mainform";
import { default as data } from "../data";
import { H1, Section, PreviewWrapper } from "../Styled Components/DisplayGrid";

class DisplayGrid extends Component {
  state = {
    file: null,
    bgCardBack: null,
    bgCardFront: null,
    imagePreviewUrl: ""
  };

  handleFile = e => {
    const reader = new FileReader();
    const newfile = e.target.files[0];
    const targetName = e.target.name;
    console.log(targetName);
    reader.onloadend = () => {
      targetName === "avatar"
        ? this.setState({ file: newfile, imagePreviewUrl: reader.result })
        : targetName === "bgCardFront"
        ? this.setState({
            bgCardFront: newfile,
            bgCardFrontUrl: reader.result
          })
        : this.setState({
            bgCardBack: newfile,
            bgCardBackUrl: reader.result
          });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    return (
      <React.Fragment>
        <H1>ID Card Maker</H1>
        <Section>
          <MainForm onSubmit={() => {}} handleFile={this.handleFile} />
          <PreviewWrapper>
            <Preview {...this.props} data={data} file={this.state} />
          </PreviewWrapper>
        </Section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  values: getFormValues("mainform")(state)
});

export default connect(mapStateToProps)(DisplayGrid);
