import React from "react";

export const TodoAdd = ({ buttonText, inputElement, handleAddTodoListItem}) => {
  return (
    <>
      <textarea ref={inputElement} />
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  )
}
