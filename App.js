import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

// Forms
import t from "tcomb-form-native";
const Form = t.form.Form;

// Components
import InputTemplate from "./src/components/forms/templates/InputTemplate";
import PreLoader from "./src/components/forms/PreLoader";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      testFormValue: {
        user: "",
        password: ""
      },
      testFormError: "",
      loaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
  }

  sendFormTest = () => {
    const validate = this.refs.formTest.getValue();
    this.setState({
      testFormError: !validate ? "Rellena todos los campos" : ""
    });
  };

  onChange = testFormValue => {
    this.setState({ testFormValue });
  };

  render() {
    const { testFormValue, testFormError, loaded } = this.state;
    console.log(testFormValue);
    if (!loaded) {
      return <PreLoader />;
    }
    return (
      <View style={styles.container}>
        <Form
          ref="formTest"
          type={LoginStruct}
          options={LoginOptions}
          value={testFormValue}
          onChange={v => this.onChange(v)}
        />
        <Button title="Login" onPress={this.sendFormTest.bind(this)} />
        <Text style={styles.testFormatErrorText}>{testFormError}</Text>
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
      template: InputTemplate,
      config: {
        placeholder: "Introduce tu usuario",
        secureTextEntry: false,
        iconType: "font-awesome",
        iconName: "user"
      }
    },
    password: {
      template: InputTemplate,
      config: {
        placeholder: "Introduce tu contraseña",
        password: true,
        secureTextEntry: true,
        iconType: "font-awesome",
        iconName: "lock"
      }
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40
  },
  testFormatErrorText: {
    paddingTop: 30,
    color: "#f00",
    textAlign: "center"
  }
});
