import React, { createContext, useContext, useEffect, useMemo, useState,} from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "./authToken";

// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
// Assets
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import axios from "axios";

import Toast from "../../../components/toast/ToastFunctions";
import loginValidations from "./validations/loginValidations";
import { BrandIconBlue } from "../../../components/icons/Icons";

import { useNavigate } from "react-router-dom";

function Login() {
  // Chakra color mode
  const purple3 = useColorModeValue("purple.3", "purple.3")
  const neutralDark0 = useColorModeValue("neutralDark.0","neutralDark.0")
  const neutralDark4 = useColorModeValue("neutralDark.4", "neutralDark.4")

  //PassCorfimed
  const [pathLogin, setPathLogin] = React.useState(false);
  const navigate = useNavigate();
  const { setToken, setUserName, setEmail, setProfile, setProfileId } = useAuth();
  const [accessToken, setAccessToken] = useState('');
  const [accessUserName, setAccessUserName] = useState('');
  const [accessEmail, setAccessEmail] = useState('');
  const [accessProfile, setAccessProfile] = useState('');
  const [accessProfileId, setAccessProfileId] = useState('');
  const data = {isWelcomeLoading: true}

  //const [tokenExpiration, setTokenExpiration] = useState(null);

  if (pathLogin == true) {
    setPathLogin(false)
    const handleLogin = () => {
      setToken(accessToken);
      setUserName(accessUserName);
      setEmail(accessEmail);
      setProfile(accessProfile)
      setProfileId(accessProfileId)
      navigate("/loading", { state: data });
    };
  
    setTimeout(() => {
      handleLogin();
    }, 3 * 1000);
  }

  // React States
  const handleClick = () => setShow(!show);
  const [show, setShow] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "string",
    password: "string"
  });
  const [click, setClick] = React.useState({
    email: false,
    password: false
  })

  // Validations States
  const emailClicked = () => {setClick({...click, email: true})}
  const passwordClicked = () => {setClick({...click, password: true})}

  // Login request
  React.useEffect(() => {
    if (login) {
      setLogin(false);

      axios
        .post("http://localhost:5000" + "/auth/login", formData)
        .then((response) => {
          setErrorMsg(response.data.message);
          setPathLogin(true)
          setAccessToken(response.data.data.accessToken);
          setAccessUserName(response.data.data.name);
          setAccessEmail(response.data.data.email);
          setAccessProfile(response.data.data.profile);
          setAccessProfileId(response.data.data.id)

          //const expires_in = response.data.data
          //const expirationTime = Date.now() + expires_in * 1000;
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
  }, [login]);

  return (
    <Flex
      fontFamily=""
    >
      <Flex
        bg={purple3}
        h= "100vh"
        w= "60vw"
        fontFamily="Sofia Sans"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        letterSpacing="1px"
      >
        <BrandIconBlue
          w="285px"
          h="48px"
        />
      </Flex>
      <Flex
        h="100vh"
        w= "40vw"
        alignItems="center"
        flexDirection="column"
        justifyContent= "center"
        // w={{ base: "100%", md: "420px" }}
        // maxW="100%"
        // background="transparent"
        // borderRadius="15px"
        // mx={{ base: "auto", lg: "unset" }}
        // me="auto"
        // mb={{ base: "20px", md: "auto" }}
      >
        {/* <Toast feedback={errorMsg}/> */}
        {errorMsg}
        
        <Text
          mb="40px"
          fontSize="32px"
          fontWeight="600"
          fontFamily="manrope"
          color={neutralDark4}
        >
          Acesse sua conta
        </Text>
        <FormControl
          fontFamily="Inter"
          maxW="320px"
        >
          <FormLabel
            fontSize="sm"
            fontWeight="400"
            color={neutralDark0}
            display="flex"
            mb="8px"
          >
            E-mail
          </FormLabel>
          <Input
            isRequired={true}
            onInvalid="true"
            variant={loginValidations.validateEmail(formData.email,click.email)[0]}
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="email"
            placeholder="Digite seu e-mail"
            mb="40px"
            size="46px"
            onBlur={emailClicked}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <FormLabel
            fontSize="sm"
            fontWeight="400"
            color={neutralDark0}
            display="flex"
            mb="8px"
          >
            Senha
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              fontSize="sm"
              placeholder="Digite sua senha"
              mb="40px"
              size="46px"
              minLength={"8"}
              type={show ? "text" : "password"}
              variant={loginValidations.validatePassword(formData.password,click.password)[0]}
              onBlur={passwordClicked}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <InputRightElement display="flex" alignItems="center" mt="2px">
              <Icon
                color={neutralDark0}
                _hover={{ cursor: "pointer" }}
                as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          <Flex 
            justifyContent="start" 
            align="center" 
            mb="40px"
          >
            <NavLink to="/auth/forgot-password">
              <Text
                color={neutralDark4}
                fontSize="16px"
                fontWeight="400"
                textDecorationLine="underline"
              >
                Esqueci minha senha
              </Text>
            </NavLink>
          </Flex>
          <Flex
            flexDirection="column"
            fontFamily="manrope"      
          >
            <NavLink to="/loading" state={{isWelcomeLoading: true}}></NavLink>
            <Button
              fontSize="sm"
              variant="primary"
              fontWeight="700"
              w="100%"
              h="40px"
              mb="16px"
              onClick={() => {
                setLogin(true);
              }}

              >
              Entrar
            </Button>

            <NavLink to="/auth/sign-up">
            <Button
              fontSize="sm"
              variant="secondary"
              fontWeight="700"
              w="100%"
              h="40px"
              mb="24px"
            >
              Criar minha conta
            </Button>
          </NavLink>
          </Flex>
          
        </FormControl>
      </Flex>
      </Flex> 
  );
}

export default Login;
