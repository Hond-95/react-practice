import React from "react";
import { Textarea, Button } from "@chakra-ui/react";

export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputElement,
  handleAddTodoListItem,
}) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        bordorColor="gray.400"
        ref={inputElement}
      />
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  )
}
