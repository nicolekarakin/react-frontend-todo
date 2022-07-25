import axios from 'axios'

export const getAllTodos = () =>
  axios.get('/api/todo').then(response => response.data)

// export const getTodoById = id =>
//   axios.get(`/api/todo/${id}`).then(response => response.data)

export const postTodo = item =>
  axios.post('/api/todo', item)

export const putTodo = todo => axios.put(`/api/todo/${todo.id}`, todo)

// export const putTodo = (todo,id )=> axios.put('/api/todo/'+id, todo)

// export const putUpdatedTodo = todo =>
//   axios.put(`/api/todo/${todo.id}/update`, todo)

export const deleteTodo = id => axios.delete(`/api/todo/${id}`)
