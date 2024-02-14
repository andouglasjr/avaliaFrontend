import React from "react";
import {
  Flex,
} from "@chakra-ui/react";
import Lia from "../GenerationScreen/components/chatComponent";

function generationScreen() {

  return (
    <div>
      <Flex h="100vh" w="calc(100vh + 160vh)" bg="neutralLight.2">
        <Flex bg="transparent" minW="680px" maxH="87%" overflowY="auto" overflowX="hidden">
          <Flex minH="624px" bg="neutralLight.2" />
          <Lia ml="240px"/>
        </Flex>
      </Flex>
    </div>
  );
}

export default generationScreen;
