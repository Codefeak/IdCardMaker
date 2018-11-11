import React from 'react';

const CardFront = props => (
  <div className="card bgImg">
    <span className="margin large-text bold600">Identity Card</span>
      <React.Fragment>
        <div className="card-content col left ">
          <p className="item1 flex margin">
            <span className="bold600">{`${props.data!==undefined && props.data.registeredFields.firstName.name} :`}</span>
            <span className="flex-grow1 right-align lightbg">{props.data!==undefined && props.data.values!==undefined && props.data.values.firstName}</span>
          </p>
          <p className=" item2 flex margin">
            <span className="bold600">{`${props.data!==undefined && props.data.registeredFields.lastName.name} :`}</span>
            <span className="flex-grow1 right-align lightbg">{props.data!==undefined && props.data.values!==undefined && props.data.values.lastName}</span>
          </p>
          <div className= "item3 grid threeGrid">
          <p className="grid-col-span2 flex margin">
            <span className="bold600">{`${props.data!==undefined && props.data.registeredFields.dob.name} :`}</span>
            <span className="flex-grow1 right-align lightbg">{props.data!==undefined && props.data.values!==undefined && props.data.values.dob}</span>
          </p>
          </div>
          <div className="item4 grid threeGrid">
          <p className="grid-col-span2 flex margin">
            <span className="bold600">{`${props.data!==undefined && props.data.registeredFields.sSN.name} :`}</span>
            <span className="flex-grow1 right-align lightbg">{props.data!==undefined && props.data.values!==undefined && props.data.values.sSN}</span>
          </p>
          <p className="item5 flex margin">
            <span className="bold600">{`${props.data!==undefined && props.data.registeredFields.gender.name} :`}</span>
            <span className="flex-grow1 right-align lightbg">{props.data!==undefined && props.data.values!==undefined && props.data.values.gender}</span>
          </p>
          </div>
          <p className="item6 flex margin">
            <span className="bold600">{`${props.data!==undefined && props.data.registeredFields.doi.name} :`}</span>
            <span className="flex-grow1 right-align lightbg">{props.data!==undefined && props.data.values!==undefined && props.data.values.doi}</span>
          </p>
          <p className="item7 flex margin">
            <span className="bold600">{`${props.data!==undefined && props.data.registeredFields.doe.name} :`}</span>
            <span className="flex-grow1 right-align lightbg">{props.data!==undefined && props.data.values!==undefined && props.data.values.doe}</span>
          </p>
          <div className="item8 photoholder" />
        </div>
      </React.Fragment>
  </div>
);

export default CardFront;
