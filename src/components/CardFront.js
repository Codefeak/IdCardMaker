import React, { Component } from 'react';

class CardFront extends Component {
  render() {
    return (
      <div className="card bgImg">
        <React.Fragment>
          <div className="card-content col left ">
            <span className="item0 center-align large-text bold600">Identity Card</span>
            <p className="item1 flex margin">
              <span className="bold600">
                {`${this.props.data !== undefined
                  && this.props.data.registeredFields.firstName.name.toUpperCase()} :`}
              </span>
              <span className="flex-grow1 right-align lightbg">
                {this.props.data !== undefined
                  && this.props.data.values !== undefined
                  && this.props.data.values.firstName}
              </span>
            </p>
            <p className=" item2 flex margin">
              <span className="bold600">
                {`${this.props.data !== undefined
                  && this.props.data.registeredFields.lastName.name.toUpperCase()} :`}
              </span>
              <span className="flex-grow1 right-align lightbg">
                {this.props.data !== undefined
                  && this.props.data.values !== undefined
                  && this.props.data.values.lastName}
              </span>
            </p>
            <div className="item3 grid threeGrid">
              <p className="grid-col-span2 flex margin">
                <span className="bold600">
                  {`${this.props.data !== undefined
                    && this.props.data.registeredFields.dob.name.toUpperCase()} :`}
                </span>
                <span className="flex-grow1 right-align lightbg">
                  {this.props.data !== undefined
                    && this.props.data.values !== undefined
                    && this.props.data.values.dob}
                </span>
              </p>
            </div>
            <div className="item4 grid threeGrid">
              <p className="grid-col-span2 flex margin">
                <span className="bold600">
                  {`${this.props.data !== undefined
                    && this.props.data.registeredFields.sSN.name.toUpperCase()} :`}
                </span>
                <span className="flex-grow1 right-align lightbg">
                  {this.props.data !== undefined
                    && this.props.data.values !== undefined
                    && this.props.data.values.sSN}
                </span>
              </p>
              <p className="item5 flex margin">
                <span className="bold600">
                  {`${this.props.data !== undefined
                    && this.props.data.registeredFields.gender.name.toUpperCase()} :`}
                </span>
                <span className="flex-grow1 right-align lightbg">
                  {this.props.data !== undefined
                    && this.props.data.values !== undefined
                    && this.props.data.values.gender}
                </span>
              </p>
            </div>
            <p className="item6 flex margin">
              <span className="bold600">
                {`${this.props.data !== undefined && this.props.data.registeredFields.doi.name.toUpperCase()} :`}
              </span>
              <span className="flex-grow1 right-align lightbg">
                {this.props.data !== undefined
                  && this.props.data.values !== undefined
                  && this.props.data.values.doi}
              </span>
            </p>
            <p className="item7 flex margin">
              <span className="bold600">
                {`${this.props.data !== undefined && this.props.data.registeredFields.doe.name.toUpperCase()} :`}
              </span>
              <span className="flex-grow1 right-align lightbg">
                {this.props.data !== undefined
                  && this.props.data.values !== undefined
                  && this.props.data.values.doe}
              </span>
            </p>
            <div className="item8 photoholder" />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default CardFront;
