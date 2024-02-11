import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import {
    Flex,
    Spacer,
    Text,
    Image,
    Input,
    IconButton,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { SendIcon } from "../../../components/icons/Icons";

import { atom, useRecoilState } from 'recoil';

import axios from "axios";

import { steps } from "../../../chatbot/conversation.json";

import avatar from "./images/Avatar.png";
import essayGenerateOptionImage from "./images/generateEssay.png";
import essayWriterOptionImage from "./images/writeEssay.png";

import LoadingAvalia from "./LoadingAvalia.gif";

export const idState = atom({
    key: 'idState',
    default: '1',
});

export const allChatState = atom({
    key: 'allChatState',
    default: [],
});

export const inputEditingState = atom({
    key: 'inputEditingState',
    default: false,
});

export const inputValueState = atom({
    key: 'inputValueState',
    default: "",
});

const ButtonInitial = function buttonInitialFunction(props) {
    const { trigger, text } = props;

    const [id, setID] = useRecoilState(idState);

    const [essayGenerateValue, setEssayGenerateValue] = useState(false);

    const [essayWriterValue, setEssayWriterValue] = useState(false);

    const EssayWriter = () => {
        setID(trigger[0]);
        setEssayGenerateValue(true);
    }

    const EssayGenerate = () => {
        setID(trigger[1]);
        setEssayWriterValue(true);
    }

    return (
        <div>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Flex flexDirection="row" align="center">
                    <Flex
                        cursor={(essayWriterValue && id !== "1") ? "not-allowed" : (essayWriterValue == false && id === "1") ? "pointer" : "default"}
                        onClick={id === "1" ? EssayWriter : null}
                        justify="left"
                        minW="314px"
                        maxW="314px"
                        borderRadius="8px"
                        style={{
                            border: "4px solid",
                            transition: "border 0.7s",
                            ...(essayWriterValue && id !== "1" ? { borderColor: "transparent" } : {}),
                            ...(essayWriterValue === false && id === "1" ? { borderColor: "transparent" } : {}),
                        }}
                        borderColor={(essayWriterValue && id !== "1") ? "transparent" : (essayWriterValue == false && id === "1") ? "transparent" : "purple.2"}
                        minH="116px"
                        bg="neutralLight.0"
                        flexDirection="column"
                    >
                        <Image
                            ml="16px"
                            mt="16px"
                            width="40px"
                            height="40px"
                            borderRadius="8px"
                            src={essayWriterOptionImage}
                            alt="Option image"
                        />
                        <Text
                            ml="16px"
                            mt="16px"
                            mb="12px"
                            minH="50px"
                            textAlign="left"
                            textStyle="Body1"
                            textColor={(essayWriterValue && id !== "1") ? "neutralLight.4" : "neutralDark.4"}
                        >
                            {text[0]}
                        </Text>
                    </Flex>
                    <Spacer />
                    <Flex
                        cursor={(essayGenerateValue && id !== "1") ? "not-allowed" : (essayGenerateValue == false && id === "1") ? "pointer" : "default"}
                        onClick={id === "1" ? EssayGenerate : null}
                        ml="16px"
                        justify="left"
                        minW="314px"
                        maxW="314px"
                        borderRadius="8px"
                        style={{
                            border: "4px solid",
                            transition: "border 0.7s",
                            ...(essayGenerateValue && id !== "1" ? { borderColor: "transparent" } : {}),
                            ...(essayGenerateValue === false && id === "1" ? { borderColor: "transparent" } : {}),
                        }}
                        borderColor={(essayGenerateValue && id !== "1") ? "transparent" : (essayGenerateValue == false && id === "1") ? "transparent" : "purple.2"}
                        minH="116px"
                        bg="neutralLight.0"
                        flexDirection="column"
                    >
                        <Image
                            ml="16px"
                            mt="16px"
                            width="40px"
                            height="40px"
                            borderRadius="8px"
                            src={essayGenerateOptionImage}
                            alt="Option image"
                        />
                        <Spacer />
                        <Text
                            ml="16px"
                            mt="16px"
                            mb="12px"
                            h="50px"
                            textAlign="left"
                            textStyle="Body1"
                            textColor={(essayGenerateValue && id !== "1") ? "neutralLight.4" : "neutralDark.4"}
                        >
                            {text[1]}
                        </Text>
                    </Flex>
                </Flex>
            </motion.div>
        </div>
    );
}

const Button = function buttonFunction(props) {
    const { trigger, text, options } = props;

    const [id, setID] = useRecoilState(idState);

    const [permission, setPermission] = useState(false);

    const [idVerifie, setIDVerifie] = useState(false);

    const [delay, setDelay] = useState(0);

    return (
        <div>
            {options.map((o, index) => {
                const delay = index * 0.2;
                const handleClicked = () => {
                    setID(o.trigger);
                    setPermission(true);
                    setIDVerifie(o.trigger);
                    console.log(index)
                }
                return (
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: delay,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <Flex
                            mb="8px"
                            bg="neutralLight.0"
                            borderRadius="8px"
                            style={{
                                border: "4px solid transparent", // Adicionei a borda inicial
                                transition: "border 0.7s",
                                ...(permission && (o.trigger !== idVerifie) ? { borderColor: "transparent" } : {}),
                                ...(permission === false && (o.trigger !== idVerifie) ? { borderColor: "transparent" } : {}),
                            }}
                            borderColor={permission ? ((o.trigger !== idVerifie) ? "transparent" : "purple.2") : "transparent"}
                            cursor={permission ? ((o.trigger !== idVerifie) ? "not-allowed" : "default") : "pointer"}
                            minW="644px"
                            maxW="644px"
                            minH="60px"
                            maxH="60px"
                            onClick={permission ? null : handleClicked}
                        >
                            <Text textColor={(permission && (o.trigger !== idVerifie)) ? "neutralLight.4" : "neutralDark.4"} ml="16px" my="auto" textAlign="left" textStyle="Body1">
                                {o.message}
                            </Text>
                        </Flex>
                    </motion.div>
                )
            })}
        </div>
    );
}

const InputComponent = function inputComponentFunction(props) {
    const { trigger } = props;

    const [id, setID] = useRecoilState(idState);

    const [inputEditing, setInputEditing] = useRecoilState(inputEditingState);

    const [inputValue, setInputValue] = useRecoilState(inputValueState);

    const name = "Henrique";

    if (inputValue == "" || inputValue == null) {
        setInputEditing(true);
    } else {
        setInputEditing(false);
    }

    return (
        <div>
            <Flex ml="-36px" display={(inputValue == "" || inputValue == null) ? "none" : "block"} maxW="680px" minW="680px" flexDirection="column">
                <Flex minW="680px" mt="40px">
                    <Image
                        my="auto"
                        width="24px"
                        height="24px"
                        borderRadius="9999px"
                        src={avatar}
                        alt="profile image"
                    />
                    <Text textStyle="Body1" ml="12px">
                        {name}
                    </Text>
                </Flex>
                <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
                    <Text textAlign="justify" textStyle="Body">
                        {inputValue}
                    </Text>
                </Flex>
            </Flex>
        </div >
    );
}

const Select = function selectFunction(props) {
    const { allChatId, text } = props;

    const [id, setID] = useRecoilState(idState);

    const [options, setOptions] = useState([]);

    React.useEffect(() => {
        if (passValue == true && (inputValue != "" && inputValue != " " && inputValue != null)) {
    
          axios
            .get("http://localhost:5000" + "/essay/generate/?subjects=" + inputValue)
            .then((response) => {
              setErrorMsg(response.data.message);
            })
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data.message);
                setErrorMsg(error.response.data.message);
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log("Error", error.message);
              }
              console.log(error.config);
            });
        }
      });

    return (
        <div>
            {options.map((o) => {
                const handleClicked = () => {
                    setID(o.trigger);
                }
                return (
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >
                        <Flex
                            mb="8px"
                            bg="neutralLight.0"
                            borderRadius="8px"
                            cursor="pointer"
                            minW="644px"
                            maxW="644px"
                            minH="60px"
                            maxH="60px"
                            onClick={handleClicked}
                        >
                            <Text ml="16px" my="auto" textAlign="left" textStyle="Body1">
                                {o.message}
                            </Text>
                        </Flex>
                    </motion.div>
                )
            })}
        </div>
    );
}

const End = function endFunction(props) {
    const { allChatId, text } = props;

    const [id, setID] = useRecoilState(idState);

    return (
        <div>
        </div>
    );
}

const Options = function optionsFunction(props) {
    const { trigger, id, text, type, options } = props;

    const optionsSet = () => {
        if (type === "buttonInitial") {
            return <ButtonInitial text={text} trigger={trigger} />;
        } else if (type === "button") {
            return <Button options={options} trigger={trigger} text={text} />;
        } else if (type === "input") {
            return <InputComponent trigger={trigger} />;
        } else if (type === "select") {
            return <Select />;
        } else if (type === "end") {
            return <End />;
        } else {
            return null;
        }
    }

    return (optionsSet());
}

function interactComponent(props) {

    const [id, setID] = useRecoilState(idState);
    //const [allChat, setAllChat] = useRecoilState(allChatState);

    const [allChat, setAllChat] = useState([]);

    const [inputEditing, setInputEditing] = useRecoilState(inputEditingState);

    const [inputValue, setInputValue] = useRecoilState(inputValueState);

    const [inputLocalValue, setInputLocalValue] = useState("");

    useEffect(() => {
        const verifiedId = steps.find(item => item.id === id);
        const idValue = verifiedId ? verifiedId.id : null;

        if (idValue) {
            setAllChat([...allChat, verifiedId]);
        }
    }, [id, steps]);

    const getInputValue = () => {
        if (inputLocalValue == "" || inputLocalValue == null) {
            null;
        } else {
            setInputValue(inputLocalValue)
            if (inputValue == inputLocalValue) {
                setInputLocalValue("")
            } else {
                setInputValue(inputLocalValue)
                setInputLocalValue("")
            }
        }
    }

    return (
        <div>
            {allChat.map((ac) => {
                const flow = ac.message.flow;
                return (
                    <Flex maxW="680px" minW="680px" flexDirection="column">
                        <Flex minW="680px" mt="40px">
                            <Image
                                my="auto"
                                width="24px"
                                height="24px"
                                borderRadius="9999px"
                                src={avatar}
                                alt="profile image"
                            />
                            <Text textStyle="Body1" ml="12px">
                                Lia
                            </Text>
                        </Flex>
                        <Flex ml="36px" maxW="644px" minW="644px" flexDirection="column">
                            <Text textAlign="left" textStyle="Body">
                                {ac.message.first}
                            </Text>
                            {flow.map((flow) => {
                                return (
                                    <Text textAlign="justify" textStyle="Body">
                                        {(flow == null || flow == "") ? null : flow}
                                    </Text>
                                )
                            })}
                            <Flex mt="12px" flexDirection="row" maxW="644px">
                                <Options
                                    options={ac.options}
                                    type={ac.response_type}
                                    trigger={ac.options.map(item => item.trigger)}
                                    text={ac.options.map(item => item.message)}
                                    id={id}
                                />
                            </Flex>
                            <InputGroup position="fixed" bottom="16px" w="644px" h="48px">
                                <Input
                                    readOnly={inputEditing == true ? ((inputValue == "") ? false : true) : true}
                                    cursor={inputEditing == true ? ((inputValue == "") ? "text" : "not-allowed") : "not-allowed"}
                                    bg="neutralLight.0"
                                    boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.16)"
                                    w="full"
                                    h="full"
                                    value={inputLocalValue}
                                    textStyle="Caption"
                                    textColor="neutralDark.4"
                                    _placeholder={{ color: "neutralLight.4" }}
                                    placeholder="Digite aqui..."
                                    onChange={(text) => setInputLocalValue(text.target.value)}
                                />
                                <InputRightElement minH="full">
                                    <IconButton
                                        readOnly={inputEditing == true ? ((inputValue == "") ? false : true) : true}
                                        cursor={inputEditing == true ? ((inputValue == "") ? "pointer" : "not-allowed") : "not-allowed"}
                                        onClick={getInputValue}
                                        bg="transparent"
                                        minH="full"
                                        my="auto"
                                        icon={<SendIcon boxSize="24px" color="neutralDark.0" />}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </Flex>
                    </Flex>
                )
            })}
        </div >
    );
}

export default interactComponent;