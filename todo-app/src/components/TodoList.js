import { List } from "@chakra-ui/react"
import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";
import React from "react";

export const TodoList = ({
   todoList,
   toggleTodoListItemStatus,
   deleteTodoListItem,
   title,
   as,
   fontSize
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <List w="full">
            <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
            <ul>
              {todoList.map((todo) => (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  toggleTodoListItemStatus={toggleTodoListItemStatus}
                  deleteTodoListItem={deleteTodoListItem}
                />
              ))}
            </ul>
          </List>
        </>
      )}
    </>
  );
}