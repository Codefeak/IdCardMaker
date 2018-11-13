import React, { Component } from 'react';
import Barcode from 'react-barcode';

class CardBack extends Component {
  render() {
    return (
      <div className="card bgImg2">
        <ul className="flex row wrap">
          <li className="small-font margin-right numericList">FirstName</li>
          <li className="small-font margin-right numericList">LastName</li>
          <li className="small-font margin-right numericList">Date of Birth</li>
          <li className="small-font margin-right numericList">Social Security Number</li>
          <li className="small-font margin-right numericList">Date of Issue</li>
          <li className="small-font margin-right numericList">Date of Expire</li>
        </ul>
        <p>NOT VALID AS A TRAVEL DOCUMENT</p>
        <Barcode value="1234567890" format="CODE128" height={40} />
      </div>
    );
  }
}

export default CardBack;
