  import { useState } from "react";
  import { Spacer, extendTheme, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, IconButton } from "@chakra-ui/react";
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
        <Button variant="primary" isDisabled={isDisabled} onClick={openModal}>{ textOpenButton || "Abrir Modal" }</Button>
  
        <Modal isOpen={isOpen} onClose={closeModal} motionPreset="scale">
          <ModalOverlay />
          <ModalContent top="calc(50% - 232px)" borderRadius="16px" maxW="464px" maxH="252px">
            <ModalBody mt="10px">
                <Text textColor="neutralDark.4" textStyle="h4" textSize="24px">{ textPrimary || "Aqui aparecerá seu texto primário." }</Text>
                <Text mt="16px" textColor="neutralDark.0" textSize="16px">{ textSecondary }</Text>
            </ModalBody>
            <ModalFooter gap="16px" mb="10px">
                <Button minW="94px" variant="primary" onClick={functionModal}>{ textButtonFunction || "Confirmar" }</Button>
                <Button minW="110px" variant="secondary" onClick={closeModal}>Cancelar</Button>
                <Spacer />
                <IconButton variant="off" left="10px" maxW="24px" max="24px"  onClick={closeModal} icon={<XIcon boxSize="14px" color="#DBDFE5" />}/>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }
  
  export default ModalComponent;