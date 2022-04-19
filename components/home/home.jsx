import React, { useEffect } from "react";

import { Text, View } from "react-native";

//components
import CardP from "../card/card";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getAuto } from "../../redux/actions/index";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuto());
  }, []);

  const autos = useSelector((state) => state.autos);

  return (
    <View>
      {autos &&
        autos.map((auto) => (
          <CardP
            key={auto.id}
            marca={auto.marca}
            modelo={auto.modelo}
            imagen={auto.imagen[0]}
            precio={auto.precio}
          />
        ))}
    </View>
  );
}
