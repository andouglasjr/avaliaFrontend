import { Flex, Text, Spacer, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

//Icons Imports
import { PencilIcon, CorretIcon } from '../../icons/Icons';

function sidebarButtons(props) {
    const { label, my, extra, mx, mb, mt, icon, w, h, ml, ...rest } = props;
    const [pathFinal, setPathFinal] = useState('-');
    const [buttonIconEdit, setButtonIconEdit] = useState(false);
    const [buttonNewText, setButtonNewText] = useState(false);

    const { originalTitle1 } = "A ciência é a luz que ilumina as trevas da ignorância";
    const { originalTitle2 } = "A persistência da violência contra a mulher na sociedade brasileira";
    const { originalTitle3 } = "O estigma associado às doenças mentais na sociedade brasileira";
    const { originalTitle4 } = "Democratização do acesso ao cinema no Brasil";

    const navigate = useNavigate();

    useEffect(() => {
        setPathFinal(location.pathname);
      }, [location.pathname]);

    const handleClickTheme = () => {
        navigate("/login");
    };

    const handleClickRename = () => {
        setButtonIconEdit(true)
    };

    const handleInputChange = (event) => {
        setButtonNewText(event.target.value);
        console.log(buttonNewText);
    };

    const handleClickConfirm = () => {
        setButtonIconEdit(false)
        
    };

    return (
        <Flex borderRadius="8px" w="216px" h="40px" mx={mx} mt={mt} flexDirection="column">
            <Flex flexDirection="row">
                <Flex 
                bg="neutralLight.0" 
                _hover={{ bg: "neutralLight.1", }} 
                mb="4px" cursor="pointer" 
                onClick={ handleClickTheme } 
                borderBottomLeftRadius="8px" 
                borderTopLeftRadius="8px" 
                borderTopRightRadius={pathFinal == "/evaluationScreenn" ? "0px" : "8px"} 
                borderBottomRightRadius={pathFinal == "/evaluationScreenn" ? "0px" : "8px"} 
                maxW={pathFinal == "/evaluationScreenn" ? "182px" : "216px"} 
                h="40px" 
                mx={mx} 
                mt={mt}
                >
                    {buttonIconEdit == true && pathFinal == "/evaluationScreenn" ? (
                        <Input my="auto" isTruncated textColor="neutralDark.4" textStyle="Caption1" ml="10px"></Input>
                    ) : (
                        <Text my="auto" isTruncated textColor="neutralDark.4" textStyle="Caption1" ml="10px">A ciência é a luz que ilumina as trevas da ignorância</Text>
                    )}
                </Flex>
                <Spacer />
                <Flex bg="neutralLight.0" _hover={{ bg: "neutralLight.1", }} borderBottomRightRadius="8px" borderTopRightRadius="8px" w="34px" h="40px" mx={mx} mt={mt}>
                    {buttonIconEdit == true && pathFinal == "/evaluationScreen" ? ( 
                        <CorretIcon cursor="pointer" onClick={ handleClickConfirm } display={pathFinal == "/evaluationScreenn" ? "block" : "none"} my="auto" mx="auto" boxSize="16px" color="neutralDark.0" /> 
                    ) : ( 
                        <PencilIcon cursor="pointer" onClick={ handleClickRename } display={pathFinal == "/evaluationScreenn" ? "block" : "none"} my="auto" mx="auto" boxSize="16px" color="neutralDark.0" /> 
                    )}
                </Flex>
            </Flex>
            {" "}
            <Flex flexDirection="row">
                <Flex 
                bg="neutralLight.0" 
                _hover={{ bg: "neutralLight.1", }} 
                mb="4px" 
                cursor="pointer" 
                onClick={ buttonIconEdit == true && pathFinal == "/evaluationScreen" ? null : handleClickTheme} 
                borderBottomLeftRadius="8px" 
                borderTopLeftRadius="8px" 
                borderTopRightRadius={pathFinal == "/evaluationScreen" ? "0px" : "8px"} 
                borderBottomRightRadius={pathFinal == "/evaluationScreen" ? "0px" : "8px"} 
                maxW={pathFinal == "/evaluationScreen" ? "182px" : "216px"} 
                h="40px" 
                mx={mx} 
                mt={mt}
                >
                    {buttonIconEdit == true && pathFinal == "/evaluationScreen" ? (
                        <Input my="auto" onChange={ handleInputChange } label={ buttonNewText } isTruncated textColor="neutralDark.4" textStyle="Caption1" ml="10px"></Input>
                    ) : (
                        <Text my="auto" isTruncated textColor="neutralDark.4" textStyle="Caption1" ml="10px">A persistência da violência contra a mulher na sociedade brasileira</Text>                    )}
                </Flex>
                <Spacer />
                <Flex bg="neutralLight.0" _hover={{ bg: "neutralLight.1", }} borderBottomRightRadius="8px" borderTopRightRadius="8px" w="34px" h="40px" mx={mx} mt={mt}>
                    {buttonIconEdit == true && pathFinal == "/evaluationScreen" ? ( 
                        <CorretIcon cursor="pointer" onClick={ handleClickConfirm } display={pathFinal == "/evaluationScreen" ? "block" : "none"} my="auto" mx="auto" boxSize="16px" color="neutralDark.0" /> 
                    ) : ( 
                        <PencilIcon cursor="pointer" onClick={ handleClickRename } display={pathFinal == "/evaluationScreen" ? "block" : "none"} my="auto" mx="auto" boxSize="16px" color="neutralDark.0" /> 
                    )}
                </Flex>
            </Flex>
            {" "}
            <Flex flexDirection="row">
                <Flex 
                bg="neutralLight.0" 
                _hover={{ bg: "neutralLight.1", }} 
                mb="4px" 
                cursor="pointer" 
                onClick={ handleClickTheme } 
                borderBottomLeftRadius="8px" 
                borderTopLeftRadius="8px" 
                borderTopRightRadius={pathFinal == "/evaluationScreenn" ? "0px" : "8px"} 
                borderBottomRightRadius={pathFinal == "/evaluationScreenn" ? "0px" : "8px"} 
                maxW={pathFinal == "/evaluationScreenn" ? "182px" : "216px"} 
                h="40px" 
                mx={mx} 
                mt={mt}
                >
                    <Text my="auto" isTruncated textColor="neutralDark.4" textStyle="Caption1" ml="10px">O estigma associado às doenças mentais na sociedade brasileira</Text>
                </Flex>
                <Spacer />
                <Flex bg="neutralLight.0" _hover={{ bg: "neutralLight.1", }} borderBottomRightRadius="8px" borderTopRightRadius="8px" w="34px" h="40px" mx={mx} mt={mt}>
                    <PencilIcon cursor="pointer" onClick={ handleClickRename } display={pathFinal == "/evaluationScreenn" ? "block" : "none"} my="auto" mx="auto" boxSize="16px" color="neutralDark.0" />
                </Flex>
            </Flex>
            {" "}
            <Flex flexDirection="row">
                <Flex 
                bg="neutralLight.0" 
                _hover={{ bg: "neutralLight.1", }} 
                mb="4px" 
                cursor="pointer" 
                onClick={ handleClickTheme } 
                borderBottomLeftRadius="8px" 
                borderTopLeftRadius="8px" 
                borderTopRightRadius={pathFinal == "/evaluationScreenn" ? "0px" : "8px"} 
                borderBottomRightRadius={pathFinal == "/evaluationScreenn" ? "0px" : "8px"} 
                maxW={pathFinal == "/evaluationScreenn" ? "182px" : "216px"} 
                h="40px" 
                mx={mx} 
                mt={mt}
                >
                    <Text my="auto" isTruncated textColor="neutralDark.4" textStyle="Caption1" ml="10px">Democratização do acesso ao cinema no Brasil</Text>
                </Flex>
                <Spacer />
                <Flex bg="neutralLight.0" _hover={{ bg: "neutralLight.1", }} borderBottomRightRadius="8px" borderTopRightRadius="8px" w="34px" h="40px" mx={mx} mt={mt}>
                    <PencilIcon cursor="pointer" onClick={ handleClickRename } display={pathFinal == "/evaluationScreenn" ? "block" : "none"} my="auto" mx="auto" boxSize="16px" color="neutralDark.0" />
                </Flex>
            </Flex>
            {" "}
        </Flex>
    )
}

export default sidebarButtons;