import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from "react-native";

class PreLoader extends Component {
    render(){
        return(
            <View style={styles.preLoaderView}>
                <ActivityIndicator color="#fff" size="large"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    preLoaderView:{
        flex:1,
        flexDirection:'columns',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#009929'
    }
})

export default PreLoader;