import React, { useState, useEffect } from "react";
import { Flex, Text, Spacer } from "@chakra-ui/react";
import ButtonsOfList from "./sidebarButtons";
import axios from "axios";

/*
const mock = [
    {
      text: "A ciência é a luz que ilumina as trevas da ignorância",
      path: "/evaluationScreen",
    },
    {
      text: "A persistência da violência contra a mulher na sociedade brasileira",
      path: "/evaluationScreenn",
    },
    {
      text: "O estigma associado às doenças mentais na sociedade brasileira",
      path: "/evaluationScreenn",
    },
    {
      text: "Democratização do acesso ao cinema no Brasil",
      path: "/evaluationScreenn",
    },
  ];
*/

function buttonList(props) {
  const { label, my, extra, mx, mb, mt, icon, w, h, ml, ...rest } = props;

  const [listEssay, setListEssay] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000" + "/subject/get/all")
      .then((response) => {
        setListEssay(response.data.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  return (
    <>
      <Flex flexDirection="column">
        {listEssay.map((essay) => (
          <ButtonsOfList
            id={essay.id}
            startText={essay.name}
            mx={mx}
          />
        ))}
      </Flex>
    </>
  );
}

export default buttonList;
