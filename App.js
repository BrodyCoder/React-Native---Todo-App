import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    //setTodos(todos.concat([ newTodo]))
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const removeTodo = (id) => { //функция удаления дела при длительном нажатии на него
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <ScrollView >
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} onRemove={removeTodo}/>
          ))}
        </View>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30
  }
})
