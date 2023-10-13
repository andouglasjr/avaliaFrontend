import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";
import EssayData from "../../components/essayData/EssayData";
import Essay from "../../components/essay/Essay";
import StudentCompetence from "../../components/competences/StudentCompetence";

function EvaluationScreen() {
  return (
    <div>
      <Sidebar />
      <Flex ml="240px" h="100%" w="calc(100vh + 100vh)" bg="neutralLight.1">
        <Flex mt="32px" ml="47" flexDirection="column">
          <Text
            textAlign="left"
            mb="32px"
            h="44px"
            w="1032px"
            textStyle="h3"
            textColor="neutralDark.4"
          >
            Redação 000001
          </Text>
          <Flex flexDirection="row">
            <Flex flexDirection="column">
              <EssayData
                anulada="Não"
                nota="500"
                redatores="Reika Dantas"
                tema="Guerra em Israel"
              />
              <Essay />
            </Flex>
            <Flex ml="28px" w="416px" h="126px">
              <StudentCompetence />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default EvaluationScreen;
