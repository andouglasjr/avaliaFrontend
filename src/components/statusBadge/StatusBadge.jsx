import { Badge, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const StatusBadge = ({label, variant, margT, margR}) => {
  return (
    <Badge maxH="28px" mt={margT} mr={margR} variant={variant}>
      <Text textTransform={"none"} textStyle={"Caption1"}>
        {label}
      </Text>
    </Badge>
  );
};

StatusBadge.propTypes = {
    variant: PropTypes.oneOf(['purple','cyan','green','yellow','red','neutral','brand']),
    label: PropTypes.string,
  };

StatusBadge.defaultProps = {
    variant: 'purple',
    label: 'Label'
}

export default StatusBadge;
  