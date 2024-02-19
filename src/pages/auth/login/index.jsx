import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "./authToken";

// Chakra imports
import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import { OpenEyeIcon } from "../../../components/icons/Icons";
import { ClosedEyeIcon } from "../../../components/icons/Icons";
import axios from "axios";

//Others Imports
import Button from "../../../components/button/Button";

import LoginImage from "./loginImage.svg";

import { useNavigate } from "react-router-dom";

const Loading = function loadingFunction(props) {
  const { isLoading, formData, setLogin, setLoginValue, loginValue } = props;

  return (
    <div>
      <Flex
        flexDirection="column"
        fontFamily="manrope"
      >
        <NavLink to="/loading" state={{ isWelcomeLoading: true }}></NavLink>
        <Button
          isLoading={isLoading}
          rightIcon="false"
          isDisabled={(formData.email === "" || formData.password === "") ? true : false}
          variant="primary"
          w="360px"
          h="48px"
          mb="16px"
          mt="0px"
          onClick={() => {
            setLogin(true);
            setLoginValue(!loginValue);
          }}
          label="Entrar"
        />
      </Flex>
    </div>
  );
}

function Login() {
  const authLogin = import.meta.env.VITE_AUTH_LOGIN;

  const [isLoading, setIsLoading] = useState(false);

  // Chakra color mode
  const purple3 = useColorModeValue("purple.3", "purple.3")
  const neutralDark0 = useColorModeValue("neutralDark.0", "neutralDark.0")
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
  const data = { isWelcomeLoading: true }

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

    handleLogin();
  }

  // React States
  const handleClick = () => setShow(!show);
  const [show, setShow] = React.useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = React.useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [loginValue, setLoginValue] = React.useState(false);
  const [loginValueCompare, setLoginValueCompare] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [errorMsgEmail, setErrorMsgEmail] = React.useState("");
  const [errorMsgPassword, setErrorMsgPassword] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });
  const [click, setClick] = React.useState({
    email: false,
    password: false
  })

  // Validations States
  const emailClicked = () => { setClick({ ...click, email: true }) }
  const passwordClicked = () => { setClick({ ...click, password: true }) }

  // Login request
  React.useEffect(() => {
    if (login && formData.Text !== "" && formData.password !== "") {
      setLogin(false);
      setIsLoading(true);
      setLoginValueCompare(loginValue);

      axios
        .post(authLogin, formData)
        .then((response) => {
          setPathLogin(true);
          setAccessToken(response.data.data.accessToken);
          setAccessUserName(response.data.data.name);
          setAccessEmail(response.data.data.email);
          setAccessProfile(response.data.data.profile);
          setAccessProfileId(response.data.data.id);
          setErrorMsg("");
          setIsLoading(false)
        })
        .catch(function (error) {
          if (error.response) {
            setErrorMsg(error.response.data.message);
            setIsLoading(false)
          } else if (error.request) {
            console.log(error.request);
            setErrorMsg(error.request);
            setIsLoading(false)
          } else {
            console.log("Error", error.message);
            setErrorMsg(error.message);
            setIsLoading(false)
          }
          setIsLoading(false)
        }, [formData, login]);
    }
  }, [login, loginValue]);

  React.useEffect(() => {
    const isInvalidValue = () => {
      if (click.email == true || login) {
        if (formData.email === "") {
          setIsInvalidEmail(true);
          setErrorMsgEmail("Campo Obrigatório");
        } else if (pathLogin == false && loginValueCompare == loginValue) {
          if (errorMsg === "Email inválido.") {
            setIsInvalidEmail(true);
            setErrorMsgEmail("E-mail incorreto");
          } else {
            setIsInvalidEmail(false);
            setErrorMsgEmail("");
          }
        } else if (pathLogin == true) {
          setIsInvalidEmail(false);
          setErrorMsgEmail("");
        } else if (formData.email !== "" && errorMsg !== "Email inválido.") {
          setIsInvalidEmail(false);
          setErrorMsgEmail("");
        }
      }

      if (click.password == true || login) {
        if (formData.password === "") {
          setIsInvalidPassword(true);
          setErrorMsgPassword("Campo Obrigatório");
        } else if (pathLogin == false && loginValueCompare == loginValue) {
          if (errorMsg === "Senha inválida." || errorMsg === "Email inválido.") {
            setIsInvalidPassword(true);
            setErrorMsgPassword("Senha incorreta");
          } else {
            setIsInvalidPassword(false);
            setErrorMsgPassword("");
          }
        } else if (pathLogin == true) {
          setIsInvalidPassword(false);
          setErrorMsgPassword("");
        } else if (formData.password !== "" && errorMsg !== "Senha inválida." && errorMsg !== "Email inválido.") {
          setIsInvalidPassword(false);
          setErrorMsgPassword("");
        }
      }
    }

    if(isLoading == false || isLoading === "false") {
      isInvalidValue();
    }
  }, [click.email, click.password, formData, pathLogin, isLoading, errorMsg])

  return (
    <Flex>
      <Flex
        backgroundImage={LoginImage}
        backgroundSize={"cover"}
        h="100vh"
        w="60vw"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        letterSpacing="1px"
      >
      </Flex>
      <Flex
        h="100vh"
        w="40vw"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          mb="40px"
          fontSize="32px"
          fontWeight="600"
          fontFamily="manrope"
          color={neutralDark4}
        >
          Acessar a plataforma
        </Text>
        <FormControl
          fontFamily="Inter"
          maxW="320px"
        >
          <Flex mb={isInvalidEmail ? "24px" : "48px"} textAlign="left" flexDirection="column">
            <FormLabel
              textStyle="Caption"
              color={isInvalidEmail ? "rred.2" : neutralDark0}
              display="flex"
              mb="8px"
            >
              E-mail
            </FormLabel>
            <Input
              id="email"
              isRequired={true}
              isInvalid={isInvalidEmail}
              type="email"
              placeholder="Digite seu e-mail"
              _placeholder={{ textColor: "neutralLight.4", textStyle: "Body" }}
              textStyle="Body"
              mb="8px"
              minW="360px"
              maxW="360px"
              minH="52px"
              maxH="52px"
              onBlur={emailClicked}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <Text
              textStyle="Caption"
              textColor="rred.2"
              display={((isInvalidEmail && click.email) || (isInvalidEmail && login)) ? "block" : "none"}
            >
              {errorMsgEmail}
            </Text>
          </Flex>
          <Flex mb={isInvalidPassword ? "40px" : "64px"} textAlign="left" flexDirection="column">
            <FormLabel
              textStyle="Caption"
              color={isInvalidPassword ? "rred.2" : neutralDark0}
              display="flex"
              mb="8px"
            >
              Senha
            </FormLabel>
            <InputGroup alignItems="center">
              <Input
                id="password"
                isRequired={true}
                isInvalid={isInvalidPassword}
                placeholder="Digite sua senha"
                _placeholder={{ color: "neutralLight.4", textStyle: "Body" }}
                textStyle="Body"
                mb="8px"
                minW="360px"
                maxW="360px"
                minH="52px"
                maxH="52px"
                minLength={"8"}
                type={show ? "text" : "password"}
                onBlur={passwordClicked}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
              <InputRightElement display="flex" alignItems="center" mt="6px">
                <Icon
                  ml="70px"
                  color={neutralDark0}
                  _hover={{ cursor: "pointer" }}
                  as={show ? OpenEyeIcon : ClosedEyeIcon}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Text
              textStyle="Caption"
              textColor={isInvalidPassword ? "rred.2" : neutralDark0}
              display={((isInvalidPassword && click.password) || (isInvalidPassword && login)) ? "block" : "none"}
            >
              {errorMsgPassword}
            </Text>
          </Flex>
          <Loading isLoading={isLoading} formData={formData} setLoginValue={setLoginValue} setLogin={setLogin} loginValue={loginValue} />
        </FormControl>
      </Flex>
    </Flex>
  );
}

export default Login;
