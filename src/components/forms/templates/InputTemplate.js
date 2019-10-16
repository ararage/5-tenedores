import React from 'react';
import { StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function InputTemplate(locals){
    return(
        <View style={styles.view}>
            <Input
                placeholder={locals.config.placeholder}
                password={locals.config.password}
                secureTextEntry={locals.config.secureTextEntry}
                leftIcon={{
                    type: locals.config.iconType,
                    name: locals.config.iconName
                }}
                leftIconContainerStyle={styles.iconContainer}
                // Listener from App.js Component
                onChangeText={v => locals.onChange(v)}
            ></Input>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        marginBottom:40,
    },
    iconContainer: {
        paddingLeft:10
    }
});

export default InputTemplate;

