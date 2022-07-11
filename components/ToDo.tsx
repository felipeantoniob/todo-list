import { motion } from 'framer-motion'
import { Button, ButtonGroup, Form, ListGroup } from 'react-bootstrap'
import { BsXLg, BsFillPencilFill } from 'react-icons/bs'

import { fadeInUp } from '../animations/index'
import { TodoItemProps } from '../interfaces'

const Todo = ({
  setTodos,
  todos,
  todo,
  setEditTodo,
  setInput,
  todoInputRef,
}: TodoItemProps): JSX.Element => {
  const completeTodo: React.ChangeEventHandler<HTMLInputElement> = () => {
    const newToDos = todos.map((item) => {
      return item.id === todo.id ? { ...item, completed: !item.completed } : item
    })
    setTodos(newToDos)
  }

  const updateTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
    todoInputRef.current!.focus()
    setEditTodo(todo)
    setInput(todo.text)
  }

  const deleteToDo: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTodos(todos.filter((item) => item.id !== todo.id))
  }

  return (
    <>
      <motion.div variants={fadeInUp} data-cy="todo-item">
        <ListGroup.Item
          className="d-flex mb-3 rounded p-0 border align-items-center shadow"
          data-cy={todo.text}
        >
          <Form.Check type="checkbox" aria-label="Complete to-do" className="ms-3">
            <Form.Check.Input type="checkbox" className="checkbox" onChange={completeTodo} />
          </Form.Check>
          <h3 className={todo.completed ? ' mx-3 completed overflow-auto' : 'mx-3 overflow-auto'}>
            {todo.text}
          </h3>

          <ButtonGroup size="lg" className="ms-auto">
            <Button
              onClick={updateTodo}
              className="border-0 p-3 update-button"
              aria-label="Update to-do"
              data-cy="update-todo"
            >
              <BsFillPencilFill size="1.5rem" />
            </Button>
            <Button
              onClick={deleteToDo}
              className="border-0 p-3  delete-button"
              aria-label="Delete to-do"
              data-cy="delete-todo"
            >
              <BsXLg size="1.5rem" />
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      </motion.div>
    </>
  )
}

export default Todo
