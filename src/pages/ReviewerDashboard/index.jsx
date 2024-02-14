import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Flex, Text, Radio, Button } from "@chakra-ui/react";


function ReviewerDashboard(props) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleStartCorrection = () => {
        navigate("/evaluationScreen");
    };




//if (isLoading) return <div style={{ marginLeft: "500px" }}>Carregando...</div>;
//if (error) return <div style={{ marginLeft: "500px" }}>Error: {error.message}</div>;


return (
    <Flex h="100vh" width="100vw" bg="neutralLight.2" >

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

                        <Text color={"neutralDark.0"} textAlign="left" textStyle="Caption">Olá, {localStorage.getItem("userName")}! Temos redações pendentes de correção. Clique no botão abaixo para iniciar.
                        </Text>
                        <Button variant="secondary" alignSelf="center" onClick={handleStartCorrection}>Inicar Correção</Button>


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

                        <Text color={"neutralDark.0"} textAlign="left" textStyle="Caption">Você já corrigiu
                        </Text>
                        <Text alignSelf="center" textStyle="h1">
                            43
                        </Text>
                        <Text alignSelf="center" textStyle="h4">
                            Redações
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

                        <Text color={"neutralDark.0"} textAlign="left" textStyle="Caption">Confira algumas dicas de correções
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
