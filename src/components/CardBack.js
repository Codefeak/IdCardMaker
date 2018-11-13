import React, { Component } from 'react';
import Barcode from 'react-barcode';

class CardBack extends Component {
  render() {
    return (
      <div className="grid card center-align cardBack bgImg2">
        <ul className="flex row wrap">
          <li className="small-font margin-right numericList">FirstName</li>
          <li className="small-font margin-right numericList">LastName</li>
          <li className="small-font margin-right numericList">Date of Birth</li>
          <li className="small-font margin-right numericList">Social Security Number</li>
          <li className="small-font margin-right numericList">Date of Issue</li>
          <li className="small-font margin-right numericList">Date of Expire</li>
        </ul>
        <Barcode value="1234567890" format="CODE128" height={40} />
        <p>NOT VALID AS A TRAVEL DOCUMENT</p>
      </div>
    );
  }
}

export default CardBack;
