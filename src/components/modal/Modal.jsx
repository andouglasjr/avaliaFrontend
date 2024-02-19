  import { useState } from "react";
  import { Spacer, extendTheme, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, IconButton } from "@chakra-ui/react";
  import CustomButton from "../button/Button";
  import { XIcon } from "../icons/Icons";

  function ModalComponent({ textPrimary, textButtonFunction, textSecondary, textOpenButton, handleSaveClick, isDisabled }) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    const functionModal = () => {
      handleSaveClick();
      setIsOpen(false);
    };
  
    return (
      <div>
        <CustomButton w="96px" variant="primary" isDisabled={isDisabled} onClick={openModal} label={ textOpenButton || "Abrir Modal" } />
  
        <Modal isOpen={isOpen} onClose={closeModal} motionPreset="scale">
          <ModalOverlay />
          <ModalContent top="calc(50% - 232px)" borderRadius="16px" maxW="464px" maxH="180px">
            <ModalBody mt="16px">
                <Text textColor="neutralDark.4" textStyle="h4" textSize="24px">{ textPrimary || "Aqui aparecerá seu texto primário." }</Text>
                <Text mt={textSecondary !== "" || textSecondary != undefined ? "opx" : "16px"} textColor="neutralDark.0" textSize="16px">{ textSecondary }</Text>
            </ModalBody>
            <ModalFooter gap="16px" mb="32px">
                <CustomButton w="94px" variant="primary" onClick={functionModal} label={ textButtonFunction || "Confirmar" }/>
                <CustomButton w="110px" variant="secondary" onClick={closeModal} label="Cancelar" />
                <Spacer />
                <IconButton variant="off" left="24px" mt="-210px" maxW="24px" max="24px"  onClick={closeModal} icon={<XIcon boxSize="14px" color="#DBDFE5" />}/>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }
  
  export default ModalComponent;