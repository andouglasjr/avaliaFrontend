import { Flex, Text, Textarea, Button } from '@chakra-ui/react';
import { PencilIcon } from '../icons/Icons';
import essaySvg from '../../assets/img/essay/essay_svg.svg';
import Modal from '../modal/Modal';
import React, { useState, useRef } from 'react';
import { Correct } from '../icons/Icons';
import Comment from '../comment/comment';

export default function Essay(props) {
  const essayDefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh libero, pretium nec accumsan sed, euismod in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nam tempus congue mauris sed euismod. Nunc neque sapien, tempor sit amet nunc non, porttitor iaculis neque. Maecenas consequat ex mattis augue volutpat, sit amet hendrerit ex ultricies. Fusce vulputate tortor in lectus gravida suscipit. Phasellus eu turpis egestas, porttitor sem a, imperdiet nibh. Ut consequat purus sollicitudin, congue tellus non, gravida est. Donec eget ligula consequat, gravida orci nec, venenatis metus."

  let essayData = props.essayData != undefined ? props.essayData : essayDefault;

  const [originalTextareaValue, setOriginalTextareaValue] = useState(essayData);
  const [isDisabled, setIsDisabled] = useState(true);
  const [textareaValue, setTextareaValue] = useState(originalTextareaValue);
  const [isEditing, setIsEditing] = useState(props.isEditingValue == null ? false : true);
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
    if (textareaValue.length < 300) {
      console.log("Sua Redação está em Branco, escreva algo antes de enviar!")
    } else {
      setIsEditing(false);
      props.setFormData({text: textareaValue, subject_id: props.subject_id});
      setOriginalTextareaValue(textareaValue);
      props.setPermission(true)
      setIsDisabled(true)
    }
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    if(textareaValue.length < 300){
      setIsDisabled(false)
    }
  };

  return (
    <Flex
      mb="10px"
      flexDir="column"
      alignItems="flex-start"
      backgroundColor="neutralLight.0"
      borderRadius="16px"
      boxShadow="0px 4px 6px 0px rgba(28, 31, 36, 0.16)"
      mt={props.mt}
      zIndex={0}
      maxW="592px"
    >
      <Flex>
        {!props.Admin ? ("") : (
          isEditing ? (
            <Flex alignItems="flex-start" gap="16px">
              <Button onClick={handleCancelClick} variant="secondary">Cancelar</Button>
              <Button onClick={handleSaveClick} variant="primary">Salvar</Button>
            </Flex>
          ) : (
            <Button onClick={handleEditClick}><PencilIcon color="purple.2" /></Button>

          )
        )}

      </Flex>
      <div style={{
        margin: '32px 32px 0px 32px',
        borderRadius: "16px",
      }}>
        <Flex minW="528px">
          <Textarea
            backgroundImage={`url(${essaySvg})`}
            backgroundRepeat="no-repeat"
            backgroundSize='cover'
            borderRadius="16px"
            rows="30"
            readOnly={!isEditing || props.isAdmin}
            overflow="hidden"
            resize="none"
            value={textareaValue}
            onChange={handleTextareaChange}
            ref={textareaRef}
            textStyle="Body"
            style={{ lineHeight: '36px' }}
            _placeholder={{ color: "neutralLight.4" }}
            placeholder="Digite seu texto aqui..."
          />
        </Flex>
      </div>
      <Flex display="flex" justifyContent="space-between" align="center" w="100%" padding="16.5px 24px">
        <Flex align="center">
          <div>
            <Flex display={props.permission ? "block" : "none"}>
              <Flex flexDirection="row" align="center">
                <Correct boxSize="20px" color="#637792"></Correct>
                <Text textAlign="center" textStyle="Caption" ml="6px" textColor="#637792">Racunho Salvo</Text>
              </Flex>
            </Flex>
          </div>
        </Flex>
        <Modal isDisabled={isDisabled} handleSaveClick={handleSaveClick} textPrimary="Quer enviar a redação?" textOpenButton="Enviar" textButtonFunction="Enviar" />
      </Flex>
    </Flex >
  );
}
