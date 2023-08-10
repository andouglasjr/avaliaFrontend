import { Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const CustomInput = (props) => {
  const { variant, icon, ...rest } = props;

  return (
    <Input
      {...rest}
      onInvalid="true"
      variant="input_primary"
      fontSize="sm"
      ms={{ base: "0px", md: "0px" }}
      mb="24px"
      size="lg"
    />
  );
};

CustomInput.propTypes = {
  isDisabled: PropTypes.bool,
};

CustomInput.defaultProps = {
  isDisabled: false,
};
