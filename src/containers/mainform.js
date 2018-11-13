// @flow
import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import RenderMainForm from '../components/Mainform';

type State = {
  FirstName: string,
  LastName: string,
  DateofBirth: Date,
  SocialSecurityNumber: mixed,
  DateofIssue: Date,
  DateofExpiry: Date,
  Gender: string[],
  data: {},
};
type Props = {};

const Mainform = (props: Props) => (
  <React.Fragment>
    <RenderMainForm {...props} handleSubmit={() => {}} />
  </React.Fragment>
);

const mapStateToProps = (state: State) => ({
  data: getFormValues('mainform')(state),
});

export default connect(mapStateToProps)(Mainform);
