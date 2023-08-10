import { useCheckbox, Flex, chakra, Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Circle } from "../icons/Icons";

export const CircleCheck = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
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
        borderRadius="100px"
        border="3px solid"
        borderColor="purple.2"
        w={5}
        h={5}
        {...getCheckboxProps()}
      >
        {state.isChecked ? <Icon as={Circle} w={3} h={3} fill="4B1DF2" /> : null}{" "}
      </Flex>{" "}
      <Flex alignItems="center" justifyContent="center" ml='0.5em'>
        {label}
      </Flex>
    </chakra.label>
  );
};

CircleCheck.propTypes = {
  label: PropTypes.string,
};

CircleCheck.defaultProps = {
  label: "Label",
};
