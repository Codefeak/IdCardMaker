// @flow
import React, { Component } from 'react';

type Props = {
  data: Array<{ name: string, label: string, type: string, gender?:$ReadOnlyArray<string>}>,
  values: {},
  file: { file?: {}, imagePreviewUrl: string }
};

class CardFront extends Component<Props> {
  render() {
    const { data, values, file } = this.props;
    console.log(this.props);
    return (
      <div className="card bgImg">
        <div className="card-content col left ">
          <span className="item0 center-align large-text bold600">
            Identity Card
          </span>
          {data.map((fields, i) =>
            fields.name !== 'dob' &&
            fields.name !== 'sSN' &&
            fields.name !== 'avatar' ? (
              <p className={`item${i + 1} flex margin`} key={fields.name}>
                <span className="bold600">{fields.name.toUpperCase()}</span>
                <span className="flex-grow1 right-align lightbg">
                  {values !== undefined && values[fields.name]}
                </span>
              </p>
            ) : fields.name !== 'avatar' ? (
              <div className={`item${i + 1} grid threeGrid`} key={fields.name}>
                <p className="grid-col-span2 flex margin">
                  <span className="bold600">{fields.name.toUpperCase()}</span>
                  <span className="flex-grow1 right-align lightbg">
                    {values !== undefined && values[fields.name]}
                  </span>
                </p>
              </div>
            ) : (
              <img
                src={file.imagePreviewUrl}
                alt="avatar"
                className="item8 photoholder"
                key={fields.name}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default CardFront;
