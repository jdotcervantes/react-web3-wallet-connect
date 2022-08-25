import React from 'react';
import { ChakraProvider, Text } from '@chakra-ui/react';

import Layout from './layout';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Text size="lg" color="white">
          React Wallet Connect Example
        </Text>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
