import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";

const Form = t.form.Form;


export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      testFormValue:{
        user:"",
        password:""
      },
      reference:"formTest"
    }
  }

  sendFormTest = () => {
    console.log("Enviado")
    console.log(this.state.testFormValue)
    const validate = this.refs.formTest.getValue();
    if (validate){
      console.log('Correcto')
      return;
    }
    console.log("Incorrecto")
  }

  onChange = (testFormValue) => {
    console.log(testFormValue)
    this.setState({testFormValue})
  }

  render() {
    const { testFormValue, reference } = this.state;
    console.log(testFormValue)
    return (
      <View style={styles.container}>
        <Form
          ref={reference}
          type={LoginStruct}
          options={LoginOptions}
          value={testFormValue}
          onChange={v => this.onChange(v)}
        />
         <Button title="Login" onPress={this.sendFormTest.bind(this)} />
      </View>
    );
  }
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft:40,
    paddingRight:40
  }
});
