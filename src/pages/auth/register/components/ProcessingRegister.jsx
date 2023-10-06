import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import axios from "axios";

const ProcessingRegister = ({ page, setPage, formData, setFormData }) => {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";

  const [msg, setMsg] = React.useState("Finalizando o cadastro, por favor aguarde...");
  const [spinnerShow, setSpinnerShow] = React.useState(false);

  React.useEffect(() => {
    axios
      .post("http://localhost:5000" + "/auth/register", formData)
      .then((response) => {
        setMsg(response.data.message);
        setSpinnerShow(true);
      })
      .catch(function (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response.data.message);
          setMsg(error.response.data.message);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, [formData]);

  return (
    <motion.div animate={{ x: 10 }} transition={{ delay: 0 }}>
      <Flex flexDirection="column" p="16px">
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Quase lá...
          </Heading>
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
          align="center"
        >
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
            mt="36px"
            value={msg}
          >
            {msg}
          </Text>

          <Spinner hidden={spinnerShow}/>
        </Flex>
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
      </Flex>
    </motion.div>
  );
};

export default ProcessingRegister;
