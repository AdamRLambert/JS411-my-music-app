import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LogIn() {
  const [isLogged, setLogged] = React.useState(false);

  const handleClick = () => {
    setLogged(!isLogged);
  };
  
  const BasicTextFields = () => (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="E-mail" variant="outlined" />
    </Box>
  );

  return (
    <Stack direction="row" spacing={2}>
      {!isLogged ? (
        <Button onClick={handleClick} variant="outlined">
          Log In
        </Button>
      ) : (
        <p>Logged In</p>
      )}
      <BasicTextFields />
    </Stack>
  );
}
