import { Button, TextField } from '@material-ui/core';
import PasswordField from 'material-ui-password-field'

function signup() {
  return (
    <form noValidate autoComplete="off">
      <TextField id="filled-basic" label="First Name" variant="filled" />
      <TextField id="filled-basic" label="Last Name" variant="filled" />
      <TextField id="filled-basic" label="Email" variant="filled" />
      <PasswordField hintText="At least 8 characters" floatingLabelText="Enter your password" errorText="Your password is too short"/>
      <TextField
          id="outlined-multiline-static"
          label="Experience Description"
          multiline
          rows={4}
          placeholder="Write about your software development experiences here"
          variant="outlined"
        />
      
      
      <Button className="homebuttons" variant="contained">Sign Up</Button>
    </form>
  );
}

export default signup;
