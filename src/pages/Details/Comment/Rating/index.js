import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props) {
  const [value, setValue] = React.useState(5);
 
  React.useEffect(() => {
      props.parentcallBack(value);
  },[value])
  return (
    <Box
      
    >
      
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      />
    </Box>
  );
}