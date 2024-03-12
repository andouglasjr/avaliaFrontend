import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import EssayData from "../../components/essayData/EssayData";
import Essay from "../../components/essay/Essay";
import StudentCompetence from "../../components/competences/StudentCompetence";
import ReviewerCompetence from "../../components/competences/ReviewerCompetence";
import axios from "axios";
import StickyBox from "react-sticky-box";

function EvaluationScreen(props) {
  const genericData = import.meta.env.VITE_GENERIC_GET_EVALUATIONSCREENDATA;
  const genericReview = import.meta.env.VITE_GENERIC_GET_EVALUATIONSCREEN_REVIEW;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (localStorage.getItem("profile") === "student") {
          response = await axios.get(genericData + state.id);
        } else {
          response = await axios.get(genericReview);
        }
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div style={{ marginLeft: "500px" }}>Carregando...</div>;
  if (error) return <div style={{ marginLeft: "500px" }}>Error: {error.message}</div>;

  return (
    <div>
      {localStorage.getItem("profile") === "student" ?
        (<Flex h="100%" width="100vw" bg="neutralLight.2">
          <Flex mt="32px" ml="287px" width="100vw" flexDirection="column">
            <Text
              textAlign="left"
              mb="40px"
              h="44px"
              w="65%"
              textStyle="h3"
              textColor="neutralDark.4"
            >
              Redação {data[0].essay_id}
            </Text>
            <Flex flexDirection="row">
              <Flex flexDirection="column">
                <EssayData
                  anulada="Não"
                  nota={data[0].grade_total}
                  tema={data[0].essay.subject.name}
                />
                <Essay essayData={data[0].essay.text} />
              </Flex>
              <div className="row">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <Flex ml="28px" h="126px">

                    <StudentCompetence data={data} />

                  </Flex>
                </StickyBox>
              </div>
            </Flex>
          </Flex>
        </Flex>
        ) : (
          <Flex h="100%" width="100vw" bg="neutralLight.2">
            <Flex mt="32px" width="100vw" flexDirection="column">
              <Text
                textAlign="left"
                mb="40px"
                h="44px"
                w="65%"
                textStyle="h3"
                textColor="neutralDark.4"
              >
                Redação {data.id}
              </Text>
              <Flex flexDirection="row">
                <Flex flexDirection="column">
                  <EssayData isAdmin
                    tema={data.subject.name}
                  />
                  <Essay isEditingValue={false} essayData={data.text} />
                </Flex>
                <div className="row">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    <Flex ml="28px" h="126px">
                      <ReviewerCompetence
                        subject={data.essay}
                        data={data} />
                    </Flex>
                  </StickyBox>
                </div>
              </Flex>
            </Flex>
          </Flex>
        )
      }
    </div>
  );
}

export default EvaluationScreen;
