import { Flex, Input, Radio, Text } from '@chakra-ui/react'
import React from 'react'
export default function EssayData(props) {
  if (!props.isAdmin) {
    return (
      <Flex
        minW={"592px"}
        mb={"24px"}
        flexDir={"column"}
        alignItems={"flex-start"}
        padding={"32px"}
        gap={"16px"}
        backgroundColor={"neutralLight.0"}
        border={"1px"}
        borderRadius={"16px"}
        borderColor={"neutralLight.2"}
        boxShadow={"0px 4px 6px 0px rgba(28, 31, 36, 0.26)"}
      >
        <Flex

          align={"flex-start"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} textAlign="left" width={"96px"} textStyle="Caption">Tema</Text>
          <Text textStyle="Body" textColor="neutralDark.4" textAlign='left'  >{props.tema}</Text>
        </Flex>

        <Flex

          align={"flex-start"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} textAlign="left" width={"96px"} textStyle="Caption">Nota</Text>
          <Text textStyle="Body" textColor="neutralDark.4">{props.nota}</Text>
        </Flex>
        <Flex

          align={"flex-start"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} textAlign="left" width={"96px"} textStyle="Caption">Anulada</Text>
          <Text textStyle="Body" textColor="neutralDark.4">{props.anulada}</Text>
        </Flex>
      </Flex>
    )
  } else {
    return (
      <Flex
      minW={"592px"}
      mb={"24px"}
      flexDir={"column"}
      alignItems={"flex-start"}
      padding={"32px"}
      gap={"16px"}
      backgroundColor={"neutralLight.0"}
      border={"1px"}
      borderRadius={"16px"}
      borderColor={"neutralLight.2"}
      boxShadow={"0px 4px 6px 0px rgba(28, 31, 36, 0.26)"}
      >
        <Flex
          align={"flex-start"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} textAlign="left" textStyle="Caption">Tema</Text>
          <Text textStyle="Body" textColor="neutralDark.4" textAlign='left'  >{props.tema}</Text>
        </Flex>
        <Flex
          width={"auto"}
          height={"auto"}
          align={"center"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} height={"auto"} >Anulada?</Text>
          <Radio padding={"10px 0px"}>Sim</Radio>
          <Radio padding={"10px 0px"}>Não</Radio>
        </Flex>

      </Flex>
    )
  }
}