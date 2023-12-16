import React from "react";
import { Flex, Spacer, Text, Image } from "@chakra-ui/react";
import avatar from "../../../assets/img/avatars/avatar4.png";
import { motion } from "framer-motion";

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
        h="130px"
        w="284px"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Flex
            borderTopRightRadius="8px"
            borderTopLeftRadius="8px"
            borderBottomLeftRadius="8px"
            bg="neutralLight.4"
            h="130px"
            w="250px"
          >
            <Text
              textAlign="left"
              w="234px"
              h="104px"
              textColor="neutralDark.3"
              textStyle="Caption"
              ml="8px"
              mt="8px"
            >
              {text}
            </Text>
          </Flex>
        </motion.div>
        <Spacer />
        <Image
          mt="96px"
          width="24px"
          height="24px"
          borderRadius="9999px"
          src={avatar}
          alt="helper image"
        />
      </Flex>
    </div>
  );
}

export default chatComponent;
