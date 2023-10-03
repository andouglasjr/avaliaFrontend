import { Table, Thead, Tr, Th, Flex, Tbody, Td, Badge } from "@chakra-ui/react";
import { DownArrowIcon, PencilIcon, TrashIcon } from "../icons/Icons";

export const CustomTable = ({data}) => {
    return(
        <Table textStyle={"Body"} variant='custom'>
            <Thead>
              <Tr>
                <Th><Flex gap={"14px"}>Tema <DownArrowIcon color='neutralDark.0'/></Flex></Th>
                <Th isNumeric><Flex gap={"14px"}>Visualizações <DownArrowIcon color='neutralDark.0'/></Flex></Th>
                <Th><Flex gap={"14px"}>Status <DownArrowIcon color='neutralDark.0'/></Flex></Th>
                <Th><Flex gap={"14px"}>Responsáveis <DownArrowIcon color='neutralDark.0'/></Flex></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>A ciência é a luz que ilumina as trevas da ignorância</Td>
                <Td isNumeric>0</Td>
                <Td ><Badge variant="yellow">Sem correção</Badge></Td>
                <Td>Nenhum</Td>
                <Td><Flex gap={"22px"}><PencilIcon color='neutralDark.0'/><TrashIcon color='neutralDark.0'/></Flex></Td>
              </Tr>
              <Tr>
                <Td>O estigma associado às doenças mentais na...</Td>
                <Td isNumeric>49</Td>
                <Td ><Badge variant="cyan">Correção parcial</Badge></Td>
                <Td>Reika Golçalves</Td>
                <Td><Flex gap={"22px"}><PencilIcon color='neutralDark.0'/><TrashIcon color='neutralDark.0'/></Flex></Td>
              </Tr>
              <Tr>
                <Td>Democratização do acesso ao cinema no Brasil</Td>
                <Td isNumeric>2409</Td>
                <Td ><Badge variant="green">Corrigida</Badge></Td>
                <Td>Reika Golçalves,...</Td>
                <Td><Flex gap={"22px"}><PencilIcon color='neutralDark.0'/><TrashIcon color='neutralDark.0'/></Flex></Td>
              </Tr>
            </Tbody>
          </Table>
    )
};