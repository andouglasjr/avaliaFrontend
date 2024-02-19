import React, { useState } from "react";
import { Flex } from '@chakra-ui/react';
import { motion } from "framer-motion";

export default function SwitchComponent(props) {
  const { setValue, firstValue, secondValue } = props;
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn)
    if (setValue != undefined && firstValue != undefined && secondValue != undefined) {
      if (isOn == true) {
        setValue(secondValue);
      } else {
        setValue(firstValue);
      }
    }
  };

  return (
    <Flex
      w="42px"
      h="24px"
      borderRadius="80px"
      bg={isOn ? "purple.0" : "neutralLight.4"}
      onClick={toggleSwitch}
      cursor="pointer"
      style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
    >
      <motion.div
        layout
        className="handle"
      >
        <Flex
          w="18px"
          m="3px"
          h="18px"
          bg={isOn ? "purple.3" : "#637792"}
          borderRadius="100%"
          _focus={{ outline: "none" }}
        />
      </motion.div>
    </Flex>
  );
}
