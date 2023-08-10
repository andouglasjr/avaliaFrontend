import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  Flex,
  IconButton,
  useToast,
  Text,
  Spacer,
  Box,
  Icon,
} from "@chakra-ui/react";
import { XIcon, CorretFullCircleIcon } from "../icons/Icons";

const Toast = ({ message, type, onClose }) => {
  const toastRef = useRef(null);
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleOnClose = () => {
    onClose();
    toast.onClose();
  };

  return (
    <Flex
      zIndex="50"
      ref={toastRef}
      w="400px"
      h="104px"
      position="fixed"
      top="10px"
      right="24px"
      p={4}
      bg={type == 'success' ? 'neutralDark.4' : '#330508'}
      borderRadius="md"
      boxShadow="md"
      opacity="88%"
      transition="opacity 1s ease-in-out, transform 0.7s ease-in-out"
    >
      <Flex my="auto" marginLeft="8px" h="56px" w="304px">
        <Flex h="56px" w="40px">
          <Icon color="ggreen.1" boxSize="20px" as={CorretFullCircleIcon} />
        </Flex>
        <Flex h="56px" w="264px">
          <Text textStyle="Body1" textColor="neutralLight.0">{message}</Text>
        </Flex>
      </Flex>
      <Spacer />
      <Flex right="0" maxW="48px" maxH="104px">
        <IconButton
          variant="off"
          top="-5px"
          left="5px"
          onClick={onClose}
          icon={<XIcon boxSize="14px" />}
        />
      </Flex>
    </Flex>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
