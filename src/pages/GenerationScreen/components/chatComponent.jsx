import React from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RecoilRoot } from 'recoil';

import TextBoxComponent from "./textBoxComponent.jsx";
import InteractComponent from "./interactComponent.jsx";

function chatComponent(props) {
  const { ml, mr, mt, mb, text, ...rest } = props;

  return (
    <div>
      <Flex
        bg="transparent"
        ml={ml}
        mb={mb}
        mt={mt}
        mr={mr}
        h="100vh"
        w="calc(100vh + 100vh)"
      >
        <Flex
          bg="transparent"
          overflowY="auto"
          overflowX="hidden"
          minW="680px"
          maxH="89%"
          ml="223px"
          flexDirection="column"
        >
          <RecoilRoot>
            <InteractComponent />
          </RecoilRoot>
        </Flex>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        ></motion.div>
      </Flex>
    </div>
  );
}

export default chatComponent;
