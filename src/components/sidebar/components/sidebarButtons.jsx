import { Icon, Flex, Text, Spacer, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Icons Imports
import { PencilIcon, CorretIcon } from "../../icons/Icons";
import axios from "axios";

function sidebarButtons(props) {
  const { my, mx, mb, mt, w, h, ml, mr, startText, ...rest } = props;
  const [pathFinal, setPathFinal] = useState("");
  const [buttonIconEdit, setButtonIconEdit] = useState(false);
  const [buttonValue, setButtonValue] = useState(false);
  const [buttonIconClickConfirm, setButtonIconClickConfirm] = useState(false);
  const [buttonNewText, setButtonNewText] = useState("");
  const [buttonText, setButtonText] = useState("");

  const id = "/evaluationScreen";

  const navigate = useNavigate();

  useEffect(() => {
    setPathFinal(location.pathname);
  }, [location.pathname]);

  const handleClickTheme = () => {
    navigate("evaluationScreen:" + id);
  };

  const handleInputChange = (event) => {
    setButtonNewText(event.target.value);
  };

  const handleClickRename = () => {
    setButtonValue(true);
    setButtonIconEdit(true);
  };

  const handleClickConfirm = () => {
    setButtonIconEdit(false);
    setButtonValue(false);
    if (buttonNewText == "") {
      setButtonText(buttonText);
    } else {
      setButtonIconClickConfirm(true);
      setButtonText(buttonNewText);
    }
  };

  const [buttonName, setButtonName] = useState({
    name: "",
  });

  useEffect(() => {
    if (buttonIconClickConfirm && buttonName.name != "") {
      setButtonIconClickConfirm(false);
  
      const updatedFormData = { ...buttonName, name: buttonNewText };
  
      console.log(buttonName);
  
      axios
        .put("http://localhost:5000" + "/subject/update/:" + startText, updatedFormData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          if (error.response) {
            console.log(error.response.data.message);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  }, [buttonIconClickConfirm, buttonName.name, buttonNewText, startText]);

  return (
    <Flex w="216px" mx={mx} mt={mt}>
      <Flex flexDirection="row">
        <Flex
          bg={pathFinal == id ? "neutralLight.2" : "neutralLight.0"}
          _hover={{ bg: "neutralLight.1" }}
          mb="4px"
          cursor="pointer"
          onClick={pathFinal == id ? null : handleClickTheme}
          borderBottomLeftRadius="8px"
          borderTopLeftRadius="8px"
          borderTopRightRadius={pathFinal == id ? "0px" : "8px"}
          borderBottomRightRadius={pathFinal == id ? "0px" : "8px"}
          maxW={pathFinal == id ? "182px" : "216px"}
          minW={pathFinal == id ? "182px" : "216px"}
          h="40px"
          mx={mx}
          mt={mt}
        >
          {buttonIconEdit == true && pathFinal == id ? (
            <Input
              onChange={handleInputChange}
              minW="182px"
              isTruncated
              textColor="neutralDark.4"
              textStyle="Caption1"
            ></Input>
          ) : (
            <Text
              my="auto"
              isTruncated
              textColor="neutralDark.4"
              textStyle="Caption1"
              ml="10px"
              mr="10px"
            >
              {" "}
              {buttonText || startText}{" "}
            </Text>
          )}
        </Flex>
        <Spacer />
        <Flex
          bg={pathFinal == id ? "neutralLight.2" : "transparent"}
          _hover={{ bg: pathFinal == id ? "neutralLight.1" : "transparent" }}
          borderBottomRightRadius="8px"
          borderTopRightRadius="8px"
          cursor={pathFinal == id ? "pointer" : ""}
          onClick={buttonValue == true ? handleClickConfirm : handleClickRename}
          w="34px"
          h="40px"
          mx={mx}
          mt={mt}
        >
          {buttonIconEdit == true && pathFinal == id ? (
            <CorretIcon
              display={pathFinal == id ? "block" : "none"}
              my="auto"
              mx="auto"
              boxSize="16px"
              color="neutralDark.0"
              onClick={() => setButtonName({ ...buttonName, name: buttonNewText })}
            />
          ) : (
            <PencilIcon
              display={pathFinal == id ? "block" : "none"}
              my="auto"
              mx="auto"
              boxSize="16px"
              color="neutralDark.0"
            />
          )}
        </Flex>
      </Flex>{" "}
    </Flex>
  );
}

export default sidebarButtons;
