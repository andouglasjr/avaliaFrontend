//React Imports
import React from "react";

//Chakra UI Imports
import { Flex } from "@chakra-ui/react";

//Sidebar Imports
import Brand from "./components/Brand";
import PerfilInteract from "./components/perfilInteract";
import SidebarButtons from "./components/sidebarButtons";

//Others Imports
import { CustomButton } from "../button/Button"

function Sidebar() {
    return(
        <Flex position="fixed" direction="column" w="240px" h="100vh" bg="neutralLight.0">
            <Flex w="240px" h="68px" bg="transparent">
                <Brand />
            </Flex>
            <Flex direction="column" mt="1px" w="240px" h="628px" bg="transparent">
                <CustomButton variant="secondary" mx="auto" mb="13px" mt="16px" marginLeft="12px" w="216px" label="Nova Redação" />
                <SidebarButtons mx="auto" />
            </Flex>
            <Flex ml="12px" w="216px" h="1px" bg="neutralLight.1"/>
            <Flex w="240px" h="calc(100vh - 240px)" bg="transparent">
                <PerfilInteract label="Romero Brito" mx="auto" my="auto" />
            </Flex>
        </Flex>
    )
}

export default Sidebar;