import React, { Component } from 'react';

class CardFront extends Component {
  render() {
    const { data } = this.props;
    return (
      data !== undefined && (
        <div className="card bgImg">
          <React.Fragment>
            <div className="card-content col left ">
              <span className="item0 center-align large-text bold600">Identity Card</span>
              {Object.keys(data.registeredFields).map((item, i) => (item !== 'dob' && item !== 'sSN' && item !== 'avatar' ? (
                <p className={`item${i + 1} flex margin`} key={item}>
                  <span className="bold600">{item.toUpperCase()}</span>
                  <span className="flex-grow1 right-align lightbg">
                    {data.values !== undefined && data.values[item]}
                  </span>
                </p>
              ) : item !== 'avatar' ? (
                <div className={`item${i + 1} grid threeGrid`}key={item}>
                  <p className="grid-col-span2 flex margin">
                    <span className="bold600">{item.toUpperCase()}</span>
                    <span className="flex-grow1 right-align lightbg">
                      {data.values !== undefined && data.values[item]}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="item8 photoholder" key={item}/>
              )))}
            </div>
          </React.Fragment>
        </div>
      )
    );
  }
}

export default CardFront;
