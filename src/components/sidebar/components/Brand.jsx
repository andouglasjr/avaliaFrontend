import React from "react";

// Chakra imports
import { Box, useColorModeValue, Image } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "../../separator/Separator";
import logo from "../components/Logo.svg";
import sublogo from "../components/SubLogo.svg";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");
  let bgColor = "neutralLight.0"

  return (
    <Box
    w="240px"
    h="80px"
    align="left" 
    direction="column" 
    bg={bgColor}
    >
      <Image src={sublogo} w="240px" h="80px" alt="SubLogo" />
    </Box>
  );
}

export default SidebarBrand;
