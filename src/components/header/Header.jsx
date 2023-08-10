import {
    Flex,
    chakra,
    Box,
    Stack,
    Spacer,
    Menu,
    MenuButton,
    MenuItem,
    IconButton,
    MenuList,
  } from "@chakra-ui/react";
  
  import {
    PerfilIcon,
    ArchiveIcon,
    BellIcon,
    ArrowRightIcon,
} from "../icons/Icons";

  import logo from "../sidebar/components/Logo.svg";
  import Brand from "../sidebar/components/Brand";
  import sublogo from "../sidebar/components/SubLogo.svg";
  import SearchBar from "../navbar/searchBar/SearchBar";

  const navlink = [
    { name: "Entrar", link: "/#/auth/login" },
    { name: "Registrar", link: "/#/auth/register" },
  ];
  
  function DesktopSidebarContents({ children }) {
    return (
      <Stack spacing="0px">
          <Flex
          position="fixed" 
          top="0"
          left="0"
          width="100%"
          height="80px"
          bg="neutralLight.0"
          gap="16px"
          zIndex="10"
          >
              <Brand />
              <Spacer/>
              <Flex 
              direction="row" 
              alignItems="center"
              w="592px"
              h="48px"
              marginTop="16px"
              marginRight='24px'
              >
                  <SearchBar></SearchBar>
              </Flex>
              <Menu isLazy closeOnSelect={false}>
                  <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<BellIcon boxSize="20px"/>}
                  variant="off"
                  color="purple.2"
                  top='20px'
                  />
                  <MenuList>
                  <MenuItem textStyle="Button" href="" command='⌘T'>
                      Exemplo de Notificação 1
                  </MenuItem>
                  <MenuItem textStyle="Button" href="" command='⌘T'>
                      Exemplo de Notificação 2
                  </MenuItem>
                  <MenuItem textStyle="Button" href="" command='⌘T'>
                      Exemplo de Notificação 3
                  </MenuItem>
                  </MenuList>
              </Menu>
              <Menu isLazy closeOnSelect={false}>
                  <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<PerfilIcon boxSize="40px"/>}
                  variant="off"
                  marginRight='40px'
                  color="purple.2"
                  top='20px'
                  />
                  <MenuList>
                  <MenuItem textStyle="Button" href="" icon={<PerfilIcon color="purple.2" boxSize="20px" />} command='⌘N'>
                      Perfil
                  </MenuItem>
                  <MenuItem textStyle="Button" icon={<ArchiveIcon color="purple.2" boxSize="20px" />} command='⌘N'>
                      Tela Escura
                  </MenuItem>
                  <MenuItem textStyle="Button" href="" icon={<ArrowRightIcon boxSize="20px" />} command='⌘T'>
                      Sair
                  </MenuItem>
                  </MenuList>
              </Menu>
          </Flex> 
          <Box
          w="206px"
          h="80px"
          bg="neutralLight.0"
          position="fixed"
          left="0"
          top="0"
          marginTop="0"
          zIndex="2"
          >
          </Box>
          {children}
      </Stack>
    );
  }
  
  const Sidebar = (name) => {
    return (
      <chakra.header id="header">
        <Box display={{ base: "none", md: "flex" }} bg="gray.50">
          <DesktopSidebarContents name={name.name} />
        </Box>
      </chakra.header>
    );
  };
  
  export const Header = (name) => {
    return (
      <Box w="full">
        <Sidebar name={name.name} />
      </Box>
    );
  };

  export default Header;