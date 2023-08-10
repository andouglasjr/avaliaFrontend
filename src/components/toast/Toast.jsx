import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import Toast from "./ToastFunctions";
import PropTypes from "prop-types";

export const ToastAction = ({ feedBack, label, variant, type }) => {
  const [showToast, setShowToast] = useState(false);

  const handleToggleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <div>
      <Button variant={variant} onClick={handleToggleToast}>
        {label}
      </Button>

      {showToast && (
        <Toast
          message={feedBack || "Exemplo de mensagem do Toast"}
          onClose={handleToggleToast}
          type = {type}
        />
      )}
    </div>
  );
};

ToastAction.propTypes = {
  feedback: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary','secondary','ghost','link']),
  label: PropTypes.string,
  type: PropTypes.oneOf(['success','error'])
};

ToastAction.defaultProps = {
  feedback: "Redação x alterada com sucesso!",
  label: "Mostrar Toast",
  variant: "primary",
  type: 'success',
};
