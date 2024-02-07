import React from 'react';
import { Box } from '@chakra-ui/react';
import { Scrollbars } from 'react-custom-scrollbars-2';

// Componente de Scrollbar personalizado
const CustomScrollbar = ({ children }) => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: '#4A5568', // Cor do thumb
            borderRadius: '4px',
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};

// Exemplo de uso
const App = () => {
  return (
    <Box w="300px" h="200px" border="1px solid #CBD5E0">
      <CustomScrollbar>
        {/* Seu conteúdo aqui */}
        <Box p="4">
          {/* Seu conteúdo aqui */}
        </Box>
      </CustomScrollbar>
    </Box>
  );
};

export default App;