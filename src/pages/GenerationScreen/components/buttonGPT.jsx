import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function buttonGPT(props) {
  const { ml, mr, mt, mb, text, path, ...rest } = props;

  const navigate = useNavigate();

  const handleClickTheme = () => {
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <Flex
        _hover={{ bg: "neutralLight.3" }}
        cursor="pointer"
        ml={ml}
        mr={mr}
        mt={mt}
        mb={mb}
        onClick={handleClickTheme}
        borderRadius="8px"
        h={"80px"}
        w={"216px"}
        bg="neutralLight.0"
      >
        <Text
          isTruncated
          mx="auto"
          my="auto"
          w="184px"
          h="48px"
          textAlign="left"
          textStyle="Caption"
          textColor="neutralDark.4"
        >
          {text}
        </Text>
      </Flex>
    </motion.div>
  );
}

export default buttonGPT;
