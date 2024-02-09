import React from "react";
import { Flex, Spacer, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import TextBoxComponent from "./textBoxComponent.jsx";

/*
<Flex
          ml="213px"
          mt="130px"
          w="680px"
          h="436px"
          bg="transparent"
          flexDirection="column"
        >
          <InputGroup mt="30px" w="680px" h="48px">
            <Input
              boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.16)"
              w="full"
              h="full"
              textStyle="Caption"
              textColor="neutralDark.4"
              _placeholder={{ color: "neutralLight.4" }}
              placeholder="Placeholder"
              onChange={ handleInputChange }
            />
            <InputRightElement minH="full">
              <IconButton
                bg="neutralLight.1"
                minH="full"
                my="auto"
                icon={<SendIcon boxSize="24px" color="neutralDark.0" />}
                onClick={ handleInputButtonClick }
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
*/

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
          bg="green"
          overflowY="auto"
          overflowX="hidden"
          minW="680px"
          maxH="675px"
          ml="223px"
          flexDirection="column"
        >
          <TextBoxComponent />
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
