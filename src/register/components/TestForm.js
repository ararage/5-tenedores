import React from "react";
import t from "tcomb-form-native";
import { View } from 'react-native';

const Form = t.form.Form;


function TestForm(props){
  console.log("NO MAMES")
  return(
    <View>
      <Form
        forwardRef={props.reference}
        type={props.struct}
        options={props.options}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
}

export default TestForm;
