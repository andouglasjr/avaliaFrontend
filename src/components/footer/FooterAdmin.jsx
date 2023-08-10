/*eslint-disable*/
import React, { useState } from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export const FooterAdmin = (props) => {
  const [visitedLinks, setVisitedLinks] = useState([]);

  const handleLinkClick = (index) => {
    const updatedVisitedLinks = [...visitedLinks];
    updatedVisitedLinks[index] = true;
    setVisitedLinks(updatedVisitedLinks);
  };

  const textColor = useColorModeValue("gray.400", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "50px" }}
      pb='30px'>
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        {" "}
        &copy; {1900 + new Date().getYear()}
        <Text as='span' fontWeight='500' ms='4px'>
          Portal das Redações. All Rights Reserved. 
        </Text>
      </Text>
      <List display='flex' paddingLeft={10}>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            onClick={() => handleLinkClick(1)}
            color={visitedLinks[1] ? 'purple.3' : textColor}
            href='mailto:hello@simmmple.com'>
            Support
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            onClick={() => handleLinkClick(2)}
            color={visitedLinks[2] ? 'purple.3' : textColor}
            href='https://www.simmmple.com/licenses'>
            License
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            fontWeight='500'
            onClick={() => handleLinkClick(3)}
            color={visitedLinks[3] ? 'purple.3' : textColor}
            href='https://simmmple.com/terms-of-service'>
            Terms of Use
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight='500'
            onClick={() => handleLinkClick(4)}
            color={visitedLinks[4] ? 'purple.3' : textColor}
            href='https://www.blog.simmmple.com/'>
            Blog
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
