import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { mode } from "@chakra-ui/theme-tools";

const AddressInfo = ({ page, setPage, formData, setFormData, firstClick, setFirstClick }) => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const addressValidations = require("./validations/addressValidations")
  const validateCEP = require("./validations/addressValidations/validateCEP")

  const checkCEP = async (CEP) => {
    const response = await validateCEP(CEP)
    return response
  }

  const [errorMensage, setErrorMensage] = useState("")
  const [findCEP, setFindCEP] = useState("")

  const cepClicked = () => { setFirstClick({ ...firstClick, zipcode: true }) }
  const cityClicked = () => {setFirstClick({ ...firstClick, city: true })}
  const stateClicked = () => {setFirstClick({ ...firstClick, state: true })}
  const numberClicked = () => {setFirstClick({ ...firstClick, number: true })}
  const streetClicked = () => {setFirstClick({ ...firstClick, street: true })}
  const neighborhoodClicked = () => {setFirstClick({ ...firstClick, neighborhood: true })}

  return (
    <motion.div animate={{ x: 100 }} transition={{ delay: 0 }}>
      <Flex flexDirection="column" p="16px">
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Endereço
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
              ms="4px"
              fontSize="sm"
              color={textColor}
              display="flex"
            >
              CEP:<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              placeholder="00000-000"
              isRequired={true}
              value={formData.zipcode}
              variant={addressValidations.verifyCEP(firstClick.zipcode, errorMensage)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="number"
              mb="24px"
              size="lg"
              onChange={(e) => {
                setFormData({ ...formData, zipcode: e.target.value });
              }
              }
              onBlur={async (e) => {
                cepClicked()
                const response = await checkCEP(formData.zipcode)
                console.log(response)
                setFindCEP(response[0])
                if (response[0] == true) {
                  setErrorMensage("")
                  setFormData({
                    ...formData,
                    city:         response[1].localidade,
                    state:        response[1].uf,
                    neighborhood: response[1].bairro,
                    street:       response[1].logradouro
                  })
                }else{
                  setErrorMensage(response)
                }
              }}
            />
            <Flex
              color={"rred.2"}
            >
              {errorMensage[0] == false ? errorMensage[1] : ""}
            </Flex>
            <FormLabel
              ms="4px"
              fontSize="sm"
              color={textColor}
              display="flex"
            >
              Bairro:<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              placeholder="Bairro"
              isRequired={true}
              value={formData.neighborhood}
              variant={addressValidations.validateNeighborhood(formData.neighborhood, firstClick.neighborhood)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="text"
              mb="24px"
              size="lg"
              onBlur={neighborhoodClicked}
              onChange={(e) => {
                setFormData({ ...formData, neighborhood: e.target.value });
              }
              }
            />
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {addressValidations.validateNeighborhood(formData.neighborhood,firstClick.neighborhood)[1] ? "Insera o valor válido" : ""}
            </Flex>
            <Flex flexDirection="row">
              <Flex flexDirection="column">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  color={textColor}
                  mb="8px"
                >
                  Rua<Text color={brandStars}>*</Text>
                </FormLabel>

                <Input
                  isRequired={true}
                  value={formData.street}
                  variant={addressValidations.validateStreet(formData.street, firstClick.street)[0]}
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  width="300px"
                  type="text"
                  placeholder="Rua:"
                  mb="24px"
                  size="lg"
                  onBlur={streetClicked}
                  onChange={(e) => {
                    setFormData({ ...formData, street: e.target.value });
                  }}
                />
                <Flex
                  color={mode("rred.2", "")}
                  ml="8px"
                >
                  {addressValidations.validateStreet(formData.street, firstClick.street)[1] ? "Insera o valor válido" : ""}
                </Flex>
              </Flex>
              
              <Flex flexDirection="column" ml="4px">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  color={textColor}
                  mb="8px"
                >
                  Nº<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  value={formData.number}
                  variant={addressValidations.validateNumber(formData.number, firstClick.number)[0]}
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type="number"
                  placeholder="123"
                  mb="24px"
                  size="lg"
                  onBlur={numberClicked}
                  onChange={(e) => {
                    setFormData({ ...formData, number: e.target.value });
                  }}
                />
                <Flex
                  color={mode("rred.2", "")}
                  ml="8px"
                >
                  {addressValidations.validateNumber(formData.number, firstClick.number)[1] ? "Insera o valor válido" : ""}
                </Flex>
              </Flex>
              
            </Flex>
            <FormLabel
              ms="4px"
              fontSize="sm"
              color={textColor}
              display="flex"
            >
              Estado<Text color={brandStars}>*</Text>
            </FormLabel>
            <Select
              isRequired={true}
              value={formData.state}
              variant={addressValidations.validateState(formData.state, firstClick.state)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="text"
              mb="24px"
              size="lg"
              placeholder="Selecione seu Estado"
              onBlur={stateClicked}
              onChange={(e) => {
                setFormData({ ...formData, state: e.target.value });
              }}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </Select>
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {addressValidations.validateState(formData.state, firstClick.state)[1] ? "Insera o valor válido" : ""}
            </Flex>
            <FormLabel
              ms="4px"
              fontSize="sm"
              color={textColor}
              display="flex"
            >
              Cidade<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              value={formData.city}
              variant={addressValidations.validateCity(formData.city, firstClick.city)[0]}
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="text"
              placeholder="Currais Novos"
              mb="24px"
              size="lg"
              onBlur={cityClicked}
              onChange={(e) => {
                setFormData({ ...formData, city: e.target.value });
              }}
            />
            <Flex
              color={mode("rred.2", "")}
              ml="8px"
            >
              {addressValidations.validateCity(formData.city,firstClick.city)[1] ? "Insera o valor válido" : ""}
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
                  if (formData.profile === "reviewer") {
                    setPage(page - 1);
                  } else {
                    setPage(page - 2);
                  }
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
                      formData.city == "" ||
                      formData.street == "" ||
                      formData.number == "" ||
                      formData.state == "" ||
                      formData.neighborhood == "" ||
                      firstClick.zipcode == "" 
                    )
                    ||
                    (
                      addressValidations.validateCity(formData.city, firstClick.city)[1] ||
                      addressValidations.validateCity(formData.street, firstClick.street)[1] ||
                      addressValidations.validateCity(formData.number, firstClick.number)[1] ||
                      addressValidations.validateCity(formData.state, firstClick.state)[1] ||
                      addressValidations.validateCity(formData.neighborhood, firstClick.neighborhood)[1] ||
                      addressValidations.verifyCEP(firstClick.zipcode, errorMensage)[1]
                    )
                  ) {
                    setPage(page)
                  } else {
                    setPage(page + 1);
                  }
                  
                }}
              >
                Próximo
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default AddressInfo;
