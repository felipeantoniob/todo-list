import { Button, Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { BsPlusLg, BsFillPencilFill } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'

import { TodoFormProps, FilterType } from '../interfaces'

const TodoForm = ({
  editTodo,
  input,
  setEditTodo,
  setInput,
  setStatus,
  setTodos,
  todoInputRef,
  todos,
}: TodoFormProps): JSX.Element => {
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const isEmptyString = (string: string) => (!string || /^\s*$/.test(string) ? true : false)
    if (isEmptyString(input)) return

    if (!editTodo) {
      setTodos([...todos, { text: input, id: uuidv4(), completed: false }])
      setInput('')
    } else {
      updateTodo(input, editTodo.id)
    }
  }

  const statusHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setStatus(e.currentTarget.value as FilterType)
  }

  const updateTodo = (text: string, id: string): void => {
    const newToDos = todos.map((item) => {
      return item.id === id ? { ...item, text: text } : item
    })
    setTodos(newToDos)
    setEditTodo(null)
  }

  return (
    <>
      <Col xs={12} md={6} className="mb-3">
        <Form onSubmit={handleFormSubmit} className="shadow-sm">
          <InputGroup size="lg">
            <FormControl
              type="text"
              ref={todoInputRef}
              onChange={handleInputChange}
              placeholder="Add task"
              aria-label="Add to-do"
              value={input}
              className="py-3 text-input"
              data-cy="todo-input"
            />
            <Button
              type="submit"
              size="lg"
              className="p-3 add-button"
              variant="secondary"
              aria-label="Add to-do"
              data-cy="add-todo"
            >
              {!editTodo ? <BsPlusLg size="2rem" /> : <BsFillPencilFill size="2rem" />}
            </Button>
          </InputGroup>
        </Form>
      </Col>
      <Col xs="auto" className="mb-3">
        <select
          className="form-select form-select-lg shadow-sm"
          onChange={statusHandler}
          onBlur={statusHandler}
          defaultValue="all"
          data-cy="todo-selector"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </Col>
    </>
  )
}

export default TodoForm
