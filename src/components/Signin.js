import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Signin(props) {
  return (
    <Box
      component="form"
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
        gap: "12px",
        width: "400px",
        margin: "0 auto",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="email"
      />
      <TextField
        id="outlined-basic"
        label="Filled"
        variant="outlined"
        type="password"
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.setIsLogged(true)}
      >
        Sign in
      </Button>
    </Box>
  );
}
