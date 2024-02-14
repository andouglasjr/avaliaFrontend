import React, { useState, useEffect } from "react";
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
    ButtonGroup,
    HStack,
    Button,
    Textarea,
    Flex,
    Stack,
    Image,
} from "@chakra-ui/react";
import GPTLogo from "./GPTLogo.svg";
import StatusBadge from "../statusBadge/StatusBadge";
import { PlusIcon, LessIcon } from "../icons/Icons";

export default function AccordionItemCompetenceReviewer(props) {
    const [grade, setGrade] = useState("");
    const [comment, setComment] = useState("");
    const [valueId, setValueId] = useState(props.value_id);

    const handleButtonClickGrade = (value) => {
        setGrade(value);
    };

    const handleComment = (event) =>{
        setComment(event.target.value)
    };

    const returnReport = () =>{
        props.onMessage({valueId, grade, comment})
    }

    useEffect(()=> {
        returnReport();

    }, [grade, comment])

    return (
        <AccordionItem bg="neutralLight.0">
            <h2>
                <AccordionButton _focus="null">
                    <Box textColor="neutralDark.4" textStyle="Body1" as="span" flex='1' textAlign='left'>
                       {props.competence_title}
                    </Box>
                    <AccordionIcon color="neutralDark.0" boxSize="24px" />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Box textStyle="Caption" textColor="neutralDark.0" maxW="400px" textAlign="left">
                    <Text>
                        {props.description}
                    </Text>
                </Box>
                <Box>
                    <FormControl isRequired mt="24px" as='fieldset'>
                        <ButtonGroup>
                            <HStack spacing='1px'>
                                <Button minW="71px"
                                    _focus="null"
                                    variant={grade === 1 ? "primary" : "offWihtTextColor"}
                                    onClick={() => handleButtonClickGrade(1)}
                                    value='1'
                                >
                                    1
                                </Button>
                                <Button minW="71px"
                                    _focus="null"
                                    variant={grade === 2 ? "primary" : "offWihtTextColor"}
                                    onClick={() => handleButtonClickGrade(2)}
                                    value='2'
                                >
                                    2
                                </Button>
                                <Button minW="71px"
                                    _focus="null"
                                    variant={grade === 3 ? "primary" : "offWihtTextColor"}
                                    onClick={() => handleButtonClickGrade(3)}
                                    value='3'
                                >
                                    3
                                </Button>
                                <Button minW="71px"
                                    _focus="null"
                                    variant={grade === 4 ? "primary" : "offWihtTextColor"}
                                    onClick={() => handleButtonClickGrade(4)}
                                    value='4'
                                >
                                    4
                                </Button>
                                <Button minW="71px"
                                    _focus="null"
                                    variant={grade === 5 ? "primary" : "offWihtTextColor"}
                                    onClick={() => handleButtonClickGrade(5)}
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
                            value={comment}
                            onChange={handleComment}
                            
                        />
                    </FormControl>
                </Box>
            </AccordionPanel>
        </AccordionItem>
    )


}