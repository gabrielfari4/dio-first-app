import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <Flex width='100vw' height='100vh' background='black' justifyContent='center' alignItems='center' flexDirection='column'>
      <Text color='white'>Olá mundo</Text>
      <Input focusBorderColor='lime' placeholder='Here is a sample placeholder' />
      <Text color='white' fontSize='3xl'>{count}</Text>
      <Button onClick={handleCount}>Aumentar 1</Button>
    </Flex>
  );
}

export default App;
