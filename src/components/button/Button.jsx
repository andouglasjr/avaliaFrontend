// Chakra imports
import { Button, Flex, useColorModeValue, Image } from "@chakra-ui/react";
// Custom components
import PropTypes from "prop-types";
import { ModelArrowIcon } from "../icons/Icons";
import LoadingWhite from "../icons/Loading_White.gif";
import LoadingPurple from "../icons/Loading_Purple.gif";
import React from "react";



export const CustomButton = (props) => {
  const { id, label, extra, variant, mb, mt, icon, w, h, ml, ...rest } = props;
  
  // Chakra Color Mode
  const bgColor = useColorModeValue("purple.2", "white");
  
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignContent="center"
      mb={mb ? mb : "30px"}
      mt={mt ? mt : "30px"}
    >
      <Button
        {...rest}
        id={id}
        label={label}
        variant={variant}
        leftIcon={variant == 'ghost' ? <ModelArrowIcon /> : null}
        rightIcon={variant == 'primary' || variant == 'secondary' ? <ModelArrowIcon /> : null}
        w={w ? w : "150px"}
        h={h ? h : "40px"}
        p="8px"
        fontFamily="textStyles.Button"
        gap="8px"
        spinner={<Image mt="16px" src={variant == 'primary' ? LoadingWhite : LoadingPurple} boxSize="40px" />}
      >
        {label}
      </Button>
    </Flex>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost", "link"]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

CustomButton.defaultProps = {
  label: "Button",
  variant: "primary",
  isDisabled: false,
  isLoading: false,
};
