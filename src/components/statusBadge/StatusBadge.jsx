import { Badge, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const StatusBadge = ({label, variant}) => {
  return (
    <Badge variant={variant}>
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
  