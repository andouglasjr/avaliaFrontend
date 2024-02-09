import { React, useState, useEffect } from "react";

import { Flex, Progress } from "@chakra-ui/react";

import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import LoginInfo from "./components/LoginInfo";
import ProcessingRegister from "./components/ProcessingRegister";
import FormationInfo from "./components/FormationInfo";
import DefaultAuth from "./components/Default";

function Register() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    profile: "",
    name: "",
    email: "",
    cpf: "",
    birth_date: "",
    password: "",
    phone_number: "",
    street: "",
    number: "",
    city: "",
    zipcode: "",
    neighborhood: ""
  });

  const [firstClick, setFirstClick] = useState({
    profile: false,
    name: false,
    email: false,
    cpf: false,
    birth_date: false,
    password: false,
    phone_number: false,
    street: false,
    number: false,
    city: false,
    zipcode: false,
    neighborhood: false,
  });

  const componentList = [
    <PersonalInfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      firstClick={firstClick}
      setFirstClick={setFirstClick}
    />,
    <FormationInfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      firstClick={firstClick}
      setFirstClick={setFirstClick}
    />,
    <AddressInfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      firstClick={firstClick}
      setFirstClick={setFirstClick}
    />,
    <LoginInfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      firstClick={firstClick}
      setFirstClick={setFirstClick}
    />,
    <ProcessingRegister
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  return (
    <DefaultAuth>
      <Flex
        mx={{ base: "auto", lg: "0px" }}
        h="100%"
        alignItems="start" 
        
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "0px", md: "0px" }}
        mt={{ base: "8px", md: "4vh" }}
        marginEnd={{ base: "16px", md: "0vh" }}
        flexDirection="column"
        
      >
        <Progress
          width="100%"
          marginTop="16px"
          marginBottom="24px"
          h="5"
          value={
            page === 0
              ? 10
              : page === 1
              ? 30
              : page === 2
              ? 60
              : page === 3
              ? 80
              : 100
          }
        />

        {componentList[page]}
      </Flex>
    </DefaultAuth>
  );
}

export default Register;
