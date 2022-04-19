import * as React from "react";
import { Card, Title, Paragraph } from "react-native-paper";


export default function CardP({marca, modelo, imagen, precio }) {
  return (
    <>
      <Card>
        <Card.Content>
          <Title>{marca}{modelo}</Title>
          <Paragraph>{precio}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: imagen}} alt={modelo}  style={{ width: "100%", objectFit: "contain", height:300}}  />
      </Card>
    </>
  );
}
