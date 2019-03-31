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
    return (
      <CardFrontWrapper
        img={
          file.bgCardFrontUrl !== undefined
            ? `url(${file.bgCardFrontUrl})`
            : null
        }
      >
        <Content>
          {data.map((fields, i) => {
            if (fields.type === "file" && fields.name !== "avatar") {
              return null;
            } else {
              return fields.name !== "cardTitle" &&
                fields.name !== "dob" &&
                fields.name !== "sSN" &&
                fields.name !== "avatar" ? (
                <Normal key={fields.name} row={fields.row} col={fields.col}>
                  <FieldName>{fields.name.toUpperCase()}</FieldName>
                  <FieldValue>
                    {values !== undefined && values[fields.name]}
                  </FieldValue>
                </Normal>
              ) : fields.name !== "avatar" && fields.name !== "cardTitle" ? (
                <MiddleDiv row={`item${i + 1}`} col="2/4" key={fields.name}>
                  <Normal row={fields.row} col={fields.col}>
                    <FieldName width="50px">
                      {fields.name.toUpperCase()}
                    </FieldName>
                    <FieldValue>
                      {values !== undefined && values[fields.name]}
                    </FieldValue>
                  </Normal>
                </MiddleDiv>
              ) : fields.name !== "cardTitle" ? (
                <Img
                  src={file.imagePreviewUrl}
                  alt="avatar"
                  key={fields.name}
                  row={fields.row}
                  col={fields.col}
                />
              ) : (
                <CardTitle key={fields.name} row="1" col="1/3">
                  {values !== undefined ? values[fields.name] : "Card Title"}
                </CardTitle>
              );
            }
          })}
        </Content>
      </CardFrontWrapper>
    );
  }
}

export default CardFront;
