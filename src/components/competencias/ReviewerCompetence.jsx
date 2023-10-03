import React, {useState} from "react";
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

export default function ReviewerCompetence() {
  const [DL, setDL] = useState(null);
  const [CF, setCF] = useState(null);
  const [SP, setSP] = useState(null);
  const [CA, setCA] = useState(null);
  const [EP, setEP] = useState(null);

  const handleButtonClickDL = (value) => {
    setDL(value);
  };

  const handleButtonClickCF = (value) => {
    setCF(value);
  };

  const handleButtonClickSP = (value) => {
    setSP(value);
  };

  const handleButtonClickCA = (value) => {
    setCA(value);
  };

  const handleButtonClickEP = (value) => {
    setEP(value);
  };

  let Total = (DL + CF + SP + CA + EP) * 40;

  return (
    <Accordion allowToggle minW="416px" maxW="436px" boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.26)">
    <Flex borderTopRightRadius="16px" borderTopLeftRadius="16px" minH="65px" alignItems="left">
      <Box my="16.5px" pl="24px" textColor="neutralDark.4" textStyle="Subtitle1">Competências</Box>
      <Spacer />
    </Flex>
    <AccordionItem bg="neutralLight.0">
      <h2>
        <AccordionButton _focus="null">
          <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
            1 - Dominar linguagens (DL)
          </Box>
          <AccordionIcon color="neutralDark.0" boxSize="24px"/>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box textStyle="Caption" textColor="neutralDark.0" maxW="400px" textAlign="left">
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
            <FormControl isRequired mt="24px" as='fieldset'>
              <ButtonGroup>
                <HStack spacing='8px'>
                  <Button minW="71px"
                  _focus="null"
                  variant={DL === 1 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickDL(1)}
                  value='1'
                  >
                    1
                  </Button>
                  <Button minW="71px" 
                  _focus="null"
                  variant={DL === 2 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickDL(2)}
                  value='2'
                  >
                    2
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={DL === 3 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickDL(3)}
                  value='3'
                  >
                    3
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={DL === 4 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickDL(4)}
                  value='4'
                  >
                    4
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={DL === 5 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickDL(5)}
                  value='5'
                  >
                    5
                  </Button>
                </HStack>
              </ButtonGroup>
            </FormControl>
            <FormControl isRequired mt="24px"> 
              <Textarea
                minH="120px"
                maxH="120px"
                textColor="neutralDark.3"
                placeholder="Escreva um  breve comentário."
                _placeholder={{ textStyle: 'Body' }}
                name="Description"
              />
            </FormControl>
        </Box>
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem bg="neutralLight.0">
      <h2>
        <AccordionButton _focus="null">
          <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
            2 - Compreender fenômenos (CF)
          </Box>
          <AccordionIcon color="neutralDark.0" boxSize="24px"/>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box textStyle="Caption" textColor="neutralDark.0" maxW="400px" textAlign="left">
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
            <FormControl isRequired mt="24px" as='fieldset'>
              <ButtonGroup>
                <HStack spacing='8px'>
                  <Button minW="71px"
                  _focus="null"
                  variant={CF === 1 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCF(1)}
                  value='1'
                  >
                    1
                  </Button>
                  <Button minW="71px" 
                  _focus="null"
                  variant={CF === 2 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCF(2)}
                  value='2'
                  >
                    2
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={CF === 3 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCF(3)}
                  value='3'
                  >
                    3
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={CF === 4 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCF(4)}
                  value='4'
                  >
                    4
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={CF === 5 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCF(5)}
                  value='5'
                  >
                    5
                  </Button>
                </HStack>
              </ButtonGroup>
            </FormControl>
            <FormControl isRequired mt="24px"> 
              <Textarea
                minH="120px"
                maxH="120px"
                textColor="neutralDark.3"
                placeholder="Escreva um  breve comentário."
                _placeholder={{ textStyle: 'Body' }}
                name="Description"
              />
            </FormControl>
        </Box>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bg="neutralLight.0">
      <h2>
        <AccordionButton _focus="null">
          <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
            3 - Enfrentar situações-problema (SP)
          </Box>
          <AccordionIcon color="neutralDark.0" boxSize="24px"/>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box textStyle="Caption" textColor="neutralDark.0" maxW="400px" textAlign="left">
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
            <FormControl isRequired mt="24px" as='fieldset'>
              <ButtonGroup>
                <HStack spacing='8px'>
                  <Button minW="71px"
                  _focus="null"
                  variant={SP === 1 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickSP(1)}
                  value='1'
                  >
                    1
                  </Button>
                  <Button minW="71px" 
                  _focus="null"
                  variant={SP === 2 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickSP(2)}
                  value='2'
                  >
                    2
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={SP === 3 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickSP(3)}
                  value='3'
                  >
                    3
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={SP === 4 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickSP(4)}
                  value='4'
                  >
                    4
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={SP === 5 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickSP(5)}
                  value='5'
                  >
                    5
                  </Button>
                </HStack>
              </ButtonGroup>
            </FormControl>
            <FormControl isRequired mt="24px"> 
              <Textarea
                minH="120px"
                maxH="120px"
                textColor="neutralDark.3"
                placeholder="Escreva um  breve comentário."
                _placeholder={{ textStyle: 'Body' }}
                name="Description"
              />
            </FormControl>
        </Box>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bg="neutralLight.0">
      <h2>
        <AccordionButton _focus="null">
          <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
            4 - Construir argumentação (CA)
          </Box>
          <AccordionIcon color="neutralDark.0" boxSize="24px"/>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box textStyle="Caption" textColor="neutralDark.0" maxW="400px" textAlign="left">
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
            <FormControl isRequired mt="24px" as='fieldset'>
              <ButtonGroup>
                <HStack spacing='8px'>
                  <Button minW="71px"
                  _focus="null"
                  variant={CA === 1 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCA(1)}
                  value='1'
                  >
                    1
                  </Button>
                  <Button minW="71px" 
                  _focus="null"
                  variant={CA === 2 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCA(2)}
                  value='2'
                  >
                    2
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={CA === 3 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCA(3)}
                  value='3'
                  >
                    3
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={CA === 4 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCA(4)}
                  value='4'
                  >
                    4
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={CA === 5 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickCA(5)}
                  value='5'
                  >
                    5
                  </Button>
                </HStack>
              </ButtonGroup>
            </FormControl>
            <FormControl isRequired mt="24px"> 
              <Textarea
                minH="120px"
                maxH="120px"
                textColor="neutralDark.3"
                placeholder="Escreva um  breve comentário."
                _placeholder={{ textStyle: 'Body' }}
                name="Description"
              />
            </FormControl>
        </Box>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem bg="neutralLight.0">
      <h2>
        <AccordionButton _focus="null">
          <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
            5 - Elaborar propostas (EP)
          </Box>
          <AccordionIcon color="neutralDark.0" boxSize="24px"/>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box textStyle="Caption" textColor="neutralDark.0" maxW="400px" textAlign="left">
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
            <FormControl isRequired mt="24px" as='fieldset'>
              <ButtonGroup>
                <HStack spacing='8px'>
                  <Button minW="71px"
                  _focus="null"
                  variant={EP === 1 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickEP(1)}
                  value='1'
                  >
                    1
                  </Button>
                  <Button minW="71px" 
                  _focus="null"
                  variant={EP === 2 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickEP(2)}
                  value='2'
                  >
                    2
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={EP === 3 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickEP(3)}
                  value='3'
                  >
                    3
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={EP === 4 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickEP(4)}
                  value='4'
                  >
                    4
                  </Button>
                  <Button minW="71px"
                  _focus="null"
                  variant={EP === 5 ? "primary" : "offWihtTextColor"}
                  onClick={() => handleButtonClickEP(5)}
                  value='5'
                  >
                    5
                  </Button>
                </HStack>
              </ButtonGroup>
            </FormControl>
            <FormControl isRequired mt="24px"> 
              <Textarea
                minH="120px"
                maxH="120px"
                textColor="neutralDark.3"
                placeholder="Escreva um  breve comentário."
                _placeholder={{ textStyle: 'Body' }}
                name="Description"
              />
            </FormControl>
        </Box>
      </AccordionPanel>
    </AccordionItem >
  </Accordion>
  );
};