import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native'


// Функционал Input
export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Input field cannot be empty!')               
        }
    }
//-----//
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Enter the name of the case..."
                autoCorrect={false} // Убрать автокорректировку - Т9
                autoCapitalize="words" // Убрать автокорректировку на верхний регистр
                keyboardType="default" // тип клавиатуры
                
            />
            <Button title='Add case' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    input: {
        width: '70%',
        padding: 10,
        fontSize: 15,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    }
})