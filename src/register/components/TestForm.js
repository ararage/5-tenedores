import React from "react";
import t from "tcomb-form-native";

const Form = t.form.Form;

const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

const LoginOptions = {
  fields: {
    user: {
      label: "Nombre de usuario (*)",
      placeholder: "Nombre de usuario"
    },
    password: {
      label: "Contraseña (*)",
      placeholder: "Contraseña",
      password: true,
      secureTextEntry: true
    }
  }
};

function TestForm(props) {}

export default TestForm;
