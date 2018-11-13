import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';

import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';

class Preview extends Component {
  render() {
    return (
      <React.Fragment>
        <CardFront {...this.props} ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => <p className="button">Print Front Part</p>}
          content={() => this.componentRef} />
        <CardBack ref={el => (this.componentRef1 = el)} />
        <ReactToPrint
          trigger={() => <p className="button">Print Back Part</p>}
          content={() => this.componentRef1} />
      </React.Fragment>
    );
  }
}

export default Preview;
