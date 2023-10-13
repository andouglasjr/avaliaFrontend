import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  Spacer,
  Flex,
  Stack,
  Image,
} from "@chakra-ui/react";
import GPTLogo from "./GPTLogo.svg";
import StatusBadge from "../statusBadge/StatusBadge";
import { PlusIcon, LessIcon } from "../icons/Icons";

function checkStatusBadgeColor(grade){
    if(grade < 200){
        return 'red'
    } else {
        return 'green'
    }
}

export default function StudentCompetence() {
  const [reviewers, setReviewers] = useState([]);

  useEffect(() => {
    fetch("", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const jsonResponse = {
          turnRevisor: [
            {
              nome: "ChatGPT",
              DL: 3,
              CF: 4,
              SP: 5,
              CA: 5,
              EP: 5,
              Total: "100",
              Comentario1: "Bastantes erros.",
              Comentario2:
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
              Comentario3: "Ótimo!",
              Comentario4: "Perfeito!",
              Comentario5: "Muito Bom!",
            },
            {
              nome: "Reika Dantas",
              DL: 3,
              CF: 4,
              SP: 5,
              CA: 5,
              EP: 5,
              Total: "800",
              Comentario1: "fkduajçflkjadçlkfja",
              Comentario2:
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
              Comentario3: "Ótimo!",
              Comentario4: "Perfeito!",
              Comentario5: "Muito Bom!",
            },
          ],
        };
        return jsonResponse;
      })
      .then((turnRevisor) => {
        const reviewers = turnRevisor.turnRevisor;
        setReviewers(reviewers);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  return (
    <Accordion
      mr="47px"
      maxH="125px"
      borderBottomRightRadius="16px"
      borderBottomLeftRadius="16px"
      allowToggle
      minW="416px"
      maxW="436px"
      boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.26)"
    >
      <Flex
        borderTopRightRadius="16px"
        borderTopLeftRadius="16px"
        bg="neutralLight.0"
        minH="65px"
        alignItems="left"
      >
        <Box
          my="16.5px"
          pl="24px"
          textColor="neutralDark.4"
          textStyle="Subtitle1"
        >
          Correções
        </Box>
        <Spacer />
      </Flex>
      {reviewers.map((reviewer) => (
        <Flex
          display={reviewer.nome == null ? "none" : "block"}
          minH="44px"
          bg="neutralLight.1"
          alignItems="left"
        >
          <AccordionItem bg="transparent">
            <h2>
              <AccordionButton bg="neutralLight.1" maxH="60px" _focus="null">
                <Stack
                  direction="row"
                  textColor="neutralDark.4"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  <Image
                    boxSize="20px"
                    alignSelf="center"
                    src={GPTLogo}
                    alt="GPTLogo"
                  />
                  <Text my="16px" textStyle="Body1">
                    {reviewer.nome || null}
                  </Text>
                  <Spacer />
                  <StatusBadge
                    label={reviewer.Total || null}
                    margT="16px"
                    margR="10px"
                    variant={checkStatusBadgeColor(reviewer.Total)}
                    textStyle="Caption1"
                  />
                </Stack>
                <AccordionIcon color="neutralDark.0" boxSize="24px" />
              </AccordionButton>
            </h2>
            <AccordionPanel bg="neutralLight.0" pb={4}>
              <Accordion
                allowToggle
                mb="-16px"
                mt="-10px"
                ml="-16px"
                mr="-16px"
                borderBottomRightRadius="16px"
                borderBottomLeftRadius="16px"
              >
                <AccordionItem bg="neutralLight.0">
                  <h2>
                    <AccordionButton minH="60px" _focus="null">
                      <Box
                        textColor="neutralDark.4"
                        textStyle="Body1"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        1 - Dominar linguagens (DL)
                      </Box>
                      <AccordionIcon color="neutralDark.0" boxSize="24px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack
                      mx="auto"
                      mb="10px"
                      mt="10px"
                      minH="24px"
                      direction="row"
                      minW="368px"
                    >
                      <Text
                        ml="14px"
                        textStyle="Caption1"
                        textColor="neutralDark.4"
                      >
                        Nota: {reviewer.DL}
                      </Text>
                      <Spacer />
                    </Stack>
                    <Box
                      textStyle="Caption"
                      ml="13px"
                      textColor="neutralDark.0"
                      maxW="400px"
                      textAlign="left"
                    >
                      <Text>
                        O participante deve ser capaz de utilizar a língua
                      </Text>
                      <Text>
                        portuguesa formal de maneira correta e adequada na
                      </Text>
                      <Text>modalidade escrita.</Text>
                    </Box>
                    <Box>
                      <FormControl isRequired mt="24px">
                        <Stack
                          direction="row"
                          mx="auto"
                          bg="transparent"
                          border="1px"
                          borderRadius="8px"
                          borderColor="neutralLight.4"
                          w="368px"
                          h="120px"
                        >
                          <Text
                            textAlign="left"
                            mt="7px"
                            ml="16px"
                            mr="48px"
                            textStyle="Body"
                            textColor="neutralDark.4"
                          >
                            {reviewer.Comentario1}
                          </Text>
                          <Spacer />
                        </Stack>
                      </FormControl>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bg="neutralLight.0">
                  <h2>
                    <AccordionButton minH="60px" _focus="null">
                      <Box
                        textColor="neutralDark.4"
                        textStyle="Body1"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        2 - Compreender fenômenos (CF)
                      </Box>
                      <AccordionIcon color="neutralDark.0" boxSize="24px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack
                      mx="auto"
                      mb="10px"
                      mt="10px"
                      minH="24px"
                      direction="row"
                      minW="368px"
                    >
                      <Text
                        ml="14px"
                        textStyle="Caption1"
                        textColor="neutralDark.4"
                      >
                        Nota: {reviewer.CF}
                      </Text>
                      <Spacer />
                    </Stack>
                    <Box
                      textStyle="Caption"
                      ml="13px"
                      textColor="neutralDark.0"
                      maxW="400px"
                      textAlign="left"
                    >
                      <Text>
                        O participante deve ser capaz de compreender a proposta
                      </Text>
                      <Text>
                        de redação e utilizar conhecimentos de diversas áreas
                      </Text>
                      <Text>
                        para desenvolver o tema proposto, dentro das normas
                      </Text>
                      <Text>
                        estruturais do texto dissertativo-argumentativo em
                        prosa.
                      </Text>
                    </Box>
                    <Box>
                      <FormControl isRequired mt="24px">
                        <Stack
                          direction="row"
                          mx="auto"
                          bg="transparent"
                          border="1px"
                          borderRadius="8px"
                          borderColor="neutralLight.4"
                          w="368px"
                          h="120px"
                        >
                          <Text
                            textAlign="left"
                            mt="7px"
                            ml="16px"
                            mr="48px"
                            textStyle="Body"
                            textColor="neutralDark.4"
                          >
                            {reviewer.Comentario2}
                          </Text>
                          <Spacer />
                        </Stack>
                      </FormControl>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bg="neutralLight.0">
                  <h2>
                    <AccordionButton minH="60px" _focus="null">
                      <Box
                        textColor="neutralDark.4"
                        textStyle="Body1"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        3 - Enfrentar situações-problema (SP)
                      </Box>
                      <AccordionIcon color="neutralDark.0" boxSize="24px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack
                      mx="auto"
                      mb="10px"
                      mt="10px"
                      minH="24px"
                      direction="row"
                      minW="368px"
                    >
                      <Text
                        ml="14px"
                        textStyle="Caption1"
                        textColor="neutralDark.4"
                      >
                        Nota: {reviewer.SP}
                      </Text>
                      <Spacer />
                    </Stack>
                    <Box
                      textStyle="Caption"
                      ml="13px"
                      textColor="neutralDark.0"
                      maxW="400px"
                      textAlign="left"
                    >
                      <Text>
                        O participante deve ser capaz de selecionar, relacionar,
                      </Text>
                      <Text>
                        organizar e interpretar informações, fatos, opiniões e
                      </Text>
                      <Text>argumentos.</Text>
                    </Box>
                    <Box>
                      <FormControl isRequired mt="24px">
                        <Stack
                          direction="row"
                          mx="auto"
                          bg="transparent"
                          border="1px"
                          borderRadius="8px"
                          borderColor="neutralLight.4"
                          w="368px"
                          h="120px"
                        >
                          <Text
                            textAlign="left"
                            mt="7px"
                            ml="16px"
                            mr="48px"
                            textStyle="Body"
                            textColor="neutralDark.4"
                          >
                            {reviewer.Comentario3}
                          </Text>
                          <Spacer />
                        </Stack>
                      </FormControl>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bg="neutralLight.0">
                  <h2>
                    <AccordionButton minH="60px" _focus="null">
                      <Box
                        textColor="neutralDark.4"
                        textStyle="Body1"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        4 - Construir argumentação (CA)
                      </Box>
                      <AccordionIcon color="neutralDark.0" boxSize="24px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack
                      mx="auto"
                      mb="10px"
                      mt="10px"
                      minH="24px"
                      direction="row"
                      minW="368px"
                    >
                      <Text
                        ml="14px"
                        textStyle="Caption1"
                        textColor="neutralDark.4"
                      >
                        Nota: {reviewer.CA}
                      </Text>
                      <Spacer />
                    </Stack>
                    <Box
                      textStyle="Caption"
                      ml="13px"
                      textColor="neutralDark.0"
                      maxW="400px"
                      textAlign="left"
                    >
                      <Text>O participante deve ser capaz de demonstrar</Text>
                      <Text>
                        conhecimento dos recursos linguísticos necessários para
                      </Text>
                      <Text>construir uma argumentação eficaz.</Text>
                    </Box>
                    <Box>
                      <FormControl isRequired mt="24px">
                        <Stack
                          direction="row"
                          mx="auto"
                          bg="transparent"
                          border="1px"
                          borderRadius="8px"
                          borderColor="neutralLight.4"
                          w="368px"
                          h="120px"
                        >
                          <Text
                            textAlign="left"
                            mt="7px"
                            ml="16px"
                            mr="48px"
                            textStyle="Body"
                            textColor="neutralDark.4"
                          >
                            {reviewer.Comentario4}
                          </Text>
                          <Spacer />
                        </Stack>
                      </FormControl>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bg="neutralLight.0">
                  <h2>
                    <AccordionButton minH="60px" _focus="null">
                      <Box
                        textColor="neutralDark.4"
                        textStyle="Body1"
                        as="span"
                        flex="1"
                        textAlign="left"
                      >
                        5 - Elaborar propostas (EP)
                      </Box>
                      <AccordionIcon color="neutralDark.0" boxSize="24px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    borderBottomRightRadius="16px"
                    borderBottomLeftRadius="16px"
                  >
                    <Stack
                      mx="auto"
                      mb="10px"
                      mt="10px"
                      minH="24px"
                      direction="row"
                      minW="368px"
                    >
                      <Text
                        ml="14px"
                        textStyle="Caption1"
                        textColor="neutralDark.4"
                      >
                        Nota: {reviewer.EP}
                      </Text>
                      <Spacer />
                    </Stack>
                    <Box
                      textStyle="Caption"
                      ml="13px"
                      textColor="neutralDark.0"
                      maxW="400px"
                      textAlign="left"
                    >
                      <Text>
                        O participante deve ser capaz de elaborar uma proposta
                      </Text>
                      <Text>
                        de intervenção para o problema abordado, respeitando os
                      </Text>
                      <Text>direitos humanos.</Text>
                    </Box>
                    <Box>
                      <FormControl isRequired mt="24px">
                        <Stack
                          direction="row"
                          mx="auto"
                          bg="transparent"
                          border="1px"
                          borderRadius="8px"
                          borderColor="neutralLight.4"
                          w="368px"
                          h="120px"
                        >
                          <Text
                            textAlign="left"
                            mt="7px"
                            ml="16px"
                            mr="48px"
                            textStyle="Body"
                            textColor="neutralDark.4"
                          >
                            {reviewer.Comentario5}
                          </Text>
                          <Spacer />
                        </Stack>
                      </FormControl>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
          <Spacer />
        </Flex>
      ))}
    </Accordion>
  );
}
