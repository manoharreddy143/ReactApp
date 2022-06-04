import * as React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {
  const [eve, setAge] = React.useState('');
//   React.useEffect(() => {
//     axios('https://reqres.in/api/users').then((response) => {setAge(response.data)})
  
//   },[])
//   const eventsList = eve.map((item)=> {return(<MenuItem value={item.id}>{item.email}</MenuItem>)})
  
  const handleChange = (event) => {      
    setAge(event.target.value);
  };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Event</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={eve}
          label="Event"
          onChange={handleChange}
        >
            {/* {eventsList} */}
          <MenuItem value={1}>Coding Contest</MenuItem>
          <MenuItem value={2}>Ideathon</MenuItem>
          <MenuItem value={3}>Culturals</MenuItem>
          <MenuItem value={4}>Games</MenuItem>
          <MenuItem value={4}>Presentations</MenuItem>
          



          
        </Select>
      </FormControl>
    </Box>
  );
}
