import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderSteps(props) {
    console.log(props.state);
    const handleChange = (event) => {
        console.log(event.target)
      props.setState(event.target.value);
    };
    
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        getAriaValueText={valuetext}
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
        value={props.state}
        onChange={handleChange}
      />
    </Box>
  );
}
