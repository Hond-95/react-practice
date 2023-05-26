import '../App.css';
import { useTodo } from "../hooks/useTodo"
import React, { useRef } from 'react'

const TodoTitle = ({ title, as }) => {
  if (as === "h1") return <h1>{title}</h1>
  
  if (as === "h2") return <h2>{title}</h2>
  
  return <p>{title}</p>
}

const TodoItem = ({todo}) => {
  console.log("hogeee")
  return (
    <li>
      {todo.content}
      
      <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
      <button>削除</button>
    </li>
  )
}

const TodoList = ({todoList}) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

const TodoAdd = ({ inputElement, handleAddTodoListItem}) => {
  return (
    <>
      <textarea ref={inputElement} />
      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  )
}

function App() {
  const { todoList, addTodoListItem } = useTodo();
  
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
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      
      <TodoAdd inputElement={inputElement} handleAddTodoListItem={handleAddTodoListItem} />
      
      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList todoList={inCompletedList} />
      
      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
