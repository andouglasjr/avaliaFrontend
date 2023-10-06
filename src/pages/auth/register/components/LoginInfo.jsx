import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { mode } from "@chakra-ui/theme-tools";


const LoginInfo = ({ page, setPage, formData, setFormData, firstClick, setFirstClick }) => {

  const [verifyPassword, setVerifyPassword] = useState({
    pass: "",
    verifPass: ""
  })
  
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const passwordValidations = require("./validations/passwordValidations")
  
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  
  const passwordClicked = () =>{setFirstClick({...firstClick, password: true})}
  const confirmPasswordClicked = () =>{setFirstClick({...firstClick, confirmPassword: true})}


  return (
    <motion.div animate={{ x: 100 }} transition={{ delay: 0 }}>
      <Flex flexDirection="column" p="16px">
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Login
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          ></Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <FormControl>
            <Flex flexDirection="column" ml="4px">
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                color={textColor}
                mb="8px"
              >
                Senha<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  id="password"
                  isRequired={true}
                  value={verifyPassword.pass}
                  variant={passwordValidations.validatePassword(verifyPassword.pass, firstClick.password)[0]}
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  minLength={"8"}
                  type={show ? "text" : "password"}
                  onBlur={passwordClicked}
                  onChange={(e) => {
                    setVerifyPassword({...verifyPassword, pass: e.target.value})
                  }}
                />
                
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {passwordValidations.validateEqualPasswords(verifyPassword.pass, verifyPassword.verifPass, firstClick.confirmPassword)[1] ? "Senhas não são iguais" : ""}
              <br />
              {passwordValidations.validatePassword(verifyPassword.pass, firstClick.password)[1] ? "Insira uma senha válida" : ""}
            </Flex>

            <Flex flexDirection="column" ml="4px">
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                color={textColor}
                mb="8px"
              >
                Confirme sua Senha<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  id="confirmPassowrd"
                  isRequired={true}
                  value={verifyPassword.verifPass}
                  variant={passwordValidations.validatePassword(verifyPassword.verifPass,firstClick.confirmPassword)[0]}
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  minLength={"8"}
                  type={show ? "text" : "password"}
                  onBlur={confirmPasswordClicked}
                  onChange={(e) => {
                    setVerifyPassword({...verifyPassword, verifPass: e.target.value})
                  }}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {passwordValidations.validateEqualPasswords(verifyPassword.pass, verifyPassword.verifPass, firstClick.confirmPassword)[1] ? "Senhas não são iguais" : ""}
              <br />
              {passwordValidations.validatePassword(verifyPassword.verifPass, firstClick.confirmPassword)[1] ? "Insira uma senha válida" : ""}
            </Flex>

            <Flex>
              <Button
                fontSize="sm"
                variant="primary"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
                mr="16px"
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                Voltar
              </Button>
              <Button
                fontSize="sm"
                variant="primary"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
                onClick={() => {
                if (
                (
                  verifyPassword.pass == "" ||
                  verifyPassword.verifPass == ""
                )
                ||
                (
                  passwordValidations.validatePassword(verifyPassword.pass, firstClick.password)[1] ||
                  passwordValidations.validatePassword(verifyPassword.verifPass, firstClick.verifyPassword)[1] ||
                  (verifyPassword.pass != verifyPassword.verifPass)
                )
                ) {
                  setPage(page)
                } else {
                  !passwordValidations.validatePassword(verifyPassword.verifPass, firstClick.verifPass)[1] ? setFormData({ ...formData, password: verifyPassword.pass}) : console.log("errado")
                  setPage(page + 1);
                }
                  
                }}
              >
                Enviar
              </Button>
              
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default LoginInfo;
