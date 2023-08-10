// Chakra imports
import { IconButton, Flex, useColorModeValue, Image } from "@chakra-ui/react";
// Custom components
import PropTypes from "prop-types";
import { ModelArrowIcon, MorePointsIcon } from "../icons/Icons";

export const CustomIconButton = (props) => {
  const { label, variant, icon, ...rest } = props;

  // Chakra Color Mode
  const bgColor = useColorModeValue("purple.2", "white");

  return (
    <IconButton
      {...rest}
      variant='icon'
      icon={<MorePointsIcon />}
    />
  );
};

CustomIconButton.propTypes = {
  isDisabled: PropTypes.bool,
};

CustomIconButton.defaultProps = {
  isDisabled: false,
};
