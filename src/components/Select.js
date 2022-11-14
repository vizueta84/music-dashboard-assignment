import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo(props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Normal
        </InputLabel>
        <NativeSelect
          value={props.state}
          onChange={(event)=>{
            props.setState(event.target.value)
          }}
          inputProps={{
            name: 'Normal',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>low</option>
          <option value={2}>medium</option>
          <option value={3}>high</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}