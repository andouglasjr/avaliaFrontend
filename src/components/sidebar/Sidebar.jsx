//React Imports
import React from "react";

//Chakra UI Imports
import { Flex } from "@chakra-ui/react";

//Sidebar Imports
import Brand from "./components/Brand";
import PerfilInteract from "./components/perfilInteract";
import List from "./components/buttonList";

//Others Imports

import { CustomButton } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Sidebar(props) {
  const { ml, mr, mt, mb, zIndex, ...rest } = props;

  const navigate = useNavigate();

  const handleClickTheme = () => {
    navigate("/generationScreen");
  };

  return (
    <motion.div
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <Flex
        zIndex={100}
        position="fixed"
        direction="column"
        w="240px"
        h="100vh"
        bg="neutralLight.0"
      >
        <Flex w="240px" h="68px" bg="transparent">
          <Brand />
        </Flex>
        <Flex direction="column" mt="1px" w="240px" h="95vh" bg="transparent">
          <CustomButton
            variant="secondary"
            onClick={handleClickTheme}
            mx="auto"
            mb="13px"
            mt="16px"
            marginLeft="12px"
            w="216px"
            label="Nova Redação"
          />
          
        </Flex>
        <Flex ml="12px" w="216px" h="1px" bg="neutralLight.1" />
        <Flex w="240px" h="5vh" bg="transparent">
          <PerfilInteract
            label="Romero Brito"
            mx="auto"
            my="auto"
          />
        </Flex>
      </Flex>
    </motion.div>
  );
}

export default Sidebar;
