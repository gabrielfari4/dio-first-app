import { Flex, Heading, Input, Text } from '@chakra-ui/react';

function App() {
  return (
    <Flex width='100vw' height='100vh' background='black' justifyContent='center' alignItems='center' flexDirection='column'>
      <Text color='white'>Olá mundo</Text>
      <Input focusBorderColor='lime' placeholder='Here is a sample placeholder' />
    </Flex>
  );
}

export default App;
