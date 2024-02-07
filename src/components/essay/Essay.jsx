import { Flex, Text, Textarea, Button } from '@chakra-ui/react';
import { PencilIcon } from '../icons/Icons';
import essaySvg from '../../assets/img/essay/essay_svg2.svg';
import React, { useState, useRef } from 'react';
import Comment from '../comment/comment';

/*
const [isEditing, setIsEditing] = useState(false);

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

<Flex
        width="592px"
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
*/

export default function Essay(props) {
  const essayDefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh libero, pretium nec accumsan sed, euismod in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nam tempus congue mauris sed euismod. Nunc neque sapien, tempor sit amet nunc non, porttitor iaculis neque. Maecenas consequat ex mattis augue volutpat, sit amet hendrerit ex ultricies. Fusce vulputate tortor in lectus gravida suscipit. Phasellus eu turpis egestas, porttitor sem a, imperdiet nibh. Ut consequat purus sollicitudin, congue tellus non, gravida est. Donec eget ligula consequat, gravida orci nec, venenatis metus."
  const [originalTextareaValue, setOriginalTextareaValue] = useState(essayDefault);
  const [textareaValue, setTextareaValue] = useState(originalTextareaValue);
  const [verificationTextSelected, setVerificationTextSelected] = useState(false);
  const [textDetected, setTextDetected] = useState("");
  const [textDetectedSelected, setTextDetectedSelected] = useState(false);
  const [xMouse, setXMouse] = useState(0);
  const [yMouse, setYMouse] = useState(0);
  const textareaRef = useRef(null);

  const getSelectionText = () => {
    const text = window.getSelection().toString();
    if (text == "" || text == null) {
      setVerificationTextSelected(false)
      setTextDetectedSelected(false)
      return null;
    }else if (textDetected == text){
      setVerificationTextSelected(false)
      setTextDetectedSelected(false)
      return null;
    }else {
      setTextDetectedSelected(true)
      setTextDetected(text)
      setVerificationTextSelected(true)
      return console.log(text) && console.log(yMouse);
    }

    if (textDetectedSelected == true) {
    document.addEventListener("mousemove", logKey);
    function logKey(e) {
      const x = e.clientX
      const y = e.clientY
      setXMouse(x)
      setYMouse(y)
    }
  }

  }

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div>
      <Comment h="200px" w="250px" zIndex={10} display={verificationTextSelected == true ? "block" : "none"} text="hgflhkuadsgdslfihdsfluihdlighsfg"/>
      <Flex
        mb="32px"
        flexDir="column"
        alignItems="flex-start"
        backgroundColor="neutralLight.0"
        border="1px"
        borderRadius="16px"
        boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.16)"
        borderColor="neutralLight.2"
        width="592px"
        height="1209px"
        zIndex={0}
      >
        <Textarea
          onClick={getSelectionText}
          isEditing="false"
          _focus="none"
          readOnly={!false}
          rows="30"
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
    </div>
  );
}
