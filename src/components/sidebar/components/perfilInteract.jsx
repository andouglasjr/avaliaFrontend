//React Imports
import React from "react";

//Chakra UI Imports
import { Flex, Image, IconButton, Text, Spacer, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

//Other Imports
import avatar from "../../../assets/img/avatars/avatar5.png"
import { DotIcon } from "../../icons/Icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../pages/auth/login/authToken";

function perfilInteract(props) {
    const { label, my, extra, mx, mb, mt, icon, w, h, ml, zIndex, ...rest } = props;

    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken();
        navigate("/login", { replace: true });
    };

    const timeLogout = () => {
        setTimeout(() => {
            handleLogout();
        }, 2 * 1000);
    }

    return(
        <Flex direction="row" my={my} mx={mx} mt={mt} ml={ml} w="216px" h="40px" bg="transparent" p="8px">
            <Image ml="10px" my="auto" width="24px" height="24px"  borderRadius="9999px" src={ avatar } alt="profile image" />
            <Text my="auto" textColor="neutralDark.4" textStyle="Caption" w="140px">{ label }</Text>
            <Menu isLazy closeOnSelect={false}>
                <MenuButton
                as={IconButton}
                icon={<DotIcon boxSize="16px"/>}
                variant="off"
                color="purple.2"
                bottom="12px"
                />
                <MenuList>
                <MenuItem textStyle="Button" onClick={ timeLogout } command='⌘T'>
                    Logout
                </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default perfilInteract;