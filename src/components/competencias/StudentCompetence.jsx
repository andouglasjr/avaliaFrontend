import React, {useState, useEffect} from "react";
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
} from "@chakra-ui/react"
import GPTLogo from "./GPTLogo.svg";
import { PlusIcon, LessIcon } from "../icons/Icons";

export default function StudentCompetence() {

    const [nome, setName] = useState('-');
    const [DL, setDL] = useState('-');
    const [CF, setCF] = useState('-');
    const [SP, setSP] = useState('-');
    const [CA, setCA] = useState('-');
    const [EP, setEP] = useState('-');
    const [Comentario1, setComentario1] = useState('-');
    const [Comentario2, setComentario2] = useState('-');
    const [Comentario3, setComentario3] = useState('-');
    const [Comentario4, setComentario4] = useState('-');
    const [Comentario5, setComentario5] = useState('-');

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
            const jsonResponse = {"turnRevisor":[{"nome":"ChatGPT","DL":3,"CF":4,"SP":5,"CA":5,"EP":5,"Comentario1":"Bastantes erros.","Comentario2":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.","Comentario3":"Ótimo!","Comentario4":"Perfeito!","Comentario5":"Muito Bom!"}]}
            return jsonResponse;
        })
        .then(turnRevisor => {
            const revisor = turnRevisor.turnRevisor;
            console.log(revisor[0])
            const nome = revisor[0].nome;
            const DL = revisor[0].DL;
            const CF = revisor[0].CF;
            const SP = revisor[0].SP;
            const CA = revisor[0].CA;
            const EP = revisor[0].EP;
            const Comentario1 = revisor[0].Comentario1;
            const Comentario2 = revisor[0].Comentario2;
            const Comentario3 = revisor[0].Comentario3;
            const Comentario4 = revisor[0].Comentario4;
            const Comentario5 = revisor[0].Comentario5;
            setName(nome);
            setDL(DL);
            setCF(CF);
            setSP(SP);
            setCA(CA);
            setEP(EP);
            setComentario1(Comentario1);
            setComentario2(Comentario2);
            setComentario3(Comentario3);
            setComentario4(Comentario4);
            setComentario5(Comentario5);
            console.log(nome);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    }, []);

    let Total = (DL + CF + SP + CA + EP) * 40;

  return (
    <Accordion borderBottomRightRadius="16px" borderBottomLeftRadius="16px" allowToggle minW="416px" maxW="436px" boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.26)">
    <Flex borderTopRightRadius="16px" borderTopLeftRadius="16px" minH="65px" alignItems="left">
      <Box my="16.5px" pl="24px" textColor="neutralDark.4" textStyle="Subtitle1">Correções</Box>
      <Spacer />
    </Flex>
    <Flex display={nome == null ? "none" : "block"} minH="44px" bg="neutralLight.1" alignItems="left">
        <AccordionItem bg="transparent">
            <h2>
            <AccordionButton minH="60px" _focus="null">
                <Stack direction="row" textColor="neutralDark.4" as="span" flex='1' textAlign='left'>
                    <Image boxSize="20px" alignSelf="center" src={ GPTLogo } alt="GPTLogo" />
                    <Text my="16px" textStyle="Body1">{ nome || null }</Text>
                    <Spacer />
                    <Text my="16px" textStyle="Caption1">{ Total || null }</Text>
                </Stack>
                <AccordionIcon color="neutralDark.0" boxSize="24px"/>
            </AccordionButton>
            </h2>
            <AccordionPanel bg="neutralLight.0" pb={4}>
                <Accordion allowToggle mb="-16px" mt="-10px" ml="-16px" mr="-16px" borderBottomRightRadius="16px" borderBottomLeftRadius="16px">
                    <AccordionItem bg="neutralLight.0">
                    <h2>
                        <AccordionButton minH="60px"  _focus="null">
                        <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
                            1 - Dominar linguagens (DL)
                        </Box>
                        <AccordionIcon color="neutralDark.0" boxSize="24px"/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Stack mx="auto" mb="10px" mt="10px" minH="24px" direction="row" minW="368px">
                            <Text ml="14px" textStyle="Caption1" textColor="neutralDark.4">Nota: {DL}</Text>
                            <Spacer />
                        </Stack>
                        <Box textStyle="Caption" ml="13px" textColor="neutralDark.0" maxW="400px" textAlign="left">
                        <Text>
                        O participante deve ser capaz de utilizar a língua
                        </Text>
                        <Text>
                        portuguesa formal de maneira correta e adequada na
                        </Text>
                        <Text>
                        modalidade escrita.
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
                                    <Text textAlign="left" mt="7px" ml="16px" mr="48px" textStyle="Body" textColor="neutralDark.4">{ Comentario1 }</Text>
                                    <Spacer />
                                </Stack>
                            </FormControl>
                        </Box>
                    </AccordionPanel>
                    </AccordionItem>
                
                    <AccordionItem bg="neutralLight.0">
                    <h2>
                        <AccordionButton minH="60px"  _focus="null">
                        <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
                            2 - Compreender fenômenos (CF)
                        </Box>
                        <AccordionIcon color="neutralDark.0" boxSize="24px"/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Stack mx="auto" mb="10px" mt="10px" minH="24px" direction="row" minW="368px">
                            <Text ml="14px" textStyle="Caption1" textColor="neutralDark.4">Nota: {CF}</Text>
                            <Spacer />
                        </Stack>
                        <Box textStyle="Caption" ml="13px" textColor="neutralDark.0" maxW="400px" textAlign="left">
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
                            estruturais do texto dissertativo-argumentativo em prosa.
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
                                    <Text textAlign="left" mt="7px" ml="16px" mr="48px" textStyle="Body" textColor="neutralDark.4">{ Comentario2 }</Text>
                                    <Spacer />
                                </Stack>
                            </FormControl>
                        </Box>
                    </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg="neutralLight.0">
                    <h2>
                        <AccordionButton minH="60px"  _focus="null">
                        <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
                            3 - Enfrentar situações-problema (SP)
                        </Box>
                        <AccordionIcon color="neutralDark.0" boxSize="24px"/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Stack mx="auto" mb="10px" mt="10px" minH="24px" direction="row" minW="368px">
                            <Text ml="14px" textStyle="Caption1" textColor="neutralDark.4">Nota: {SP}</Text>
                            <Spacer />
                        </Stack>
                        <Box textStyle="Caption" ml="13px" textColor="neutralDark.0" maxW="400px" textAlign="left">
                        <Text>
                            O participante deve ser capaz de selecionar, relacionar,
                        </Text>
                        <Text>
                            organizar e interpretar informações, fatos, opiniões e
                        </Text>
                        <Text>
                            argumentos.
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
                                    <Text textAlign="left" mt="7px" ml="16px" mr="48px" textStyle="Body" textColor="neutralDark.4">{ Comentario3 }</Text>
                                    <Spacer />
                                </Stack>
                            </FormControl>
                        </Box>
                    </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg="neutralLight.0">
                    <h2>
                        <AccordionButton minH="60px"  _focus="null">
                        <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
                            4 - Construir argumentação (CA)
                        </Box>
                        <AccordionIcon color="neutralDark.0" boxSize="24px"/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Stack mx="auto" mb="10px" mt="10px" minH="24px" direction="row" minW="368px">
                            <Text ml="14px" textStyle="Caption1" textColor="neutralDark.4">Nota: {CA}</Text>
                            <Spacer />
                        </Stack>
                        <Box textStyle="Caption" ml="13px" textColor="neutralDark.0" maxW="400px" textAlign="left">
                        <Text>
                            O participante deve ser capaz de demonstrar
                        </Text>
                        <Text>
                            conhecimento dos recursos linguísticos necessários para
                        </Text>
                        <Text>
                            construir uma argumentação eficaz.
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
                                    <Text textAlign="left" mt="7px" ml="16px" mr="48px" textStyle="Body" textColor="neutralDark.4">{ Comentario4 }</Text>
                                    <Spacer />
                                </Stack>
                            </FormControl>
                        </Box>
                    </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg="neutralLight.0">
                    <h2>
                        <AccordionButton minH="60px"  _focus="null">
                        <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
                            5 - Elaborar propostas (EP)
                        </Box>
                        <AccordionIcon color="neutralDark.0" boxSize="24px"/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Stack mx="auto" mb="10px" mt="10px" minH="24px" direction="row" minW="368px">
                            <Text ml="14px" textStyle="Caption1" textColor="neutralDark.4">Nota: {EP}</Text>
                            <Spacer />
                        </Stack>
                        <Box textStyle="Caption" ml="13px" textColor="neutralDark.0" maxW="400px" textAlign="left">
                        <Text>
                            O participante deve ser capaz de elaborar uma proposta
                        </Text>
                        <Text>
                            de intervenção para o problema abordado, respeitando os
                        </Text>
                        <Text>
                            direitos humanos.
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
                                    <Text textAlign="left" mt="7px" ml="16px" mr="48px" textStyle="Body" textColor="neutralDark.4">{ Comentario5 }</Text>
                                    <Spacer />
                                </Stack>
                            </FormControl>
                        </Box>
                    </AccordionPanel>
                    </AccordionItem >
                </Accordion>
            </AccordionPanel>
        </AccordionItem>
        <Spacer />
    </Flex>
  </Accordion>
  );
};