import {
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react"

import { GenerationEssayIcon } from "../../components/icons/Icons"
import { IconLoadingPage } from "../../components/icons/Icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

function EssayGenerationLoading() {
  const essayCorrect = import.meta.env.VITE_ESSAY_CORRECT;

  const location = useLocation();
  const state1 = location.state;
  const navigate = useNavigate();
  const neutralLight1 = useColorModeValue("neutralLight.1", "neutralLight.1")
  const neutralDark4 = useColorModeValue("neutralDark.4", "neutralDark.4")

  const [flagChangeText, setFlagChangeText] = useState(false);
  const [flagChangePage, setFlagChangePage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlagChangeText(true)
    }, 1600)
  }, []);

  if (state1.isWelcomeLoading) {
    setTimeout(() => {
      if (localStorage.getItem("profile") === "reviewer") {
        navigate("/reviewerDashboard")
      } else {
        navigate("/generationScreen")
      }
    }, 3200)
  }

  const studentEssayCorrect = (response) => {
    if (!state1.isWelcomeLoading) {
      const data = {
        id: response,
      }

      console.log(response)
      console.log(data)

      setTimeout(() => {
        navigate("/evaluationScreen", { state: data });
      }, 2400);
    }
  }

  useEffect(() => {
    if (!state1.isWelcomeLoading) {
      const fetchData = async () => {
        axios
          .get(essayCorrect + state1.id)
          .then((response) => {
            studentEssayCorrect(response.data.data.essay_id);
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data.message);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
            console.log(error.config);
          }, []);
      };
      fetchData();
    }
  }, [state1]);

  return (

    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      backgroundColor={neutralLight1}
    >
      {!state1.isWelcomeLoading || null ? (
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex
            marginBottom="22px"
          >
            < iframe src="https://lottie.host/?file=216aed1b-5cc8-4e90-afc3-f0a1a4628e8d/PnDvH3oTgX.json" alt="Mulher escrevendo um texto"></iframe>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          </Flex>
          <Text
            color={neutralDark4}
            fontSize="24px"
            fontWeight="600"
            fontFamily="Manrope"
          >
            Corrigindo redação...
          </Text>

        </Flex>
      ) : (
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex
            marginBottom="22px"
          >
            < IconLoadingPage width="336" height="200"></IconLoadingPage>

          </Flex>
          {!flagChangeText ?
            (<Text
              color={neutralDark4}
              fontSize="24px"
              fontWeight="600"
              fontFamily="Manrope"
            >
              Seja Bem-Vindo(a)!
            </Text>) : (
              <Text
                color={neutralDark4}
                fontSize="24px"
                fontWeight="600"
                fontFamily="Manrope"
              >
                Estamos redirecionando você...
              </Text>
            )
          }
        </Flex>)

      }
    </Flex>
  )
};

export default EssayGenerationLoading;