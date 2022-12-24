import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input type="password" id="password" label="Senha" />
      <Button />
    </div>
  );
};

export default Form;
