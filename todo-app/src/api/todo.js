import axios from "axios";

const todoDataURL = "http://localhost:3100/todos";

export const getAllTodosData = async() => {
  const response = await axios.get(todoDataURL);
  return response.data;
}

export const addTodoData = async (todo) => {
  const response = await axios.post(todoDataURL, todo);
  
  return response.data
}

export const deleteTodoData = async(id) => {
  await axios.delete(`${todoDataURL}/${id}`);
  
  return id;
}

export const updateTodoData = async (id, todo) => {
  const response = await axios.put(`${todoDataURL}/${id}`, todo);
  
  return response.data;
}
