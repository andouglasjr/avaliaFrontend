import { Flex, Text, Textarea, Button } from '@chakra-ui/react';
import { PencilIcon } from '../icons/Icons';
import essaySvg from '../../assets/img/essay/essay_svg2.svg';
import React, { useState, useRef } from 'react';
import { Correct } from '../icons/Icons';
import Comment from '../comment/comment';

export default function Essay(props) {
  const essayDefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh libero, pretium nec accumsan sed, euismod in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nam tempus congue mauris sed euismod. Nunc neque sapien, tempor sit amet nunc non, porttitor iaculis neque. Maecenas consequat ex mattis augue volutpat, sit amet hendrerit ex ultricies. Fusce vulputate tortor in lectus gravida suscipit. Phasellus eu turpis egestas, porttitor sem a, imperdiet nibh. Ut consequat purus sollicitudin, congue tellus non, gravida est. Donec eget ligula consequat, gravida orci nec, venenatis metus."

  let essayData = props.essayData != undefined ? props.essayData : essayDefault;

  const [originalTextareaValue, setOriginalTextareaValue] = useState(essayData);
  const [textareaValue, setTextareaValue] = useState(originalTextareaValue);
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef(null);

const handleEditClick = () => {
    setIsEditing(true);
    textareaRef.current.focus();
  };

  const handleCancelClick = () => {
    setTextareaValue(originalTextareaValue);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setOriginalTextareaValue(textareaValue)
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <Flex
      mb="32px"
      flexDir="column"
      alignItems="flex-start"
      backgroundColor="neutralLight.0"
      border="1px"
      borderRadius="16px"
      boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.16)"
      borderColor="neutralLight.2"

      height="100%"
      zIndex={0}
    >
      <Flex
        width="100%"
        height="65px"
        padding="16.5px 24px"
        borderBottom="1px solid"
        borderColor="neutralLight.2"
        justifyContent="end"
        alignItems="center"
      >
        <Text textStyle="Subtitle1">{props.essayName}</Text>
        {isEditing ? (
          <Flex alignItems="flex-start" gap="16px">
            <Button onClick={handleCancelClick} variant="secondary">Cancelar</Button>
            <Button onClick={handleSaveClick} variant="primary">Salvar</Button>
          </Flex>
        ) : (
          <Button onClick={handleEditClick}><PencilIcon color="purple.2" /></Button>
        )}
      </Flex>

      <Textarea
        _focus="none"
        rows="30"
        readOnly={!isEditing}
        maxLength="1770"
        overflow="hidden"
        lineHeight="2.437"
        padding="34px 42px 40px 57px"
        backgroundImage={`url(${essaySvg})`}
        flexGrow="1"
        border="none"
        resize="none"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        value={textareaValue}
        onChange={handleTextareaChange}
        ref={textareaRef}
        textStyle="Caption"
      />

      <Flex display="flex" justifyContent="space-between" align="center" w="100%" gap="16px" padding="16.5px 24px">
        <Flex align="center">
          <Correct color="neutralDark.0"></Correct>
          <Text textAlign="center" textStyle="Caption" ml="6px" textColor="neutralDark.0">Racunho Salvo</Text>
        </Flex>
        <Button onClick={handleSaveClick} variant="primary">Enviar</Button>
      </Flex>


    </Flex>
  );
}
