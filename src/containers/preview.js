import React, { Component } from "react";
import ReactToPrint from "react-to-print";

import CardFront from "../components/CardFront";
import CardBack from "../components/CardBack";

import { Button } from "../Styled Components/DisplayGrid/Button";

class Preview extends Component {
  render() {
    return (
      <React.Fragment>
        <CardFront {...this.props} ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => <Button>Print Front Part</Button>}
          content={() => this.componentRef}
        />
        <CardBack {...this.props} ref={el => (this.componentRef1 = el)} />
        <ReactToPrint
          trigger={() => <Button>Print Back Part</Button>}
          content={() => this.componentRef1}
        />
      </React.Fragment>
    );
  }
}

export default Preview;
