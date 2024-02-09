import React from "react";
import {
  Flex,
  Text,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import ButtonGPT from "./components/buttonGPT";
import { SendIcon } from "../../components/icons/Icons";
import Lia from "../GenerationScreen/components/chatComponent";

import axios from "axios";

function generationScreen() {
  const [errorMsg, setErrorMsg] = React.useState("");

  const mock = [
    {
      text: "A persistência da violência contra a mulher na sociedade brasileira",
      path: "/evaluationScreen",
    },
    {
      text: "A ciência é a luz que ilumina as trevas da ignorância",
      path: "/evaluationScreen",
    },
    {
      text: "O estigma associado às doenças mentais na sociedade brasileira",
      path: "/evaluationScreen",
    },
  ];

  const [inputValue, setInputValue] = React.useState('');
  const [passValue, setPassValue] = React.useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputButtonClick = () => {
    setPassValue(true);
  };

  React.useEffect(() => {
    if (passValue == true && (inputValue != "" && inputValue != " " && inputValue != null)) {
      setPassValue(false);

      console.log("Aqui")

      axios
        .get("http://localhost:5000" + "/essay/generate/?subjects=" + inputValue)
        .then((response) => {
          setErrorMsg(response.data.message);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data.message);
            setErrorMsg(error.response.data.message);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  });

  return (
    <div>
      <Flex h="calc(100% + 30vh)" w="calc(100vh + 100vh)" bg="neutralLight.1">
        <Flex w="240px" h="100%" bg="neutralLight.1" />
        <Lia ml="240px"/>
      </Flex>
    </div>
  );
}

export default generationScreen;
