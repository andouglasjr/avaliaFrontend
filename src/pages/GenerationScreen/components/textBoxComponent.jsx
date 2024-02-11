import React, { useState, useRef, useEffect } from "react";
import {
  Flex,
  Spacer,
  Text,
  Image,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { SendIcon } from "../../../components/icons/Icons";

import axios from "axios";

import { steps } from "../../../chatbot/conversation.json";

import avatar from "./images/Avatar.png";
import essayGenerateOptionImage from "./images/generateEssay.png";
import essayWriterOptionImage from "./images/writeEssay.png";

//WRITER SPACE
export const mock1 = [
  {
    text: "Ótimo! Você pensou em um tema específico ou quer que eu faça isso pra você? Eu posso sugerir temas e gerar textos motivadores para você ter uma base para escrever sua redação, da mesma forma como acontece no ENEM.",
  },
  {
    text: "Escreva o tema da redação para que eu possa gerar textos motivadores.",
  },
  {
    text: "Ok! Faço isso pra você. Posso gerar temas de trẽs formas diferentes:",
    text1: " - Baseado em palavras-chave indicadas por você;",
    text2: " - A partir da minha base de dados de temas antigos do ENEM; ",
    text3:
      " - Ou ainda de forma aleatória, baseado em uma anáĺise de temas possíveis de aparecer, seguindo o padrão do INEP. Qual a forma que você deseja?",
  },
  {
    text: "Ok! Vou procurar um tema aqui pra você...",
    text1: "Pronto! O tema escolhido foi “tema”, do ENEM “ano”.",
    text2:
      "Agora estou gerando os textos motivadores para o tema “tema ”. Em breve você vai ser redirecionado para o nosso espaço de escrita da redação...",
  },
  {
    text: "Pronto! Gerei algumas opções de tema. Escolha um deles para seguir:",
  },
];

export const themeOptions1 = [
  {
    text: "A luta das mulheres por igualdade no mercado de trabalho",
  },
  {
    text: "Os desafios do equilíbrio entre vida pessoal e trabalho para as mulheres",
  },
  {
    text: "Mulheres: rompendo barreiras no mercado de trabalho",
  },
];

const WriterEssay = function writerEssayOption(props) {
  const { onClick, essayGenerate, writerEssay, ...rest } = props;

  return (
    <div>
      <Flex
        cursor={
          writerEssay == true
            ? "default"
            : "pointer" && essayGenerate == true
              ? "default"
              : "pointer"
        }
        onClick={onClick}
        mt="16px"
        ml={
          essayGenerate == true
            ? "-314px"
            : "0px" || writerEssay == true
              ? "16px"
              : "0px"
        }
        justify="left"
        minW="314px"
        maxW="314px"
        borderRadius="8px"
        maxH="116px"
        minH="116px"
        bg="neutralLight.0"
        flexDirection="column"
        _focus={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        transition="box-shadow 0.3s ease-in-out"
      >
        <Image
          ml="16px"
          mt="16px"
          width="40px"
          height="40px"
          borderRadius="8px"
          src={essayWriterOptionImage}
          alt="Option image"
        />
        <Spacer />
        <Text
          cursor={
            writerEssay == true
              ? "default"
              : "pointer" && essayGenerate == true
                ? "default"
                : "pointer"
          }
          ml="16px"
          mb="12px"
          textAlign="left"
          textStyle="Body1"
        >
          Digitar minha redação
        </Text>
      </Flex>
      <Flex ml="-40px" display={writerEssay == true ? "block" : "none"}>
        <WriterEssayClicked />
      </Flex>
    </div>
  );
};

const GenerateToWriterUserClicked = function generateToWriterUserOpitionClicked(
  props
) {
  const [userConfig, setUserConfig] = useState(false);
  const [newTheme, setNewTheme] = useState(false);
  const [olderThemes, setOlderThemes] = useState(false);

  const handleClickUserConfig = () => {
    setUserConfig(true);
  };

  const handleClickOlderThemes = () => {
    setOlderThemes(true);
  };

  const handleClickNewTheme = () => {
    setNewTheme(true);
  };

  return (
    <div>
      <Flex minW="680px" flexDirection="column">
        <Flex minW="680px" mt="40px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body1">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock1[2].text}
          </Text>
          <Text textAlign="justify" textStyle="Body">
            {mock1[2].text1}
          </Text>
          <Text textAlign="justify" textStyle="Body">
            {mock1[2].text2}
          </Text>
          <Text textAlign="justify" textStyle="Body">
            {mock1[2].text3}
          </Text>
          <Flex mt="16px" maxH="196px" flexDirection="column" maxW="644px">
            <Flex
              bg="neutralLight.0"
              borderRadius="8px"
              onClick={
                userConfig == true || newTheme == true || olderThemes == true
                  ? null
                  : handleClickUserConfig
              }
              cursor={
                userConfig == true || newTheme == true || olderThemes == true
                  ? "default"
                  : "pointer"
              }
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Vou lhe passar o que eu quero.
              </Text>
            </Flex>
            <Spacer mb="8px" />
            <Flex
              bg="neutralLight.0"
              borderRadius="8px"
              onClick={
                userConfig == true || newTheme == true || olderThemes == true
                  ? null
                  : handleClickOlderThemes
              }
              cursor={
                userConfig == true || newTheme == true || olderThemes == true
                  ? "default"
                  : "pointer"
              }
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Quero temas que já caíram em anos anteriores!
              </Text>
            </Flex>
            <Spacer mb="8px" />
            <Flex
              bg="neutralLight.0"
              borderRadius="8px"
              onClick={
                userConfig == true || newTheme == true || olderThemes == true
                  ? null
                  : handleClickNewTheme
              }
              cursor={
                userConfig == true || newTheme == true || olderThemes == true
                  ? "default"
                  : "pointer"
              }
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Crie um tema novo!
              </Text>
            </Flex>
          </Flex>
          <Flex ml="-36px" display={userConfig == true ? "block" : "none"}>
            <UserThemeClicked />
          </Flex>
          <Flex ml="-36px" display={newTheme == true ? "block" : "none"}>
            <NewTheme />
          </Flex>
          <Flex ml="-36px" display={olderThemes == true ? "block" : "none"}>
            <UserConfigClickedOlderThemes />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

const WriterUserThemeClicked = function writerUserThemeOpitionClicked(props) {
  return (
    <div>
      <Flex minW="680px" flexDirection="column">
        <Flex minW="680px" mt="40px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body1">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock1[1].text}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

const WriterEssayClicked = function writerEssayOpitionClicked(props) {
  const [userTheme, setUserTheme] = useState(false);
  const [generateToUser, setGenerateToUser] = useState(false);

  const handleClickUserTheme = () => {
    setUserTheme(true);
  };

  const handleClickGenerateToUser = () => {
    setGenerateToUser(true);
  };

  return (
    <div>
      <Flex ml="-310px" minW="680px" flexDirection="column">
        <Flex minW="680px" mt="40px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body1">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock1[0].text}
          </Text>
          <Flex mt="16px" maxH="196px" flexDirection="column" maxW="644px">
            <Flex
              bg="neutralLight.0"
              borderRadius="8px"
              onClick={
                userTheme == true || generateToUser == true
                  ? null
                  : handleClickUserTheme
              }
              cursor={
                userTheme == true || generateToUser == true
                  ? "default"
                  : "pointer"
              }
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Tenho um tema
              </Text>
            </Flex>
            <Spacer mb="8px" />
            <Flex
              bg="neutralLight.0"
              borderRadius="8px"
              onClick={
                userTheme == true || generateToUser == true
                  ? null
                  : handleClickGenerateToUser
              }
              cursor={
                userTheme == true || generateToUser == true
                  ? "default"
                  : "pointer"
              }
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Gere pra mim
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex display={userTheme == true ? "block" : "none"}>
          <WriterUserThemeClicked />
        </Flex>
        <Flex display={generateToUser == true ? "block" : "none"}>
          <GenerateToWriterUserClicked />
        </Flex>
      </Flex>
    </div>
  );
};

const NewTheme = function newThemeClickedOption(props) {
  const { ...rest } = props;

  const themeGneratedOptions = themeOptions1;

  const [showOtions, setShowOtions] = useState(false);
  const [generateEssay, setGenerateEssay] = useState(false);
  const [themeOption, setThemeOption] = useState("");
  const [value, setValue] = useState(false);

  const handleWriterEssayWithTheme = () => {
    setGenerateEssay(true);
  };

  setTimeout(() => {
    setShowOtions(true);
  }, 10000);

  return (
    <div>
      <Flex ml="-36px" minW="680px" flexDirection="column">
        <Flex minW="680px" mt="40px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock[3].text}
          </Text>
          <Text textAlign="justify" textStyle="Body">
            {mock[4].text}
          </Text>
          <Flex
            mt="16px"
            maxH="196px"
            minH="196px"
            flexDirection="column"
            maxW="644px"
          >
            {themeGneratedOptions.map((tgo) => {
              return (
                <Flex
                  bg="neutralLight.0"
                  onClick={() =>
                    generateEssay
                      ? null
                      : handleWriterEssayWithTheme() &&
                      setThemeOption(tgo.text) &&
                      setValue(true)
                  }
                  borderRadius="8px"
                  mb="8px"
                  cursor={generateEssay == true ? "default" : "pointer"}
                  minW="644px"
                  maxW="644px"
                  minH="60px"
                  maxH="60px"
                >
                  <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                    {tgo.text}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex
            ml="-36px"
            mt="65px"
            display={generateEssay == true ? "block" : "none"}
          >
            <GenerateEssayWithThemeClicked value={value} theme={themeOption} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

//GENERATE SPACE
export const mock = [
  {
    text: "Olá, _________! Eu sou a LIA, a inteligência artificial do aval.ia e irei te ajudar a evoluir suas habilidades de escrita. Sou capaz de lhe propor temas, gerar e corrigir redações, além de propor textos motivadores para temas diversos. O que você quer fazer?",
  },
  {
    text: "Ótimo! Você pensou em um tema específico ou quer que eu faça isso pra você? Eu posso sugerir temas e gerar textos motivadores para você ter uma base para escrever sua redação, da mesma forma como acontece no ENEM.",
  },
  {
    text: "Escreva o tema que você escolheu para a redação",
  },
  {
    text: "Então deixe comigo! Vou começar gerando o tema da redação.",
  },
  {
    text: "Pronto! Gerei algumas opções de tema. Escolha um deles para seguir:",
  },
  {
    text: "Pronto! O tema escolhido foi “tema”. Agora, vou gerar a redação e os textos motivadores. Por favor, aguarde um pouco...",
  },
  {
    text: "Tudo certo! Agora vou mandar você pra nosso espaço de redação para você estudar a redação que foi gerada.",
  },
  {
    text: "Ok! Faço isso pra você. Posso gerar temas de trẽs formas diferentes:",
    text1: " - Baseado em palavras-chave indicadas por você;",
    text2: " - A partir da minha base de dados de temas antigos do ENEM; ",
    text3:
      " - Ou ainda de forma aleatória, baseado em uma anáĺise de temas possíveis de aparecer, seguindo o padrão do INEP. Qual a forma que você deseja?",
  },
  {
    text: "Informe frases ou palavras-chave, separando-as por vírgulas.",
  },
  {
    text: "Com base nas suas instruções, gerei algumas opções de tema. Escolha um deles para seguir:",
  },
  {
    text: "Ok! Vou procurar um tema aqui pra você...",
    text1: "Pronto! O tema escolhido foi “tema”, do ENEM “ano”.",
    text2:
      "Agora estou gerando os textos motivadores e a redação para o tema “tema ”. Logo você poderá visualizar sua redação.",
  },
];

export const themeOptions = [
  {
    text: "A luta das mulheres por igualdade no mercado de trabalho",
  },
  {
    text: "Os desafios do equilíbrio entre vida pessoal e trabalho para as mulheres",
  },
  {
    text: "Mulheres: rompendo barreiras no mercado de trabalho",
  },
  {
    text: "Desmatamento em massa afeta a as espécies perto do mar",
  },
];

const EssayGenerate = function essayGenerateOption(props) {
  const { writerEssay, essayGenerate, onClick, ...rest } = props;

  return (
    <div>
      <Flex
        cursor={
          writerEssay == true
            ? "default"
            : "pointer" && essayGenerate == true
              ? "default"
              : "pointer"
        }
        onClick={onClick}
        mt="16px"
        justify="left"
        minW="314px"
        maxW="314px"
        borderRadius="8px"
        maxH="116px"
        minH="116px"
        bg="neutralLight.0"
        flexDirection="column"
      >
        <Image
          ml="16px"
          mt="16px"
          width="40px"
          height="40px"
          borderRadius="8px"
          src={essayGenerateOptionImage}
          alt="Option image"
        />
        <Spacer />
        <Text
          cursor={
            writerEssay == true
              ? "default"
              : "pointer" && essayGenerate == true
                ? "default"
                : "pointer"
          }
          ml="16px"
          mb="12px"
          textAlign="left"
          textStyle="Body1"
        >
          Gerar redação com IA
        </Text>
      </Flex>
      <Flex ml="-40px" display={essayGenerate == true ? "block" : "none"}>
        <GenerateEssayClicked />
      </Flex>
    </div>
  );
};

const UserThemeClicked = function userThemeClickedOption(props) {
  return (
    <div>
      <Flex minW="680px" flexDirection="column">
        <Flex minW="680px" mt="40px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock[2].text}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

const GenerateEssayWithThemeClicked =
  function generateEssayWithThemeClickedOption(props) {
    const { value, theme, ...rest } = props;

    const [formData, setFormData] = useState({
      name: "",
    });

    useEffect(() => {
      if (value) {
        const updatedFormData = { ...formData, name: theme };

        axios
          .post("http://localhost:5000" + "/subject/create", updatedFormData)
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            if (error.response) {
              console.log(error.response.data.message);
              setMsg(error.response.data.message);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
      }
    }, [value, theme]);

    return (
      <div>
        <Flex minW="680px" flexDirection="column">
          <Flex minW="680px">
            <Image
              my="auto"
              width="24px"
              height="24px"
              borderRadius="9999px"
              src={avatar}
              alt="profile image"
            />
            <Text ml="12px" textStyle="Body">
              Lia
            </Text>
          </Flex>
          <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
            <Text textAlign="justify" textStyle="Body">
              {mock[5].text}
            </Text>
            <Text textColor="purple.2" textAlign="justify" textStyle="Body">
              {mock[6].text}
            </Text>
          </Flex>
        </Flex>
      </div>
    );
  };

const AllGenerateClicked = function allGenerateClickedOption(props) {
  const { showOtionsAll, ...rest } = props;

  const themeGneratedOptions = themeOptions;

  const [showOtions, setShowOtions] = useState(false);
  const [generateEssay, setGenerateEssay] = useState(false);
  const [themeOption, setThemeOption] = useState("");
  const [value, setValue] = useState(false);

  const handleEssayGenerateWithTheme = () => {
    setGenerateEssay(true);
  };

  if (showOtionsAll == true) {
    setTimeout(() => {
      setShowOtions(true);
    }, 5000);
  }

  return (
    <div>
      <Flex minW="680px" flexDirection="column">
        <Flex minW="680px" mt="40px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock[3].text}
          </Text>
          <Text
            display={showOtions == true ? "block" : "none"}
            textAlign="justify"
            textStyle="Body"
          >
            {mock[4].text}
          </Text>
          <Flex
            display={showOtions == true ? "block" : "none"}
            mt="16px"
            maxH="196px"
            minH="196px"
            flexDirection="column"
            maxW="644px"
          >
            {themeGneratedOptions.map((tgo) => {
              return (
                <Flex
                  bg="neutralLight.0"
                  onClick={() => {
                    if (generateEssay === true) {
                      return null;
                    } else {
                      handleEssayGenerateWithTheme();
                      setThemeOption(tgo.text);
                      setValue(true);
                    }
                  }}
                  borderRadius="8px"
                  mb="8px"
                  cursor={generateEssay == true ? "default" : "pointer"}
                  minW="644px"
                  maxW="644px"
                  minH="60px"
                  maxH="60px"
                >
                  <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                    {tgo.text}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex
            ml="-36px"
            mt="65px"
            display={generateEssay == true ? "block" : "none"}
          >
            <GenerateEssayWithThemeClicked value={value} theme={themeOption} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

const UserConfigClickedWithKeyWords =
  function userConfigClickedWithKeyWordsInput(props) {
    const { theme, ...rest } = props;

    const [keyWords, setKeyWords] = useState(false);

    const handleClickKeyWords = () => {
      setKeyWords(true);
    };

    return (
      <div>
        <Flex mt="40px" minW="680px" flexDirection="column">
          <Flex minW="680px">
            <Image
              my="auto"
              width="24px"
              height="24px"
              borderRadius="9999px"
              src={avatar}
              alt="profile image"
            />
            <Text ml="12px" textStyle="Body">
              Lia
            </Text>
          </Flex>
          <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
            <Text textAlign="justify" textStyle="Body">
              {mock[9].text}
            </Text>
          </Flex>
        </Flex>
      </div>
    );
  };

const UserConfigClicked = function userConfigClickedOption(props) {
  const { theme, ...rest } = props;

  const [keyWords, setKeyWords] = useState(false);

  const handleClickKeyWords = () => {
    setKeyWords(true);
  };

  return (
    <div>
      <Flex mt="40px" minW="680px" flexDirection="column">
        <Flex minW="680px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock[8].text}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

const UserConfigClickedOlderThemes =
  function userConfigClickedOlderThemesOption(props) {
    const { theme, ...rest } = props;

    return (
      <div>
        <Flex mt="40px" minW="680px" flexDirection="column">
          <Flex minW="680px">
            <Image
              my="auto"
              width="24px"
              height="24px"
              borderRadius="9999px"
              src={avatar}
              alt="profile image"
            />
            <Text ml="12px" textStyle="Body">
              Lia
            </Text>
          </Flex>
          <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
            <Text textAlign="justify" textStyle="Body">
              {mock[10].text}
            </Text>
            <Text textAlign="justify" textStyle="Body">
              {mock[10].text1}
            </Text>
            <Text textColor="purple.2" textAlign="justify" textStyle="Body">
              {mock[10].text2}
            </Text>
          </Flex>
        </Flex>
      </div>
    );
  };

const GenerateToUserClicked = function generateToUserClickedOption(props) {
  const { theme, ...rest } = props;

  const [allGenerate, setAllGenerate] = useState(false);
  const [userConfig, setUserConfig] = useState(false);
  const [olderThemes, setOlderThemes] = useState(false);

  const handleClickAllGenerate = () => {
    setAllGenerate(true);
  };

  const handleClickUserConfig = () => {
    setUserConfig(true);
  };

  const handleClickOlderThemes = () => {
    setOlderThemes(true);
  };

  return (
    <div>
      <Flex mt="40px" minW="680px" flexDirection="column">
        <Flex minW="680px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock[7].text}
          </Text>
          <Text textAlign="justify" textStyle="Body">
            {mock[7].text1}
          </Text>
          <Text textAlign="justify" textStyle="Body">
            {mock[7].text2}
          </Text>
          <Text textAlign="justify" textStyle="Body">
            {mock[7].text3}
          </Text>
          <Flex
            mt="16px"
            maxH="196px"
            minH="196px"
            flexDirection="column"
            maxW="644px"
          >
            <Flex
              onClick={handleClickUserConfig}
              bg="neutralLight.0"
              borderRadius="8px"
              cursor="pointer"
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Vou lhe passar o que eu quero.
              </Text>
            </Flex>
            <Spacer />
            <Flex
              onClick={handleClickOlderThemes}
              bg="neutralLight.0"
              borderRadius="8px"
              cursor="pointer"
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Quero temas que já caíram em anos anteriores!
              </Text>
            </Flex>
            <Spacer />
            <Flex
              onClick={handleClickAllGenerate}
              bg="neutralLight.0"
              borderRadius="8px"
              cursor="pointer"
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Gere pra mim!
              </Text>
            </Flex>
          </Flex>
          <Flex ml="-36px" display={allGenerate == true ? "block" : "none"}>
            <AllGenerateClicked showOtionsAll={true} />
          </Flex>
          <Flex ml="-36px" display={userConfig == true ? "block" : "none"}>
            <UserConfigClicked />
          </Flex>
          <Flex ml="-36px" display={olderThemes == true ? "block" : "none"}>
            <UserConfigClickedOlderThemes />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

const GenerateEssayClicked = function generateEssayOpitionClicked(props) {
  const [userTheme, setUserTheme] = useState(false);
  const [allGenerate, setAllGenerate] = useState(false);
  const [generateToUser, setGenerateToUser] = useState(false);

  const handleClickAllGenerate = () => {
    setAllGenerate(true);
  };

  const handleClickUserTheme = () => {
    setUserTheme(true);
  };

  const handleClickGenerateToUser = () => {
    setGenerateToUser(true);
  };

  return (
    <div>
      <Flex ml="4px" minW="680px" flexDirection="column">
        <Flex minW="680px" mt="40px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text ml="12px" textStyle="Body1">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock[1].text}
          </Text>
          <Flex
            mt="16px"
            maxH="196px"
            minH="196px"
            flexDirection="column"
            maxW="644px"
          >
            <Flex
              bg="neutralLight.0"
              borderRadius="8px"
              onClick={
                userTheme == true ||
                  allGenerate == true ||
                  generateToUser == true
                  ? null
                  : handleClickAllGenerate
              }
              cursor={
                userTheme == true
                  ? "default"
                  : "pointer" && allGenerate == true
                    ? "default"
                    : "pointer" && generateToUser == true
                      ? "default"
                      : "pointer"
              }
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Gere tudo: tema, textos motivadores e redação
              </Text>
            </Flex>
            <Spacer />
            <Flex
              bg="neutralLight.0"
              borderRadius="8px"
              onClick={
                userTheme == true ||
                  allGenerate == true ||
                  generateToUser == true
                  ? null
                  : handleClickUserTheme
              }
              cursor={
                userTheme == true
                  ? "default"
                  : "pointer" && allGenerate == true
                    ? "default"
                    : "pointer" && generateToUser == true
                      ? "default"
                      : "pointer"
              }
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Tenho um tema
              </Text>
            </Flex>
            <Spacer />
            <Flex
              onClick={
                userTheme == true ||
                  allGenerate == true ||
                  generateToUser == true
                  ? null
                  : handleClickGenerateToUser
              }
              bg="neutralLight.0"
              borderRadius="8px"
              cursor={
                userTheme == true
                  ? "default"
                  : "pointer" && allGenerate == true
                    ? "default"
                    : "pointer" && generateToUser == true
                      ? "default"
                      : "pointer"
              }
              minW="644px"
              maxW="644px"
              minH="60px"
              maxH="60px"
            >
              <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                Gere pra mim!
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex display={allGenerate == true ? "block" : "none"}>
          <AllGenerateClicked showOtionsAll={true} />
        </Flex>
        <Flex display={userTheme == true ? "block" : "none"}>
          <UserThemeClicked />
        </Flex>
        <Flex display={generateToUser == true ? "block" : "none"}>
          <GenerateToUserClicked />
        </Flex>
      </Flex>
    </div>
  );
};

//PRINCIPAL COMPONENT
function textBoxComponent(props) {
  const [essayGenerate, setEssayGenerate] = useState(false);
  const [writerEssay, setWriterEssay] = useState(false);

  const [id, setId] = useState("2");
  const [type, setType] = useState(null);
  const [text, setText] = useState(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const verifiedId = steps.filter(item => item.id == id);

    if (verifiedId.length > 0) {
      const matchingItem = verifiedId[0];

      setType(matchingItem.response_type);
      setText(matchingItem.message);
      setOptions(matchingItem.options);
      console.log(type)
      console.log(text)
      console.log(options)
    }
  }, [id, steps, type, text, options]);

  const handleClickEssayGenerate = () => {
    setEssayGenerate(true);
    setWriterEssay(false);
  };

  const handleClickWriterEssay = () => {
    setEssayGenerate(false);
    setWriterEssay(true);
  };

  return (
    <div>
      <Flex maxW="680px" minW="680px" flexDirection="column">
        <Flex minW="680px" mt="40px">
          <Image
            my="auto"
            width="24px"
            height="24px"
            borderRadius="9999px"
            src={avatar}
            alt="profile image"
          />
          <Text textStyle="Body1" ml="12px">
            Lia
          </Text>
        </Flex>
        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
          <Text textAlign="justify" textStyle="Body">
            {mock[0].text}
          </Text>
          <Flex flexDirection="row" maxW="644px">
            <EssayGenerate
              essayGenerate={essayGenerate}
              writerEssay={writerEssay}
              onClick={
                writerEssay == true || essayGenerate == true
                  ? null
                  : handleClickEssayGenerate
              }
            />
            <Spacer />
            <WriterEssay
              onClick={
                writerEssay == true || essayGenerate == true
                  ? null
                  : handleClickWriterEssay
              }
              essayGenerate={essayGenerate}
              writerEssay={writerEssay}
            />
          </Flex>
          <InputGroup position="fixed" bottom="16px" w="644px" h="48px">
            <Input
              isEditing="false"
              readOnly={!false}
              cursor="not-allowed"
              bg="neutralLight.0"
              boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.16)"
              w="full"
              h="full"
              textStyle="Caption"
              textColor="neutralDark.4"
              _placeholder={{ color: "neutralLight.4" }}
              placeholder="Digite aqui..."
            />
            <InputRightElement minH="full">
              <IconButton
                _focus="none"
                readOnly={!false}
                cursor="not-allowed"
                bg="trasnparent"
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

export default textBoxComponent;
