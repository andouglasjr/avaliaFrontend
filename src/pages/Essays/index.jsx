import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
import { DotIcon } from "../../components/icons/Icons";

export default function Essays() {
  const neutralLight0 = useColorModeValue("neutralLight.0", "neutralLight.0")
  const neutralLight1 = useColorModeValue("neutralLight.1", "neutralLight.1")


  return (
    <Flex>
      <Flex className="sidebar" bgColor={neutralLight0} height={"100vh"} width={"12.83vw"} flexDir={"column"} alignItems={"center"} flexShrink={"0"}>
        <Flex align={"center"} justifyContent={"center"} padding={"24px"} ><img src="/src/assets/img/dashboards/logo.svg" alt="logo" /></Flex>
        <Flex padding={"16px 12px"} flexDir={"column"} justifyContent={"space-between"} alignItems={"flex-start"} flex={"1 0 0"} alignSelf={"stretch"}>
          <Flex flexDir={"column"} alignItems={"flex-start"} gap={"16px"} alignSelf={"stretch"}>
            <Button variant={"secondary"} isDisabled={"true"} margin={0} width={"100%"}><Text textStyle={"Button"}>Nova Redação</Text></Button>
            <Flex flexDir={"column"} alignItems={"flex-start"} gap={"4px"} alignSelf={"stretch"} >
              <Text display={"flex"} align={"center"} textStyle={"Caption"} padding={"8px 10px"} width={"100%"}>A ciência é a luz que ilumin...</Text>
              <Text display={"flex"} align={"center"} textStyle={"Caption"} padding={"8px 10px"} width={"100%"}>A persistência da violência...</Text>
              <Text display={"flex"} align={"center"} textStyle={"Caption"} padding={"8px 10px"} width={"100%"}>O estigma associado às...</Text>
              <Text display={"flex"} align={"center"} textStyle={"Caption"} padding={"8px 10px"} width={"100%"}>Democratização do acesso...</Text>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} alignItems={"flex-start"} gap={"16px"} alignSelf={"stretch"}>
            <svg width="216" height="2" viewBox="0 0 216 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H216" stroke="#F3F4F7" strokeWidth={"1px"} />
            </svg>
            <Flex className="item_menu" padding={"8px 10px"} alignItems={"center"} gap={"8px"} alignSelf={"stretch"}>
                <Img width={"24px"} borderRadius={"9999px"} src="/src/assets/img/avatars/avatar5.png" alt="profile image"></Img>
                <Text width={"100%"} display={"flex"} justifyContent={"flex-start"} textStyle={"Caption"}>Hector Lima</Text>
                <DotIcon/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="content" bgColor={neutralLight1} width={"87.17vw"}>
        
      </Flex>
    </Flex>
  )
}