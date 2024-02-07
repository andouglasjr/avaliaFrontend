import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Show,
  Text,
  color,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import personalInfoValidations from "./validations/personalInfoValidations";

import { mode } from "@chakra-ui/theme-tools";
import { motion } from "framer-motion";

const PersonalInfo = ({ page, setPage, formData, setFormData, firstClick, setFirstClick}) => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const profileClicked = () =>{setFirstClick({...firstClick, profile: true})}
  const nameClicked = () =>{setFirstClick({...firstClick, name: true})}
  const emailClicked = () =>{setFirstClick({...firstClick, email: true})}
  const phoneNumberClicked = () =>{setFirstClick({...firstClick, phone_number: true})}
  const cpfClicked = () =>{setFirstClick({...firstClick, cpf: true})}
  const birthDateClicked = () =>{setFirstClick({...firstClick, birth_date: true})}

  return (

    <motion.div animate={{ x: 100 }} transition={{ delay: 0 }}>
      <Flex flexDirection="column" p="16px">
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Dados de Perfil
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
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Perfil<Text color={brandStars}>*</Text>
            </FormLabel>
            <Select
              isRequired={true}
              value={formData.profile}
              variant={personalInfoValidations.profileValidation(formData.profile, firstClick.profile)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="text"
              mb="24px"
              size="lg"
              onBlur={profileClicked}
              placeholder="Selecione o seu perfil"
              onChange={(e) => {
                setFormData({ ...formData, profile: e.target.value });
              }}
            >
              <option value="student">Estudante</option>{" "}
              <option value="reviewer">Revisor</option>{" "}
            </Select>
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {personalInfoValidations.profileValidation(formData.profile, firstClick.profile)[1] ? "Insera o valor válido" : ""}
            </Flex>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              color={textColor}
              mb="8px"
            >
              Nome<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              value={formData.name}
              variant={personalInfoValidations.nameValidation(formData.name, firstClick.name)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="text"
              placeholder="Digite seu nome"
              mb="24px"
              size="lg"
              onBlur={nameClicked}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {personalInfoValidations.nameValidation(formData.name,firstClick.name)[1] ? "Insera o valor válido" : ""}
            </Flex>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              E-mail<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              value={formData.email}
              variant={personalInfoValidations.emailValidation(formData.email,firstClick.email)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="email"
              placeholder="exemplo@email.com"
              mb="24px"
              size="lg"
              onBlur={emailClicked}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {personalInfoValidations.emailValidation(formData.email,firstClick.email)[1] ? "Insera o valor válido" : ""}
            </Flex>

            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Celular<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              value={formData.phone_number}
              variant={personalInfoValidations.phoneValidation(formData.phone_number,firstClick.phone_number)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="text"
              placeholder="99 99999-9999"
              mb="24px"
              size="lg"
              onBlur={phoneNumberClicked}
              onChange={(e) => {
                setFormData({ ...formData, phone_number: e.target.value});
              }}
            />
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {personalInfoValidations.phoneValidation(formData.phone_number,firstClick.phone_number)[1] ? "Insera o valor válido" : ""}
            </Flex>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              CPF<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              value={formData.cpf}
              variant={personalInfoValidations.cpfValidation(formData.cpf, firstClick.cpf)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="text"
              placeholder="XXX.XXX.XXX-XX"
              mb="24px"
              size="lg"
              onBlur={cpfClicked}
              onChange={(e) => {
                setFormData({ ...formData, cpf: e.target.value});
              }}
            />
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {personalInfoValidations.cpfValidation(formData.cpf,firstClick.cpf)[1] ? "Insera o valor válido" : ""}
            </Flex>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Data de Nascimento:<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              data-selected="true"
              isRequired={true}
              value={formData.birth_date}
              variant={personalInfoValidations.birthDateValidation(formData.birth_date, firstClick.birth_date)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="date"
              mb="24px"
              size="lg"
              placeholder="Sua data de nascimento"
              onBlur={birthDateClicked}
              onChange={(e) => {
                setFormData({ ...formData, birth_date: e.target.value });
              }}
            />
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {personalInfoValidations.birthDateValidation(formData.birth_date,firstClick.birth_date)[1] ? "Insera o valor válido" : ""}
            </Flex>
            <Button
              fontSize="sm"
              variant="primary"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={() => {
                if(
                  (
                    formData.cpf == "" ||
                    formData.phone_number == "" ||
                    formData.email == "" ||
                    formData.profile == "" ||
                    formData.birth_date == "" ||
                    formData.name == ""
                  )
                  ||
                  (
                    personalInfoValidations.cpfValidation(formData.cpf, firstClick.cpf)[1] ||
                    personalInfoValidations.phoneValidation(formData.phone_number, firstClick.phone_number)[1] ||
                    personalInfoValidations.emailValidation(formData.email, firstClick.email)[1] ||
                    personalInfoValidations.profileValidation(formData.profile, firstClick.profile)[1] ||
                    personalInfoValidations.birthDateValidation(formData.birth_date, firstClick.birth_date)[1] ||
                    personalInfoValidations.nameValidation(formData.name, firstClick.name)[1]
                  )
                ){
                  setPage(page)
                }else{
                  if (formData.profile === "reviewer") {
                    setPage(page + 1);
                  } else {
                    setPage(page + 2);
                  }
                 }

              }}
            >
              Continuar
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default PersonalInfo;