import { useCheckbox, Flex, chakra, Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Correct } from "../icons/Icons";

export const SquareCheck = (props) => {
  const { state, getCheckboxProps, getInputProps, htmlProps } =
    useCheckbox(props);
  const { label, ...rest } = props;
  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      bg="none"
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        borderRadius="3px"
        border="3px solid"
        borderColor="purple.2"
        w={5}
        h={5}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Icon as={Correct} w={3} h={3} color="purple.2" />}{" "}
      </Flex>{" "}
      <Flex alignItems="center" justifyContent="center" ml="0.5em">
        {label}
      </Flex>
    </chakra.label>
  );
};


SquareCheck.propTypes = {
  label: PropTypes.string,
};

SquareCheck.defaultProps = {
  label: "Label",
};

