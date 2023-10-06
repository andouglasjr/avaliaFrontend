import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const FormationInfo = ({ page, setPage, formData, setFormData, firstClick, setFirstClick}) => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const formationInfoValidations = require("./validations/formationInfoValidations")

  const fileNameClicked = () => {setFirstClick({...firstClick, filename: true})}
  const fileClicked = () => {setFirstClick({...firstClick, file: true})}
  
  return (
    <motion.div animate={{ x: 100 }} transition={{ delay: 0 }}>
      <Flex flexDirection="column" p="16px" width="50%">
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Formação
          </Heading>
          <Text color={textColor} fontSize="16px" mb="10px">
            Para que a nossa equipe possa confirmar sua habilidade e liberar o
            acesso ao sistema, inclua um documento comprobatório (diploma) no
            expaço abaixo.
          </Text>
        </Box>
        <FormControl>
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            
            Nome do Arquivo: <Text color={brandStars}>*</Text>
          </FormLabel>

          <Input
            isRequired={true}
            value={formData.filename}
            variant={formationInfoValidations.fileNameValidation(formData.filename, firstClick.filename)[0]}
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="text"
            placeholder="Ex.: Diploma de Formação em Letras Português"
            mb="24px"
            size="lg"
            onBlur={fileNameClicked}
            onChange={(e) => {
              setFormData({ ...formData, filename: e.target.value });
            }}
          />
          <Flex
            color={"rred.2"}
          >
            {formationInfoValidations.fileNameValidation(formData.filename, firstClick.filename)[1] == true ? "Insera o valor válido" : ""}
          </Flex>
          
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            color={textColor}
            mb="8px"
          >
            Arquivo: <Text color={brandStars}>*</Text>
          </FormLabel>

          <Input
            isRequired={true}
            value={formationInfoValidations.fileValidation(formData.file,firstClick.file)[1] ? "" : formData.value}
            variant={formationInfoValidations.fileValidation(formData.file, firstClick.file)[0]}
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="file"
            placeholder="Insira seu arquivo"
            mb="24px"
            size="lg"
            onBlur={fileClicked}
            onChange={(e) => {
              setFormData({ ...formData, file: e.target.files[0]});
            }}
            
          />
          
          <Flex
            color={"rred.2"}
          >
            {formationInfoValidations.fileValidation(formData.file,firstClick.file)[1] ? "Insera o valor válido" : ""}
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
                    formData.filename == "" ||
                    formData.file == ""
                  )
                  ||
                  (
                    formationInfoValidations.fileNameValidation(formData.filename, firstClick.filename)[1] ||
                    formationInfoValidations.fileValidation(formData.file, firstClick.file)[1]
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
    </motion.div>
  );
};

export default FormationInfo;
