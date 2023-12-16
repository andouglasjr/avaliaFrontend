import React from "react";
import {
  Flex,
  Text,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import ButtonGPT from "./components/buttonGPT";
import { SendIcon } from "../../components/icons/Icons";
import ChatHelper from "../GenerationScreen/components/chatComponent";

function generationScreen() {
  const mock = [
    {
      text: "A persistência da violência contra a mulher na sociedade brasileira",
      path: "/evaluationScreen",
    },
    {
      text: "A ciência é a luz que ilumina as trevas da ignorância",
      path: "/evaluationScreen",
    },
    {
      text: "O estigma associado às doenças mentais na sociedade brasileira",
      path: "/evaluationScreen",
    },
  ];

  return (
    <div>
      <Flex h="100vh" w="calc(100vh + 100vh)" bg="neutralLight.1">
        <Flex w="240px" h="100%" bg="neutralLight.1" />
        <Flex
          ml="213px"
          mt="130px"
          w="680px"
          h="436px"
          bg="transparent"
          flexDirection="column"
        >
          <Flex mx="auto" bg="transparent" flexDirection="column" mb="32px">
            <Text textColor="neutralDark.4" textStyle="h3" mb="32px">
              Portal das Redações
            </Text>
            <Text textColor="neutralDark.0" textStyle="Body">
              Receba auxílio para aprimorar sua redação e alcançar a nota
              máxima. Basta digitar um tema e contar com a correção dos
              revisores.
            </Text>
          </Flex>
          <Flex bg="transparent" mx="auto" my="auto" flexDirection="column">
            <Flex mb="16px" flexDirection="row">
              {mock.map((m) => {
                return <ButtonGPT mr="16px" path={m.path} text={m.text} />;
              })}
            </Flex>
          </Flex>
          <ChatHelper
            text="Olá! Eu sou a Avali.ia, aperte em um dos botões de sugestão de tema acima ou digite três palavras chaves para gerarmos uma redação para você!"
            ml="430px"
            mt="162px"
          />
          <InputGroup mt="30px" w="680px" h="48px">
            <Input
              boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.16)"
              w="full"
              h="full"
              textStyle="Caption"
              textColor="neutralDark.4"
              _placeholder={{ color: "neutralLight.4" }}
              placeholder="Placeholder"
            />
            <InputRightElement minH="full">
              <IconButton
                bg="neutralLight.1"
                minH="full"
                my="auto"
                icon={<SendIcon boxSize="24px" color="neutralDark.0" />}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </div>
  );
}

export default generationScreen;
