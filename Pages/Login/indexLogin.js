import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' />
            <View style={styles.container}>
                <Text>Oi testando</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})