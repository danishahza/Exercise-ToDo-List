import { useState } from 'react'
import { Container, Box, Text, Checkbox, Stack, Input, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Container p= "2em">
    <Box
      mx= "auto"
      px= "auto" 
      sx={{
      
      }}
    >
      <Box>
        <Text 
          color= "white"
          fontWeight= "bold"
        >
          Chores ToDo List
        </Text>
      </Box>
      <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= "10">
        <Box display="flex" alignItems="center" justifyContent="flex-start" width= "100%">
          <Checkbox 
            borderColor= "#48bb78"
            iconColor= "#48bb78"
            spacing= "10"

            >
          </Checkbox>
          <Text 
          color= "white"
          ml = "5"
          flex = "1"
          textAlign= "left"
          >
            Create Guest Experience mobile check-in
          </Text>
        </Box>
        <DeleteIcon 
        color= "#ffb3b3"
        boxSize={4}
        />
      </Stack>
      <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= "10">
        <Box display="flex" alignItems="center" justifyContent="flex-start" width= "100%">
          <Checkbox 
            borderColor= "#48bb78"
            iconColor= "#48bb78"
            spacing= "10"

            >
          </Checkbox>
          <Text 
          color= "white"
          ml = "5"
          flex = "1"
          textAlign= "left"
          >
            Document current CI/ID process
          </Text>
        </Box>
        <DeleteIcon 
        color= "#ffb3b3"
        boxSize={4}
        />
      </Stack>
      <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= "10">
        <Box display="flex" alignItems="center" justifyContent="flex-start" width= "100%">
          <Checkbox 
            borderColor= "#48bb78"
            iconColor= "#48bb78"
            spacing= "10"

            >
          </Checkbox>
          <Text 
          color= "white"
          ml = "5"
          flex = "1"
          textAlign= "left"
          >
            Perform Code Riview for final Pillow-Talk release
          </Text>
        </Box>
        <DeleteIcon 
        color= "#ffb3b3"
        boxSize={4}
        />
      </Stack>
      <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= "10">
        <Box display="flex" alignItems="center" justifyContent="flex-start" width= "100%">
          <Checkbox 
            borderColor= "#48bb78"
            iconColor= "#48bb78"
            spacing= "10"

            >
          </Checkbox>
          <Text 
          color= "white"
          ml = "5"
          flex = "1"
          textAlign= "left"
          >
            Impliment new Color Pallete from Design Team
          </Text>
        </Box>
        <DeleteIcon 
        color= "#ffb3b3"
        boxSize={4}
        />
      </Stack>
      <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= "10">
        <Box display="flex" alignItems="center" justifyContent="flex-start" width= "100%">
          <Checkbox 
            borderColor= "#48bb78"
            iconColor= "#48bb78"
            spacing= "10"

            >
          </Checkbox>
          <Text 
          color= "white"
          ml = "5"
          flex = "2"
          textAlign= "left"
          >
            Fix Image uploading process for guest check-in
          </Text>
        </Box>
        <DeleteIcon 
        color= "#ffb3b3"
        boxSize={4}
        />
      </Stack>
      <Stack direction= "row" justifyContent= "center" alignItems= "center" spacing= "10">
        <Box display="flex" alignItems="center" justifyContent="flex-start" width= "100%">
          <Checkbox 
            borderColor= "#48bb78"
            iconColor= "#48bb78"
            spacing= "10"

            >
          </Checkbox>
          <Text 
          color= "white"
          ml = "5"
          flex = "1"
          textAlign= "left"
          >
            Provide on-boarding documentation
          </Text>
        </Box>
        <DeleteIcon 
        color= "#ffb3b3"
        boxSize={4}
        />
      </Stack>
    </Box>
    <Box>
      <Box>
        <Text 
          color= "white"
          fontWeight= "bold"
        > 
          Done : 0
        </Text>
      </Box>
      <Box>
        <Text 
          color= "white"
          textAlign= "left"
        > Add todo</Text>
      </Box>
      <Input size='md' />
      <Button colorScheme='blue' alignContent= "flex-start">Add Task</Button>

    </Box>
   </Container>
  );
}

export default App
