import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight } from 'react-native';


const CapCalc = () => 
{
    const [amps, setAmps] = useState(0);
    const [voltage, setVoltage] = useState(0);
    const [capacitance, setCapacitance] = useState(0);

    function CalculateCapacitance() 
    {
        if (amps !== 0 && voltage !== 0) 
        {
            const calculatedCapacitance = (amps * 2652) / voltage;
            setCapacitance((calculatedCapacitance).toFixed(0));
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Capacitor Calculator</Text>
            <TextInput 
                id='Amps'
                placeholder='Amps on Start Winding'
                style={{ height: 40, width: 230, textAlign: 'center', borderColor: 'gray', borderWidth: 1, borderRadius: 8, marginTop: 20 }}
                onChangeText={text => setAmps(parseFloat(text))}
                // value={amps.toString()}
                keyboardType='numeric' 
            />
            <TextInput 
                id='Voltage'
                placeholder='Voltage between Common and Run'
                style={{ height: 40, width: 230, textAlign: 'center', borderColor: 'gray', borderWidth: 1, borderRadius: 8, marginTop: 10, marginBottom: 10 }}
                onChangeText={text => setVoltage(parseFloat(text))}
                // value={voltage.toString()}
                keyboardType='numeric'
            />
            <TouchableHighlight
                style={styles.button}
                onPress={CalculateCapacitance}
            >
                <Text style={{ color: '#F4F9FA',fontSize: 18, fontWeight: '800', letterSpacing: 1.5 }}>
                    Calculate
                </Text>
            </TouchableHighlight>
            
            <Text style={{ marginTop: 10 }}>Calculated Capacitance: {capacitance} MicroFarads</Text>
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
        fontSize: 26,
        fontWeight: 'bold',
    },
    button: 
    {
        alignItems: 'center',
        backgroundColor: '#0023EB',
        padding: 10,
        width: 120,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
    },
    
});

export default CapCalc;
