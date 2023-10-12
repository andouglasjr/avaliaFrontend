import { Flex, Input, Radio, Text } from '@chakra-ui/react'
import React from 'react'
export default function EssayData(props) {
  if (!props.isAdmin) {
    return (
      <Flex
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
          width={"556px"}
          height={"28px"}
          align={"flex-start"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} textAlign="left" width={"96px"}>Tema</Text>
          <Text textStyle="Body" textColor="neutralDark.4">{props.tema}</Text>
        </Flex>
        <Flex
          width={"556px"}
          height={"28px"}
          align={"flex-start"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} textAlign="left" width={"96px"}>Redatores</Text>
          <Text textStyle="Body" textColor="neutralDark.4">{props.redatores}</Text>
        </Flex>
        <Flex
          width={"556px"}
          height={"28px"}
          align={"flex-start"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} textAlign="left" width={"96px"}>Nota</Text>
          <Text textStyle="Body" textColor="neutralDark.4">{props.nota}</Text>
        </Flex>
        <Flex
          width={"556px"}
          height={"28px"}
          align={"flex-start"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} textAlign="left" width={"96px"}>Anulada</Text>
          <Text textStyle="Body" textColor="neutralDark.4">{props.anulada}</Text>
        </Flex>
      </Flex>
    )
  }else{
    return (
      <Flex
        flexDir={"column"}
        alignItems={"flex-start"}
        padding={"32px"}
        gap={"16px"}
        backgroundColor={"neutralLight.0"}
        border={"1px"}
        borderColor={"neutralLight.2"}
        height={"auto"}
        width={"620px"}
        boxSizing='borderBox'
>
        <Flex
          width={"auto"}
          height={"auto"}
          align={"center"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} width={"96px"}>Tema</Text>
          <Input
              isRequired={true}
              variant="input_primary"
              placeholder="Digite o tema da redação"
              width={"436px"}
            />
        </Flex>
        <Flex
          width={"auto"}
          height={"auto"}
          align={"center"}
          padding={"0"}
          gap={"24px"}
        >
          <Text color={"neutralDark.0"} width={"96px"} height={"auto"}>Anulada</Text>
          <Radio padding={"10px 0px"}>Sim</Radio>
          <Radio padding={"10px 0px"}>Não</Radio>
        </Flex>

      </Flex>
    )
  }
}