import { Button, TextField } from '@material-ui/core';
import PasswordField from 'material-ui-password-field'

function login() {
  return (
    <form noValidate autoComplete="off">
      <TextField id="filled-basic" label="Email" variant="filled" />
      <PasswordField hintText="At least 8 characters" floatingLabelText="Enter your password" errorText="Your password is too short"/>
      <Button className="homebuttons" variant="contained">Login</Button>
    </form>
  );
}

export default login;
