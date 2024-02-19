// Chakra imports
import { Button, Flex, Text, Image } from "@chakra-ui/react";
// Custom components
import PropTypes from "prop-types";
import { ModelArrowIcon } from "../icons/Icons";
import LoadingWhite from "../icons/Loading_White.gif";
import LoadingPurple from "../icons/Loading_Purple.gif";
import React, { useState } from "react";



export const CustomButton = (props) => {
  const { id, label, alignSelf, extra, isLoading, spacing, variant, mb, mt, rightIcon, icon, w, h, ml, isDisabled, onClick, ...rest } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Flex
      justifyContent="center"
      alignContent="center"
      mb={mb ? mb : "30px"}
      mt={mt ? mt : "30px"}
      w={w ? w : "150px"}
      h={h ? h : "40px"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      alignSelf={alignSelf}
    >
      <Button
        spacing={spacing !== "" || spacing != undefined ? spacing : null}
        bg={
          variant === 'primary' ? (isDisabled ? "neutralLight.4" : (isLoading ? "purple.4" : "purple.2")
          ) : (
            variant === 'secondary' ? (isDisabled ? "neutralLight.0" : (isLoading ? "neutralLight.0" : {})) : {}
          )
        }
        borderColor={variant === 'secondary' ? (isDisabled ? "neutralLight.4" : (isLoading ? "purple.4" : "purple.2")) : {}}
        _focus={{ outline: "3px solid #22ECFF", outlineOffset: '-2px' }}
        _hover={
          variant === 'primary' ? (isDisabled ? { borderColor: "transparent", backgroundColor: "neutralLight.4", color: 'initial' } : (isLoading ? { borderColor: "transparent", backgroundColor: "purple.4", color: 'initial' } : (isPressed ? { backgroundColor: 'purple.4', color: 'initial' } : { backgroundColor: 'purple.3', color: 'initial' }))

          ) : (

            variant === "secondary" ? (isDisabled ? { borderColor: "neutralLight.4", backgroundColor: "neutralLight.0", color: 'initial' } : (isLoading ? { borderColor: "purple.4", backgroundColor: "neutralLight.0", color: 'initial' } : (isPressed ? { backgroundColor: 'purple.4', color: 'initial' } : { backgroundColor: 'purple.3', color: 'initial' }))) : {}

          )
        }
        onClick={onClick}
        id={id}
        isDisabled={isDisabled}
        variant={variant}
        leftIcon={variant == 'ghost' ? <ModelArrowIcon /> : null}
        rightIcon={(rightIcon === "true" || rightIcon == true) ? (variant === 'primary' || variant === 'secondary' ? <ModelArrowIcon /> : null) : null}
        w={w ? w : "150px"}
        h={h ? h : "40px"}
        margin="0"
        padding="0"
        textStyle="Body1"
        isLoading={(isLoading === "true" || isLoading == true) ? true : false}
        _loading={{ bg: "purple.4", opacity: "1" }}
        spinner={<Image mt="16px" src={variant === 'primary' ? LoadingWhite : LoadingPurple} boxSize="40px" />}
      >
        <Text textColor={variant === "primary" ? "neutralLight.0" : (variant === "secondary" ? (isDisabled ? (isHovered ? "neutralLight.4" :"neutralLight.4") : (isHovered ? "neutralLight.0" : "purple.2")) : {})}>
          {label}
        </Text>
      </Button>
    </Flex>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost", "link", "offWihtTextColor"]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

CustomButton.defaultProps = {
  label: "Button",
  variant: "primary",
  isDisabled: false,
  isLoading: false,
};

export default CustomButton;
