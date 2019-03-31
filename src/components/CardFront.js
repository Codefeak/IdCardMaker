// @flow
import React, { Component } from "react";

import {
  CardFrontWrapper,
  Content,
  CardTitle,
  Normal,
  FieldName,
  FieldValue,
  Img,
  MiddleDiv
} from "../Styled Components/CardFront";

type Props = {
  data: Array<{
    name: string,
    label: string,
    type: string,
    gender?: $ReadOnlyArray<string>
  }>,
  values: {},
  file: { file?: {}, imagePreviewUrl: string }
};

class CardFront extends Component<Props> {
  render() {
    const { data, values, file } = this.props;
    console.log(this.props);
    return (
      <CardFrontWrapper img="">
        <Content>
          <CardTitle row="1" col="1/3">
            Identity Card
          </CardTitle>
          {data.map((fields, i) =>
            fields.name !== "dob" &&
            fields.name !== "sSN" &&
            fields.name !== "avatar" ? (
              <Normal key={fields.name} row={fields.row} col={fields.col}>
                <FieldName>{fields.name.toUpperCase()}</FieldName>
                <FieldValue>
                  {values !== undefined && values[fields.name]}
                </FieldValue>
              </Normal>
            ) : fields.name !== "avatar" ? (
              <MiddleDiv row={`item${i + 1}`} col="2/4" key={fields.name}>
                <Normal row={fields.row} col={fields.col}>
                  <FieldName>{fields.name.toUpperCase()}</FieldName>
                  <FieldValue>
                    {values !== undefined && values[fields.name]}
                  </FieldValue>
                </Normal>
              </MiddleDiv>
            ) : (
              <Img
                src={file.imagePreviewUrl}
                alt="avatar"
                key={fields.name}
                row={fields.row}
                col={fields.col}
              />
            )
          )}
        </Content>
      </CardFrontWrapper>
    );
  }
}

export default CardFront;
