import React, { useState, useEffect } from "react";
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

import axios from "axios";

import { steps } from "../../../chatbot/conversation.json";
import Essay from "../../../components/essay/Essay";

import avatar from "./images/Avatar.png";
import essayGenerateOptionImage from "./images/generateEssay.png";
import essayWriterOptionImage from "./images/writeEssay.png";

import LoadingAvalia from "./LoadingAvalia.gif";
import { useNavigate } from "react-router-dom";

function replaceSpaces(text, replaces) {
    if (typeof text !== 'string') {
        return text;
    }

    const replacedText = text.replace(/\{([^}]+)\}/g, (match, key) => replaces[key] || match);
    const boldedText = replacedText.replace(/"([^"]+)"/g, (_, captured) => `"<b>${captured}</b>"`);

    return <div dangerouslySetInnerHTML={{ __html: boldedText }} />;
}

const Loading = function loadingFunction(props) {
    const { text } = props;

    return (
        <div>
            <Flex ml="-501px" align="center" flexDirection="row">
                <Image
                    boxSize="24px"
                    src={LoadingAvalia}
                    alt="Option image"
                />
                <Text textColor="purple.2" textStyle="Body">
                    {text}
                </Text>
            </Flex>
        </div>
    );
}

const ErrorMessage = function errorMessageFunction(props) {
    const { text } = props;

    const baseText = "Error: "

    return (
        <div>
            <Flex ml="-501px" align="center" flexDirection="row">
                <Text textColor="red" textStyle="Body">
                    {baseText}
                </Text>
                <Text textColor="red" textStyle="Body">
                    {text}
                </Text>
            </Flex>
        </div>
    );
}

const ButtonInitial = function buttonInitialFunction(props) {
    const { trigger, text, setID, id, setWriter } = props;

    const [essayGenerateValue, setEssayGenerateValue] = useState(false);

    const [essayWriterValue, setEssayWriterValue] = useState(false);

    const EssayWriter = () => {
        setID(trigger[0]);
        setEssayGenerateValue(true);
    }

    const EssayGenerate = () => {
        setID(trigger[1]);
        setEssayWriterValue(true);
        setWriter(true)
    }

    const essayGenerateStyles = {
        cursor: essayGenerateValue && id !== "1" ? "not-allowed" : (essayGenerateValue === false && id === "1") ? "pointer" : "default",
        onClick: id === "1" ? EssayGenerate : null,
        ml: "16px",
        justify: "left",
        minW: "314px",
        maxW: "314px",
        borderRadius: "8px",
        border: "4px solid",
        transition: "border 0.7s",
        borderColor: essayGenerateValue && id !== "1" ? "transparent" : (essayGenerateValue === false && id === "1") ? "transparent" : "purple.2",
        minH: "116px",
        bg: "neutralLight.0",
        flexDirection: "column",
    };

    const essayWriterStyles = {
        cursor: essayWriterValue && id !== "1" ? "not-allowed" : (essayWriterValue === false && id === "1") ? "pointer" : "default",
        onClick: id === "1" ? EssayWriter : null,
        justify: "left",
        minW: "314px",
        maxW: "314px",
        borderRadius: "8px",
        border: "4px solid",
        transition: "border 0.7s",
        borderColor: essayWriterValue && id !== "1" ? "transparent" : (essayWriterValue === false && id === "1") ? "transparent" : "purple.2",
        minH: "116px",
        bg: "neutralLight.0",
        flexDirection: "column",
    };

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
                <Flex flexDirection="row" mt="16px" align="center">
                    <Flex
                        {...essayWriterStyles}
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
                        {...essayGenerateStyles}
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
    const { trigger, text, options, setID, id } = props;

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
                }

                const buttonStyles = {
                    mb: "8px",
                    bg: "neutralLight.0",
                    borderRadius: "8px",
                    border: "4px solid transparent",
                    transition: "border 0.7s",
                    borderColor: permission ? (o.trigger !== idVerifie ? "transparent" : "purple.2") : "transparent",
                    cursor: permission ? (o.trigger !== idVerifie ? "not-allowed" : "default") : "pointer",
                    minW: "644px",
                    maxW: "644px",
                    minH: "60px",
                    maxH: "60px",
                    onClick: permission ? null : handleClicked,
                };
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
                        key={index}
                    >
                        <Flex
                            {...buttonStyles}
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
    const { trigger, setID, id, inputEditing, setInputEditing, inputValue, setInputValue } = props;

    useEffect(() => {
        if (inputValue == "" || inputValue == null) {
            setInputEditing(true);
        } else {
            if (inputEditing !== false) {
                setInputEditing(false);
                setID(trigger[0]);
            }
        }
    }, [inputValue]);

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
                        {localStorage.getItem("userName")}
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

const EssayComponent = function essayComponentFunction(props) {
    const subjectCreate = import.meta.env.VITE_SUBJECT_CREATE;
    const subjectGet = import.meta.env.VITE_SUBJECT_GET
    const essayCreate = import.meta.env.VITE_ESSAY_CREATE;

    const { inputValue, setEssayId } = props;

    const [permission, setPermission] = useState(false);

    const [error, setError] = useState(false);

    const [subject_id, setSubject_id] = useState("");

    const navigate = useNavigate();

    const localInputValue = {
        name: inputValue,
    }

    const [formData, setFormData] = useState({
        text: "",
        subject_id: "",
    });

    useEffect(() => {
        axios
            .post(subjectCreate, localInputValue)
            .then((response) => {
                setSubject_id(response.data.data.id);
                console.log(response.data.data.id)
                console.log(response)
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data.message);
                    if (error.response.data.status == false) {
                        setError(true)
                    }
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            }, [localInputValue]);
    }, []);

    useEffect(() => {
        if (error == true) {
            axios
                .get(subjectGet + localInputValue.name)
                .then((response) => {
                    setSubject_id(response.data.data.id);
                    console.log(response.data.data.id)
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data.message);
                        if (error.response.data.status == false) {
                            setError(false)
                        }
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log("Error", error.message);
                    }
                    console.log(error.config);
                }, [localInputValue]);
        }
    }, [error]);

    const loading = (id) => {
        const data = {
            id: id,
            isWelcomeLoading: false,
        }

        console.log(data)

        navigate("/loading", { state: data });
    }

    useEffect(() => {
        if ((formData.text != "" && formData.subject_id != "")) {
            const essayCreateFunction = async (formData) => {
                axios
                    .post(essayCreate, formData)
                    .then((response) => {
                        loading(response.data.data.id);
                        console.log(response);
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
                    }, [formData]);
            }
            essayCreateFunction(formData);
        }
    }, [formData]);

    return (
        <div>
            <Essay mt="24px" subject_id={subject_id} setPermission={setPermission} permission={permission} setFormData={setFormData} isEditingValue="true" essayData="" />
        </div >
    );
}

const Select = function selectFunction(props) {
    const subjectGenerate = import.meta.env.VITE_SUBJECT_GENERATE;

    const { trigger, setFlowPermissionSelect, setID, id, inputValue, setInputValue, c, setC } = props;

    const [options, setOptions] = useState([]);

    const [inputValueVerified, setInputValueVerified] = useState("");

    const [permission, setPermission] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [quantity, setQuantity] = useState("4");

    if (inputValue === "" || inputValue == null) {
        null;
    } else {
        if (inputValueVerified === "") {
            setInputValueVerified("keyWords=" + inputValue + "&");
        } else {
            null;
        }
    }

    console.log("Select")

    useEffect(() => {
        const fetchData = async () => {
            if (options.length === 0 && c == 0) {
                setC(1)

                axios
                    .get(subjectGenerate + inputValueVerified + "quantity=" + quantity)
                    .then((response) => {
                        setOptions(response.data.data.subjects)
                        setIsLoading(false);
                        setFlowPermissionSelect(true)
                        console.log(response)
                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response.data.message);
                            setError(error);
                            setIsLoading(false);
                        } else if (error.request) {
                            console.log(error.request);
                            setError(error);
                            setIsLoading(false);
                        } else {
                            console.log("Error", error.message);
                            setError(error);
                            setIsLoading(false);
                        }
                        console.log(error.config);
                    });
            };

        }
        fetchData();
    }, [inputValueVerified]);

    if (isLoading) return <div style={{ marginLeft: "500px" }}><Loading text="Gerando opções de tema para você..." /></div>;
    if (error) return <div style={{ marginLeft: "500px" }}><ErrorMessage text={error.message} /></div>;

    return (
        <div>
            {options.map((o, index) => {
                const handleClicked = () => {
                    console.log("AQui");
                    setID(trigger[0]);
                    setInputValue(o);
                    setPermission(true);
                    console.log("AQui");
                }

                const boxStyles = {
                    mb: "8px",
                    bg: "neutralLight.0",
                    borderRadius: "8px",
                    border: "4px solid",
                    transition: "border 0.7s",
                    borderColor: permission ? (o === inputValue ? "purple.2" : "transparent") : "transparent",
                    cursor: permission ? (o === inputValue ? "default" : "not-allowed") : "pointer",
                    minW: "644px",
                    maxW: "644px",
                    minH: "60px",
                    maxH: "60px",
                    onClick: permission ? null : handleClicked,
                };

                return (
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        key={index}
                    >
                        <Flex
                            {...boxStyles}
                        >
                            <Text ml="16px" my="auto" textColor={permission ? (o === inputValue ? "neutralDark.4" : "neutralLight.4") : "neutralDark.4"} textAlign="left" textStyle="Body1">
                                {o}
                            </Text>
                        </Flex>
                    </motion.div>
                )
            })}
        </div>
    );
}

const End = function endFunction(props) {
    const essayGenerate = import.meta.env.VITE_ESSAY_GENERATE;

    const { inputValue, writer, setWriter, setFlowPermissionEnd } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [essayId, setEssayId] = useState("");

    const data = {
        id: essayId,
        isWelcomeLoading: false,
    }

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (writer == false) {
                axios
                    .get(essayGenerate + inputValue)
                    .then((response) => {
                        setIsLoading(false);
                        setEssayId(response.data.data.id);
                        setFlowPermissionEnd(true);
                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response.data.message);
                            setError(error);
                            setIsLoading(false);
                        } else if (error.request) {
                            console.log(error.request);
                            setError(error);
                            setIsLoading(false);
                        } else {
                            console.log("Error", error.message);
                            setError(error);
                            setIsLoading(false);
                        }
                        console.log(error.config);
                    });
            } else {
                setIsLoading(false);
                setWriter(true);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <div style={{ marginLeft: "500px" }}><Loading text="Carregando Redação..." /></div>;
    if (error) return <div style={{ marginLeft: "500px" }}><ErrorMessage text={error.message} /></div>;

    const evaluationScreen = () => {
        if (writer) {
            return <EssayComponent setEssayId={setEssayId} inputValue={inputValue} />;
        } else {
            setTimeout(() => {
                navigate("/loading", { state: data });
            }, 5 * 1000);
        }
    }

    return (evaluationScreen());
}

const Options = function optionsFunction(props) {
    const { writer, setWriter, c, setC, trigger, inputValue, setInputValue, setInputEditing, inputEditing, id, setID, text, type, options, setFlowPermissionSelect, setFlowPermissionEnd } = props;

    const optionsSet = () => {
        if (type === "buttonInitial") {
            return <ButtonInitial setWriter={setWriter} id={id} setID={setID} text={text} trigger={trigger} />;
        };
        if (type === "button") {
            return <Button id={id} setID={setID} options={options} trigger={trigger} text={text} />;
        };
        if (type === "input") {
            return <InputComponent inputValue={inputValue} setInputValue={setInputValue} setInputEditing={setInputEditing} inputEditing={inputEditing} id={id} setID={setID} trigger={trigger} />;
        };
        if (type === "select") {
            return <Select c={c} setC={setC} inputValue={inputValue} setInputValue={setInputValue} id={id} setID={setID} setFlowPermissionSelect={setFlowPermissionSelect} trigger={trigger} />;
        };
        if (type === "end") {
            return <End setFlowPermissionEnd={setFlowPermissionEnd} inputValue={inputValue} writer={writer} setWriter={setWriter} />;
        };
    }

    return (optionsSet());
}

const Flow = function flowFunction(props) {
    const { flow, flowEnd, flowPermissionSelect, flowPermissionEnd } = props;

    return (
        <div>
            <Text display={(flowPermissionSelect ? "block" : "none")} textAlign="justify" textStyle="Body">
                {(flow == null || flow == "") ? null : flow}
            </Text>
        </div>
    );
}

const InputLocalComponent = function inputLocalComponentFunction(props) {
    const { inputEditing, inputValue, inputLocalValue, setInputLocalValue, setInputValue } = props;

    const getInputValue = () => {
        if (inputLocalValue == "" || inputLocalValue == null) {
            null;
        } else {
            if (inputValue == inputLocalValue) {
                setInputLocalValue("");
            } else {
                setInputValue(inputLocalValue);
                setInputLocalValue("");
            }
        }
    }

    return (
        <InputGroup position="fixed" bottom="16px" w="644px" h="48px">
            <Input
                readOnly={!inputEditing}
                cursor={inputEditing ? ((inputValue == "") ? "text" : "not-allowed") : "not-allowed"}
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
                    readOnly={!inputEditing}
                    cursor={inputEditing ? ((inputValue == "") ? "pointer" : "not-allowed") : "not-allowed"}
                    onClick={getInputValue}
                    bg="transparent"
                    minH="full"
                    my="auto"
                    icon={<SendIcon boxSize="24px" color="neutralDark.0" />}
                />
            </InputRightElement>
        </InputGroup>
    );
}

function interactComponent() {

    const [id, setID] = useState("1");
    const [allChat, setAllChat] = useState([]);
    const [inputEditing, setInputEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [inputLocalValue, setInputLocalValue] = useState("");
    const [flowPermissionSelect, setFlowPermissionSelect] = useState(false);
    const [flowPermissionEnd, setFlowPermissionEnd] = useState(false);
    const [writer, setWriter] = useState(false);
    const [c, setC] = useState(false);

    const definitions = () => {
        const verifiedId = steps.find(item => item.id === id);

        if (verifiedId) {
            setAllChat([...allChat, verifiedId]);
        }
    }

    useEffect(() => {
        definitions();
    }, [id]);

    const replaceValues = { "user": localStorage.getItem("userName"), "tema": inputValue };

    return (
        <div>
            {allChat.map((ac, index) => {
                const first = ac.message.first;
                const flow = ac.message.flow;
                return (
                    <Flex key={index} maxW="680px" minW="680px" flexDirection="column">
                        <Flex key={index + "1"} minW="680px" mt="40px">
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
                        <Flex key={index + "2"} ml="36px" maxW="644px" minW="644px" flexDirection="column">
                            {first.map((first, index) => {
                                const finalMessage = replaceSpaces(first, replaceValues);
                                return (
                                    <Text key={index + "3"} textAlign="left" textStyle="Body">
                                        {finalMessage}
                                    </Text>
                                )
                            })}
                            {flow.map((flow, flowIndex) => {
                                return (
                                    <Flow flowPermissionSelect={flowPermissionSelect} flowPermissionEnd={flowPermissionEnd} flow={flow} key={index + "-" + flowIndex} />
                                )
                            })}
                            <Options
                                writer={writer}
                                setWriter={setWriter}
                                c={c}
                                setC={setC}
                                setInputValue={setInputValue}
                                inputValue={inputValue}
                                setInputEditing={setInputEditing}
                                inputEditing={inputEditing}
                                setFlowPermissionSelect={setFlowPermissionSelect}
                                setFlowPermissionEnd={setFlowPermissionEnd}
                                options={ac.options}
                                type={ac.response_type}
                                trigger={ac.options.map(item => item.trigger)}
                                text={ac.options.map(item => item.message)}
                                setID={setID}
                                id={id}
                            />
                            <InputLocalComponent inputLocalValue={inputLocalValue} setInputLocalValue={setInputLocalValue} setInputValue={setInputValue} inputValue={inputValue} inputEditing={inputEditing} />
                        </Flex>
                    </Flex>
                )
            }, [id])}
        </div >
    );
}

export default interactComponent;