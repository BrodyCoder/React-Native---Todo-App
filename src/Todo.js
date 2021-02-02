import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove }) => {

    const longPressHandler = () => { //функция удаления дела при длительном нажатии на него
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => console.log('Pressed', todo.id)} // При нажатии на дело, вывести в терминале его id
            onLongPress={longPressHandler}>
                <View style={styles.todo}>
                    <Text>{todo.title}</Text>   
                </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    todo: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 5
    }
})