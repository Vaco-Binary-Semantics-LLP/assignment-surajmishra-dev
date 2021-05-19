import React from "react";
import { TextField, Button } from "@material-ui/core";

function Form({ title, submitHandler, placeholder }) {
  return (
    <form>
      <h1>{title}</h1>
      <TextField label={placeholder} variant="outlined" />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}

export default Form;
