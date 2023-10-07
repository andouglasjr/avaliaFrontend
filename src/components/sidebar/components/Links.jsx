/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import getEssay from "../../essay/getEssay";
// chakra imports
import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue("purple.2", "white");
  let inactiveColor = useColorModeValue(
    "neutralDark.0",
    "neutralDark.0"
  );
  let activeIcon = useColorModeValue("purple.2", "white");
  let inactiveIconColor = useColorModeValue("neutralDark.0", "white");
  let textColor = useColorModeValue("neutralDark.0", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  let inactiveText = {
    _hover: {
      color: activeColor,
    },
    color: textColor,
  };

  let inactiveIcon = {
    _hover: {
      color: activeColor,
    },
    color: inactiveIconColor,
  };

  const activeRoute = (routeName) => {
    return location.pathname.endsWith(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <>
            <Text
              fontSize={"14px"}
              color={activeColor}
              fontWeight="semibold"
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt="24px"
              key={index}
            >{" "}
              {route.name}{" "}
            </Text>{" "}
            {createLinks(route.items)}{" "}
          </>
        );
      }else if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl" ||
        route.layout === "/reviewer"
      ) {
        return (
          <NavLink key={index} to={route.layout + route.path}>
            {" "}
            {route.icon ? (
              <Box>
                <HStack
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? "22px" : "206px"
                  }
                  py="5px"
                  ps="10px"
                  w="158px"
                  color={
                    activeRoute(route.path.toLowerCase())
                      ? activeIcon
                      : inactiveIcon.color
                  }
                  _hover={
                    activeRoute(route.path.toLowerCase())
                      ? { color: activeColor }
                      : inactiveIcon._hover
                  }
                >
                  <Flex 
                  w="100%" 
                  alignItems="center" 
                  justifyContent="center"
                  >
                    <Box
                      me="18px"
                    >
                      {" "}
                      {route.icon}{" "}
                    </Box>{" "}
                    <Text
                      me="auto"
                      fontWeight={
                        activeRoute(route.path.toLowerCase())
                          ? "semibold"
                          : "semibold"
                      }
                    >{" "}
                      {route.name}{" "}
                    </Text>{" "}
                  </Flex>{" "}
                  <Box
                    h="36px"
                    w="4px"
                    bg={
                      activeRoute(route.path.toLowerCase())
                        ? "transparent"
                        : "transparent"
                    }
                    borderRadius="5px"
                  />
                </HStack>{" "}
              </Box>
            ) : (
              <Box>
                <HStack
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                  }
                  py="5px"
                  ps="10px"
                >
                  <Text
                    me="auto"
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : inactiveText.color
                    }
                    _hover={
                      activeRoute(route.path.toLowerCase())
                        ? { color: activeColor }
                        : inactiveIcon._hover
                    }
                    fontWeight={
                      activeRoute(route.path.toLowerCase()) ? "semibold" : "semibold"
                    }
                  >
                    {" "}
                    {route.name}{""}
                  </Text>{" "}
                  <Box h="36px" w="4px" bg="brand.400" borderRadius="5px" />
                </HStack>{" "}
              </Box>
            )}{" "}
          </NavLink>
        );
      }
    });
  };
  //  BRAND
  return createLinks(routes);
}

export default SidebarLinks;
