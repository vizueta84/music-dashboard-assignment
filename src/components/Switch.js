import * as React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches(props) {
  console.log(props.state);
  const handleChange = () => {
    props.setState(!props.state);
  };

  return (
    <div>
      <Switch
        {...label}
        value={props.state}
        onChange={handleChange}
        checked={props.state}
      />
    </div>
  );
}
