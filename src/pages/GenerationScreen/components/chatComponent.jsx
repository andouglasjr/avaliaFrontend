import React from "react";
import { Flex } from "@chakra-ui/react";

import InteractComponent from "./interactComponent.jsx";

function chatComponent(props) {
  const { mx, ml, mr, mt, mb } = props;

  return (
    <div>
      <Flex
        bg="transparent"
        ml={ml}
        mb={mb}
        mt={mt}
        mr={mr}
        mx={mx}
        h="624px"
        w="calc(100vh + 100vh)"
      >
        <Flex
          bg="transparent"
          minW="680px"
          ml="223px"
          flexDirection="column"
        >
          <InteractComponent />
        </Flex>
      </Flex>
    </div>
  );
}

export default chatComponent;
