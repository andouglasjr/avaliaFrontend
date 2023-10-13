import { Text, Stack } from "@chakra-ui/react";
import "../../App.css";
import React, { useState } from "react";

function Landing() {

    const [number, setNumber] = useState('-');

    

  return (
    <div>
      <Stack direction="column" alignContent="left" bg="neutralLight.1">
        <Text mt="32px" textAlign="Left" textStyle="h3">Landing Page</Text>
        
         
      </Stack>
    </div>
  );
}

export default Landing;
