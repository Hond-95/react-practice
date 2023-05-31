import '../App.css';
import { useTodo } from "../hooks/useTodo"
import React, { useRef } from 'react'
import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function App() {
  const { todoList,
          addTodoListItem,
          toggleTodoListItemStatus,
          deleteTodoListItem
        } = useTodo();
  
  const inputElement = useRef(null);
  
  const handleAddTodoListItem = () => {
    if (inputElement.current.value === "") return;
    
    addTodoListItem(inputElement.current.value);
    inputElement.current.value = "";
  }
  
  console.log("TODOリスト：", todoList);
  
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  })
  
  console.log("未完了TODOリスト：", inCompletedList);
  
  const completedList = todoList.filter((todo) => {
    return todo.done;
  })
  
  console.log("完了リスト：", completedList)
  
  
  
  return (
    <Container centerContent p={{base: "4", md: "6"}} maxWidth="3xl" >
      <TodoTitle
        title="TODO進捗管理"
        as="h1"
        fontSize={{base: "2xl", md: "3xl"}}
      />
      
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="TODOを追加"
        inputElement={inputElement}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
        fontSize={{base: "2xl", md: "2xl"}}
      />

      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
        fontSize={{base: "2xl", md: "2xl"}}
      />
    </Container>
  );
}

export default App;
