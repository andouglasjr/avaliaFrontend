import { Text, Spacer, Stack } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";
import Essay from "../../components/essay/Essay";
import Competences from "../../components/competences/StudentCompetence";
import getEssay from "../../components/essay/getEssay"; 
import "../../App.css";
import EssayData from "../../components/essayData/EssayData";
import React, {useState, useEffect} from "react";

function Landing() {

    const [number, setNumber] = useState('-');

    

  return (
    <div>
      <Stack direction="column" alignContent="left" bg="neutralLight.1">
        <Text mt="32px" textAlign="Left" textStyle="h3">Landing Page</Text>
        
         
      </Stack>
    </div>
  );
}

export default Landing;
