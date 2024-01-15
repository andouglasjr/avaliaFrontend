import { Icon, Flex, Text, Spacer, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Icons Imports
import { PencilIcon, CorretIcon } from "../../icons/Icons";

function sidebarButtons(props) {
  const { my, mx, mb, mt, w, h, ml, mr, startText, path, ...rest } = props;
  const [pathFinal, setPathFinal] = useState("-");
  const [buttonIconEdit, setButtonIconEdit] = useState(false);
  const [buttonValue, setButtonValue] = useState(false);
  const [buttonNewText, setButtonNewText] = useState("");
  const [buttonText, setButtonText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setPathFinal(location.pathname);
  }, [location.pathname]);

  const handleClickTheme = () => {
    navigate(path);
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
      setButtonText(buttonNewText);
    }
  };

  return (
    <Flex w="216px" mx={mx} mt={mt}>
      <Flex flexDirection="row">
        <Flex
          bg={pathFinal == path ? "neutralLight.2" : "neutralLight.0"}
          _hover={{ bg: "neutralLight.1" }}
          mb="4px"
          cursor="pointer"
          onClick={pathFinal == path ? null : handleClickTheme}
          borderBottomLeftRadius="8px"
          borderTopLeftRadius="8px"
          borderTopRightRadius={pathFinal == path ? "0px" : "8px"}
          borderBottomRightRadius={pathFinal == path ? "0px" : "8px"}
          maxW={pathFinal == path ? "182px" : "216px"}
          minW={pathFinal == path ? "182px" : "216px"}
          h="40px"
          mx={mx}
          mt={mt}
        >
          {buttonIconEdit == true && pathFinal == path ? (
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
          bg={pathFinal == path ? "neutralLight.2" : "transparent"}
          _hover={{ bg: pathFinal == path ? "neutralLight.1" : "transparent" }}
          borderBottomRightRadius="8px"
          borderTopRightRadius="8px"
          cursor={pathFinal == path ? "pointer" : ""}
          onClick={buttonValue == true ? handleClickConfirm : handleClickRename}
          w="34px"
          h="40px"
          mx={mx}
          mt={mt}
        >
          {buttonIconEdit == true && pathFinal == path ? (
            <CorretIcon
              display={pathFinal == path ? "block" : "none"}
              my="auto"
              mx="auto"
              boxSize="16px"
              color="neutralDark.0"
            />
          ) : (
            <PencilIcon
              display={pathFinal == path ? "block" : "none"}
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
