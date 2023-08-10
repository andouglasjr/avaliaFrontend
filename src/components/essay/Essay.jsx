import { Flex, Text, Textarea, Button } from '@chakra-ui/react';
import { PencilIcon } from '../icons/Icons';
import essaySvg from '../../assets/img/essay/essay_svg2.svg';
import React, { useState, useRef } from 'react';

export default function Essay(props) {
  const [originalTextareaValue, setOriginalTextareaValue] = useState("");
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
      flexDir="column"
      alignItems="flex-start"
      backgroundColor="neutralLight.0"
      border="1px"
      borderRadius="16px"
      boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.16)"
      borderColor="neutralLight.2"
      width="620px"
      height="1209px"
    >
      <Flex
        width="620px"
        height="65px"
        padding="16.5px 24px"
        borderBottom="1px solid"
        borderColor="neutralLight.2"
        justifyContent="space-between"
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
        lineHeight="2.237"
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
      />
    </Flex>
  );
}
