// @flow
import React from 'react';
import { connect } from 'react-redux';

import RenderMainForm from '../components/Mainform';

type Func = {
  connect: ()=>mixed,
}
type State = {
  firstName: string,
  lastName: string,
  dob: Date,
  ssN: mixed,
  doi:Date,
  doe:Date,
  gender:string[],
}
type Props ={
  data: { }
};
const Mainform = (props:Props) => (
  <React.Fragment>
    <RenderMainForm {...props} />
  </React.Fragment>
);

const mapStateToProps = (state:State) => ({
  data: state,
});

export default connect(mapStateToProps)(Mainform);
