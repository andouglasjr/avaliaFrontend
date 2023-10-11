import {
  Button,
  Input,
  Flex,
  Img,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { DotIcon, SendIcon } from "../../components/icons/Icons";

export default function Essays() {
  const purple = useColorModeValue("purple.2", "purple.2")
  const neutralLight0 = useColorModeValue("neutralLight.0", "neutralLight.0")
  const neutralLight1 = useColorModeValue("neutralLight.1", "neutralLight.1")
  const neutralLight2 = useColorModeValue("neutralLight.2", "neutralLight.2")
  const neutralDark0 = useColorModeValue("neutralDark.0", "neutralDark.0")


  return (
    <Flex>
      <Flex className="sidebar" bgColor={neutralLight0} height={"100vh"} width={"240px"} flexDir={"column"} alignItems={"center"} flexShrink={"0"}>
        <Flex align={"center"} justifyContent={"center"} padding={"24px"} ><img src="/src/assets/img/dashboards/logo.svg" alt="logo" /></Flex>
        <Flex padding={"16px 12px"} flexDir={"column"} justifyContent={"space-between"} alignItems={"flex-start"} flex={"1 0 0"} alignSelf={"stretch"}>
          <Flex flexDir={"column"} alignItems={"flex-start"} gap={"16px"} alignSelf={"stretch"}>
            <Button variant={"secondary"} isDisabled={"true"} margin={0} width={"100%"}><Text textStyle={"Button"}>Nova redação</Text></Button>
            <Flex flexDir={"column"} alignItems={"flex-start"} gap={"4px"} alignSelf={"stretch"} >
              <Text cursor={"pointer"} display={"flex"} align={"center"} textStyle={"Caption"} padding={"8px 10px"} width={"100%"}>A ciência é a luz que ilumin...</Text>
              <Text cursor={"pointer"} display={"flex"} align={"center"} textStyle={"Caption"} padding={"8px 10px"} width={"100%"}>A persistência da violência...</Text>
              <Text cursor={"pointer"} display={"flex"} align={"center"} textStyle={"Caption"} padding={"8px 10px"} width={"100%"}>O estigma associado às...</Text>
              <Text cursor={"pointer"} display={"flex"} align={"center"} textStyle={"Caption"} padding={"8px 10px"} width={"100%"}>Democratização do acesso...</Text>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} alignItems={"flex-start"} gap={"16px"} alignSelf={"stretch"}>
            <svg width="216" height="2" viewBox="0 0 216 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H216" stroke="#F3F4F7" strokeWidth={"1px"} />
            </svg>
            <Flex className="item_menu" padding={"8px 10px"} alignItems={"center"} gap={"8px"} alignSelf={"stretch"}>
              <Img width={"24px"} borderRadius={"9999px"} src="/src/assets/img/avatars/avatar5.png" alt="profile image"></Img>
              <Text width={"100%"} display={"flex"} justifyContent={"flex-start"} textStyle={"Caption"}>Hector Lima</Text>
              <DotIcon color={neutralDark0} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="content" align={"center"} justify={"center"}  flexDir={"column"} bgColor={neutralLight1} width={"87.17vw"}>
        <Box height={"100vh"}>
          <Flex className="portal-das-redacoes" margin={"130px 0"} width={"680px"} flexDir={"column"} justifyContent={"flex-start"} gap={"32px"}>
            <Text  textStyle={"h3"}>Portal das Redações</Text>
            <Text textStyle={"Body"} color={neutralDark0}>Receba auxílio para aprimorar sua redação e alcançar a nota máxima. Basta digitar um tema e contar com a correção dos revisores.</Text>
            <Flex gap={"16px"} flexDir={"column"}>
              <Flex alignItems={"flex-start"} gap={"16px"} alignSelf={"stretch"}>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"}>A persistência da violência contra a mulher na sociedade brasileira</Text></Flex>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"} >A ciência é a luz que ilumina as trevas da ignorância</Text></Flex>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"}>O estigma associado às doenças mentais na sociedade brasileira.</Text></Flex>
              </Flex>
              <Flex alignItems={"flex-start"} gap={"16px"} alignSelf={"stretch"}>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"}>Democratização do acesso ao cinema no Brasil</Text></Flex>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"}>Manipulação do comportamento do usuário pelo controle de dados na internet</Text></Flex>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"}>Desafios para a formação educacional de surdos no Brasil</Text></Flex>
              </Flex>
              <Flex alignItems={"flex-start"} gap={"16px"} alignSelf={"stretch"}>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"}>Caminhos para combater a intolerância religiosa no Brasil</Text></Flex>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"}>Publicidade infantil em questão no Brasil</Text></Flex>
                <Flex cursor={"pointer"} flex={"1 0 0"} padding={"16px"} borderRadius={"8px"} bgColor={neutralLight0}><Text textStyle={"Caption"} textAlign={"left"} height={"48px"} overflow={"hidden"} textOverflow={"ellipsis"}>Efeitos da implantação da Lei Seca no Brasil</Text></Flex>
              </Flex>
            </Flex>
          </Flex>
          <Box position={"relative"}>
            <Input borderColor={neutralLight2} paddingRight={"30px"} _placeholder={{textStyle: "Body"}} placeholder="Placeholder" width={"680px"} boxShadow={"0px 4px 6px 0px rgba(28, 31, 36, 0.16)"}/>
            <SendIcon _hover={{cursor: "pointer", color: purple, transition: "all .25s"}} position={"absolute"} top={"50%"} right={"10px"} transform={"translateY(-50%)"} color={neutralDark0} width={"24px"} height={"24px"}/>
          </Box>
          
        </Box>
      </Flex>
    </Flex>
  )
}