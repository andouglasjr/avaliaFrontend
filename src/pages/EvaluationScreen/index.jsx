import { Text, Spacer, Stack } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";
import Essay from "../../components/essay/Essay";
import Competences from "../../components/competences/StudentCompetence";
import getEssay from "../../components/essay/getEssay"; 
import "../../App.css";
import EssayData from "../../components/essayData/EssayData";
import React, {useState, useEffect} from "react";

function EvaluationScreen() {

    const [number, setNumber] = useState('-');

    useEffect(() => {
        fetch('', 
        {
            method:'GET', 
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
              },
        })
        .then(response => {
           
            console.log(response.ok);
            const jsonResponse = {"turnCompetencesPage":[{"number":"000001"}]}
            return jsonResponse;
        })
        .then(turnCompetencesPage => {
            const competencesPage = turnCompetencesPage.turnCompetencesPage;
            const number = competencesPage[0].number;
            setNumber(number);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    }, []);

  return (
    <div>
      <Stack direction="column" alignContent="left" bg="neutralLight.1">
        <Text mt="32px" textAlign="Left" textStyle="h3">Redação { number }</Text>
        <Stack direction="row" mt="22px" bg="transparent">
          <Stack direction="column" bg="transparent">
            <EssayData />
            <Essay />
          </Stack>
          <Spacer />
          <Competences />
        </Stack>
      </Stack>
    </div>
  );
}

export default EvaluationScreen;
