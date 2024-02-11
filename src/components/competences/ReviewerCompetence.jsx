import React, { useEffect, useState } from "react";
import {
  HStack,
  Textarea,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  ButtonGroup,
  Button,
  Spacer,
  Flex,
} from '@chakra-ui/react'
import AccordionItemCompetenceReviewer from "./AccordionItemCompetenceReviewer";
import axios from "axios";


export default function ReviewerCompetence(props) {
  const [errorMsg, setErrorMsg] = React.useState("");
  const [dataReport, setDataReport] = React.useState({});
  const [newReport, setNewReport] = React.useState(false);
  let itemsCompetence =
    [{
      id: 'DL',
      value: {
        grade: '',
        comment: ''
      }
    }, {

      id: 'CF',
      value: {
        grade: '',
        comment: ''
      }
    }, {

      id: 'SP',
      value: {
        grade: '',
        comment: ''
      }
    }, {

      id: 'CA',
      value: {
        grade: '',
        comment: ''
      }
    }, {

      id: 'EP',
      value: {
        grade: '',
        comment: ''
      },
    }];

  let dataReportFilled = {
    "essay_id": props.data.id,
    "reviewer_id": parseInt(localStorage.getItem("profileId")),
    "grade_1": "",
    "grade_1_opinion": "",
    "grade_2": "",
    "grade_2_opinion": "",
    "grade_3": "",
    "grade_3_opinion": "",
    "grade_4": "",
    "grade_4_opinion": "",
    "grade_5": "",
    "grade_5_opinion": "",
  }


  const getItemCompetenceVelue = (value) => {
    const itemIndex = itemsCompetence.findIndex(item => item.id == value.valueId);
    if (itemIndex > -1) {
      itemsCompetence[itemIndex].value.grade = ""+parseInt(value.grade)*40;
      itemsCompetence[itemIndex].value.comment = value.comment;
      dataReportFilled[`grade_${itemIndex+1}`] = ""+parseInt(value.grade)*40;
      dataReportFilled[`grade_${itemIndex+1}_opinion`] = value.comment;
      
    }
  }

  const handleButtonSend = () => {
    setDataReport(dataReportFilled);
    console.log(dataReportFilled);
    axios.post("http://localhost:5000" + "/report/create", dataReportFilled).then(
      (response) => {
        setErrorMsg(response.data.message);
      }
    ).catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setErrorMsg(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  };

  //let Total = (DL + CF + SP + CA + EP) * 40;

  return (
    <Flex boxShadow="0px 1px 6px 1px rgba(28, 31, 36, 0.26)"
      mr="47px"
      height="fit-content"
      borderTopLeftRadius="16px"
      borderTopRightRadius="16px"
    >
      <Accordion allowToggle minW="416px" maxW="436px" boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.26)">
        <Flex
          borderTopRightRadius="16px"
          borderTopLeftRadius="16px"
          bg="neutralLight.2"
          minH="65px"
          align="center"
          display="flex"
          justifyContent="space-between"


        >
          <Box
            my="16.5px"
            pl="24px"
            textColor="neutralDark.4"
            textStyle="Subtitle1"

          >
            Competências
          </Box>
          <Button variant="secondary" onClick={handleButtonSend}>Próxima Redação</Button>

        </Flex>

        <AccordionItemCompetenceReviewer
          competence_title=" 1 - Dominar linguagens (DL)"
          description="O participante deve ser capaz de utilizar a língua portuguesa formal de maneira correta e adequada na modalidade escrita." onMessage={getItemCompetenceVelue} value_id='DL' />

        <AccordionItemCompetenceReviewer
          competence_title="  2 - Compreender fenômenos (CF)"
          description="  O participante deve ser capaz de compreender a proposta de redação e utilizar conhecimentos de diversas áreas para desenvolver o tema proposto, dentro das normas estruturais do texto dissertativo-argumentativo em prosa." onMessage={getItemCompetenceVelue} value_id='CF' />

        <AccordionItemCompetenceReviewer
          competence_title=" 3 - Enfrentar situações-problema (SP)"
          description="   O participante deve ser capaz de selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos." onMessage={getItemCompetenceVelue} value_id='SP' />

        <AccordionItemCompetenceReviewer
          competence_title="4 - Construir argumentação (CA)"
          description="O participante deve ser capaz de demonstrar conhecimento dos recursos linguísticos necessários para construir uma argumentação eficaz." onMessage={getItemCompetenceVelue} value_id='CA' />

        <AccordionItemCompetenceReviewer
          competence_title="5 - Elaborar propostas (EP)"
          description="O participante deve ser capaz de elaborar uma proposta de intervenção para o problema abordado, respeitando os direitos humanos." onMessage={getItemCompetenceVelue} value_id='EP' />
      </Accordion>
    </Flex>
  );
};