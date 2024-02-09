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
import AccordionItemCompetence from "./AccordionItemCompetence";
import { PlusIcon, LessIcon } from "../icons/Icons";


function checkStatusBadgeColor(grade) {
  if (grade < 400) {
    return 'red'
  } else if (grade >= 400 && grade < 700) {
    return 'yellow'
  } else if (grade >= 700 && grade <= 1000) {
    return 'green'
  }
}

export default function StudentCompetence(props) {
  const [reviewers, setReviewers] = useState(props.data);

  return (
    <Flex boxShadow="0px 1px 6px 1px rgba(28, 31, 36, 0.26)"
      mr="47px"
      height="fit-content"
      borderTopLeftRadius="16px"
      borderTopRightRadius="16px"
    >
      <Accordion
        w="25vw"
        
        allowToggle
        borderBottomRightRadius="16px"
        borderBottomLeftRadius="16px"

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
            display={reviewer.reviewer.account.name == null ? "none" : "block"}
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
                      {reviewer.reviewer.account.name || null}
                    </Text>
                    <Spacer />
                    <StatusBadge
                      label={reviewer.grade_total || null}
                      margT="16px"
                      margR="10px"
                      variant={checkStatusBadgeColor(reviewer.grade_total)}
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
                  <AccordionItemCompetence
                    title="1 - Dominar linguagens (DL)"
                    grade={reviewer.grade_1}
                    description="O participante deve ser capaz de utilizar a língua
                    portuguesa formal de maneira correta e adequada na
                    modalidade escrita."
                    comment={reviewer.grade_1_opinion}
                  />
                  <AccordionItemCompetence
                    title="2 - Compreender fenômenos (CF)"
                    grade={reviewer.grade_2}
                    description="O participante deve ser capaz de compreender a proposta de redação e utilizar conhecimentos de diversas áreas para desenvolver o tema proposto, dentro das normas estruturais do texto dissertativo-argumentativo em prosa."
                    comment={reviewer.grade_2_opinion}
                  />
                  <AccordionItemCompetence
                    title="3 - Enfrentar situações-problema (SP)"
                    grade={reviewer.grade_3}
                    description="O participante deve ser capaz de selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos."
                    comment={reviewer.grade_3_opinion}
                  />
                  <AccordionItemCompetence
                    title="4 - Construir argumentação (CA)"
                    grade={reviewer.grade_4}
                    description="O participante deve ser capaz de demonstrar conhecimento dos recursos linguísticos necessários para construir uma argumentação eficaz."
                    comment={reviewer.grade_4_opinion}
                  />
                  <AccordionItemCompetence
                    title="5 - Elaborar propostas (EP)"
                    grade={reviewer.grade_5}
                    description=" O participante deve ser capaz de elaborar uma proposta de intervenção para o problema abordado, respeitando os direitos humanos."
                    comment={reviewer.grade_5_opinion}
                  />

                  
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
            <Spacer />
          </Flex>
        ))}
      </Accordion>
    </Flex>
  );
}
