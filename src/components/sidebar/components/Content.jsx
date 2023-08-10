// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import React from "react";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  return (
    <Flex direction="column" height="100%" borderRadius="30px">
      <Stack direction="column" mb="auto" mt="8px">
        <Box ps="20px" pe={{ md: "16px", "2xl": "1px" }} _hover="purple.2">
          <Links routes={routes} />{" "}
        </Box>{" "}
      </Stack>
      <Box
        ps="20px"
        pe={{ md: "16px", "2xl": "0px" }}
        mt="60px"
        mb="40px"
        borderRadius="30px"
      >
       
      </Box>{" "}
    </Flex>
  );
}

export default SidebarContent;
