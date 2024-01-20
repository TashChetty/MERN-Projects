import Button from '@mui/material-next/Button';
import  TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client';

function App() {
const [socket, setSocket] = useState(null);
   
  useEffect(() => {
    setSocket(io('http://localhost:4000'))
  }, []);

  function handleForm(e){
    e.preventDefault();
  }

  return (
    <div>
      
      <Box cpmponent = "form"  onSubmit={handleForm}>
      <TextField 
      id ="standard-basic" 
      size="small"
      label="Standard" 
      variant = "standard" 
      
      />
      <Button variant = "text"  type = "submit">Send</Button>
      </Box>
    </div>
  );
}

export default App;
