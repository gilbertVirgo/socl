//Import from styles
import {
  A,
  Card,
  CardContent,
  CardFlex,
  CardHeading,
  CardImage,
  CardMeta,
  CardTop,
} from "./styles";

//Import from package.json
import React from "react";

//Creating the format for a single card
export default (props) => (
  <Card>
    <CardContent className="card-content">
      <A href={props.link}>
        <CardTop>
          <CardHeading>{props.title}</CardHeading>
          <CardHeading.italic
            dangerouslySetInnerHTML={{ __html: props.purpose }}
          />
        </CardTop>
      </A>
      <A href={props.link} style={{ color: "black" }}>
        <CardFlex>
          <CardMeta>{props.meta}</CardMeta>
        </CardFlex>
      </A>
    </CardContent>
    <CardImage src={props.src} />
  </Card>
);
