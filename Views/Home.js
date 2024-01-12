import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to your HVAC Tool Kit
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#21d6ff',
    },
    text: 
    {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Home;
