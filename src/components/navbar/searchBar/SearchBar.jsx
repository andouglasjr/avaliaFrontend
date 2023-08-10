import React from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export function SearchBar(props) {
  // Pass the computed styles into the `__css` prop
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;
  // Chakra Color Mode
  const searchIconColor = useColorModeValue("neutralDark.0", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");
  return (
    <InputGroup w={{ base: "100%", md: "592px" }}>
      <InputRightElement
        children={
          <IconButton
          variant="off"
            bg='inherit'
            icon={<SearchIcon color={searchIconColor} boxSize="18px" />} />
        }
      />
      <Input
        fontSize='16px'
        bg='neutralLitgh.0'
        color={inputText}
        _placeholder={{ color: "neutralLitgh.4", fontSize: "16px" }}
        borderRadius={borderRadius ? borderRadius : "30px"}
        placeholder={placeholder ? placeholder : "O que você está procurando?"}
      />
    </InputGroup>
  );
}

export default SearchBar;
