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
    Flex,
    Stack,
    Image,
} from "@chakra-ui/react";
import GPTLogo from "./GPTLogo.svg";
import StatusBadge from "../statusBadge/StatusBadge";
import { PlusIcon, LessIcon } from "../icons/Icons";

function checkStatusBadgeColor(grade) {
    if (grade < 400) {
        return 'red'
    } else if (grade >= 400 && grade < 700) {
        return 'yellow'
    } else if (grade >= 700 && grade <= 1000) {
        return 'green'
    }
}

export default function AccordionItemCompetence(props) {
    return (
        <AccordionItem bg="neutralLight.0">
            <h2>
                <AccordionButton _hover={{ borderColor: "transparent" }} _focus={{ outline: "none"}} minH="60px">
                    <Box
                        textColor="neutralDark.4"
                        textStyle="Body1"
                        as="span"
                        flex="1"
                        textAlign="left"
                    >
                        {props.title}
                    </Box>
                    <AccordionIcon color="neutralDark.0" boxSize="24px" />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Stack
                    mx="auto"
                    mb="10px"
                    mt="10px"
                    minH="24px"
                    direction="row"
                    minW="368px"
                >
                    <Text
                        ml="14px"
                        textStyle="Caption1"
                        textColor="neutralDark.4"
                    >
                        Nota: {props.grade}
                    </Text>
                    <Spacer />
                </Stack>
                <Box
                    textStyle="Caption"
                    ml="13px"
                    textColor="neutralDark.0"
                    marginRight="10px"
                    textAlign="left"

                >
                    <Text>
                        {props.description}
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
                            
                            minH="120px"
                        >
                            <Text
                                textAlign="left"
                                mt="7px"
                                ml="16px"
                                mr="48px"
                                textStyle="Caption"
                                textColor="neutralDark.4"
                            >
                                {props.comment}
                            </Text>
                            <Spacer />
                        </Stack>
                    </FormControl>
                </Box>
            </AccordionPanel>
        </AccordionItem>
    )


}