import React, { Component } from "react";
import Barcode from "react-barcode";
import { CardBackWrapper, UL, Li } from "../Styled Components/CardBack";

class CardBack extends Component {
  render() {
    return (
      <CardBackWrapper>
        <UL>
          <Li >FirstName</Li>
          <Li >LastName</Li>
          <Li >Date of Birth</Li>
          <Li >Social Security Number</Li>
          <Li >Date of Issue</Li>
          <Li >Date of Expire</Li>
        </UL>
        <Barcode value="1234567890" format="CODE128" height={40} />
        <p>NOT VALID AS A TRAVEL DOCUMENT</p>
      </CardBackWrapper>
    );
  }
}

export default CardBack;
