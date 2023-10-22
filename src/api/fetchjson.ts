import axios from 'axios'
import { type Todo } from '../model/Todo'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

export const getTodo = async () => {
  await axios.get(url).then((response) => {
    const todo = response.data as Todo
    logTodo(todo)
  })
}

const logTodo = (todo: Todo) => {
  const id = todo.id
  const title = todo.title
  const completed = todo.completed
  console.log(`
    todo's ID: ${id}
    with title: ${title}
    is completed: ${completed}
  `)
}
