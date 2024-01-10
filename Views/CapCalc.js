import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

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
                style={{ height: 40, width: 230, textAlign: 'center', borderColor: 'gray', borderWidth: 1, borderRadius: 8, marginTop: 10 }}
                onChangeText={text => setVoltage(parseFloat(text))}
                // value={voltage.toString()}
                keyboardType='numeric'
            />

            <Text style={{ marginTop: 10 }} onPress={CalculateCapacitance}>Calculate</Text>
            <Text style={{ marginTop: 10 }}>Calculated Capacitance: {capacitance} MicroFarads</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
    },
});

export default CapCalc;
