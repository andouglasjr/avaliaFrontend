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

//import { setAllChat, setIDState } from "../../pages/GenerationScreen/components/interactComponent";

function Sidebar(props) {
  const { ml, mr, mt, mb, zIndex, display, ...rest } = props;

  const navigate = useNavigate();

  const handleClickTheme = () => {
    if(localStorage.getItem("profile") === "reviewer"){
      navigate("/reviewerDashboard")
    }else {
      navigate("/generationScreen");
    }
  };

  return (
    <motion.div
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <Flex
        display={display}
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
        <Flex align="center" direction="column" mt="1px" w="240px" h="95vh" bg="transparent">
          <CustomButton
            variant="secondary"
            onClick={handleClickTheme}
            mx="auto"
            mb="13px"
            mt="16px"
            marginLeft="12px"
            w="216px"
            h="40px"
            label={localStorage.getItem("profile") === "reviewer" ? "DashBoard" : "Nova Redação"}
          />
        </Flex>
        <Flex ml="12px" w="216px" h="1px" bg="neutralLight.1" />
        <Flex w="240px" h="5vh" bg="transparent">
          <PerfilInteract
            label={props.userName}
            mx="auto"
            my="auto"
          />
        </Flex>
      </Flex>
    </motion.div>
  );
}

export default Sidebar;
