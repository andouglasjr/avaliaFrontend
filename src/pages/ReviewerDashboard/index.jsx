import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text, Radio } from "@chakra-ui/react";
import Button from "../../components/button/Button";
import axios from "axios";


function ReviewerDashboard(props) {
    const notReviewedEssay = import.meta.env.VITE_GENERIC_GET_EVALUATIONSCREEN_REVIEW;
    const countEssayReviewed = import.meta.env.VITE_REPORT_GET_COUNT;

    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [essaysReviewed, setEssaysReviewed] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleStartCorrection = () => {
        const dataValue = {
            id: data,
        }

        navigate("/evaluationScreen", { state: dataValue });
    };

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(notReviewedEssay)
                .then((response) => {
                    if (response.data != null || response.data != undefined) {
                        setData(response.data.data.id);
                        console.log(response)
                    } else {
                        setData(null)
                    }
                    setIsLoading(false);
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data.message);
                        setIsLoading(false);
                    } else if (error.request) {
                        console.log(error.request);
                        setIsLoading(false);
                    } else {
                        console.log("Error", error.message);
                        setIsLoading(false);
                    }
                    console.log(error.config);
                });
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(countEssayReviewed + localStorage.getItem("profileId"))
                .then((response) => {
                    setEssaysReviewed(response.data.data.essays_reviewed_id)
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data.message);
                    } else if (error.request) {
                    } else {
                        console.log("Error", error.message);
                    }
                    console.log(error.config);
                });
        };
        fetchData();
    }, []);

    return (
        <Flex ml="50px" h="100vh" width="100vw" bg="neutralLight.2" >
            <Flex mt="32px" ml="260px" width="100vw" flexDirection="column">
                <Text
                    textAlign="left"
                    mb="32px"
                    h="44px"
                    w="65%"
                    textStyle="h3"
                    textColor="neutralDark.4"
                >
                    Painel do Revisor
                </Text>
                <Flex flexDirection="row">
                    <Flex flexDirection="column">
                        <Flex
                            w="360px"
                            h="240px"
                            mb={"24px"}
                            justify="space-between"
                            flexDir={"column"}
                            alignItems={"flex-start"}
                            padding={"32px"}
                            gap={"16px"}
                            backgroundColor={"neutralLight.0"}
                            border={"1px"}
                            borderRadius={"16px"}
                            borderColor={"neutralLight.2"}
                            boxShadow={"0px 4px 6px 0px rgba(28, 31, 36, 0.26)"
                            }
                        >
                            {data != null ?
                                (
                                    <Text color={"neutralDark.0"} textAlign="left" textStyle="Caption">Olá, {localStorage.getItem("userName")}! Temos redações pendentes de correção. Clique no botão abaixo para iniciar.
                                    </Text>
                                ) : (
                                    <Text color={"neutralDark.0"} textAlign="left" textStyle="Caption">Olá, {localStorage.getItem("userName")}! Nem uma redação para corrigir no momento, volte mais tarde.
                                    </Text>
                                )
                            }
                            <Button isDisabled={data == null ? true : false} variant="secondary" label="Inicar Correção" alignSelf="center" onClick={handleStartCorrection} />
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column" ml="24px">
                        <Flex
                            w="360px"
                            mb={"24px"}
                            flexDir={"column"}
                            alignItems={"flex-start"}
                            padding={"32px"}
                            gap={"16px"}
                            backgroundColor={"neutralLight.0"}
                            border={"1px"}
                            borderRadius={"16px"}
                            borderColor={"neutralLight.2"}
                            boxShadow={"0px 4px 6px 0px rgba(28, 31, 36, 0.26)"}
                            h="240px"
                        >
                            <Text alignSelf="center" color={"neutralDark.0"} textAlign="left" textStyle="Caption">
                                {essaysReviewed != 0 ? (essaysReviewed == 1 ? `Você já corrigiu ${essaysReviewed} Redação` : `Você já corrigiu ${essaysReviewed} Redações`) : "Corrija sua primeira redação!"}
                            </Text>
                            <Text alignSelf="center" mt="-15px" textAlign="left" color={"neutralDark.0"} textStyle="Caption">
                                Redações corrigidas:
                            </Text>
                            <Text alignSelf="center" textStyle="h1">
                                {essaysReviewed}
                            </Text>
                            <Text alignSelf="center" textStyle="h4">
                                {essaysReviewed == 1 ? "Redação" : "Redações"}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDirection="row">
                    <Flex flexDirection="column">
                        <Flex
                            w="740px"
                            mb={"24px"}
                            justify="space-evenly"
                            flexDir={"column"}
                            alignItems={"flex-start"}
                            padding={"32px"}
                            gap={"16px"}
                            backgroundColor={"neutralLight.0"}
                            border={"1px"}
                            borderRadius={"16px"}
                            borderColor={"neutralLight.2"}
                            boxShadow={"0px 4px 6px 0px rgba(28, 31, 36, 0.26)"}
                            h="240px"
                        >
                            <Text color={"neutralDark.0"} textAlign="left" textStyle="Caption">
                                Confira algumas dicas de correções!
                            </Text>
                            <Text alignSelf="left" textStyle="h4">
                                Defina a pontuação de cada competência na escala de um a cinco. Nosso sistema converte para o formato do Enem.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ReviewerDashboard;
