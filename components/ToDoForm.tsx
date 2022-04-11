import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { BsPlusLg, BsFillPencilFill } from 'react-icons/bs'

import { ToDoProps, ToDoFormProps, StatusType } from '../interfaces'

const ToDoForm = ({
  editToDo,
  setEditToDo,
  setStatus,
  setToDos,
  toDos,
}: ToDoFormProps): JSX.Element => {
  const [input, setInput] = useState('')
  const toDoInput = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    toDoInput?.current?.focus()
  }, [])

  useEffect(() => {
    if (editToDo) {
      setInput(editToDo.text)
      toDoInput?.current?.focus()
    } else {
      setInput('')
    }
  }, [setInput, editToDo])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const isEmptyString = (string: string) => {
      if (!string || /^\s*$/.test(string)) {
        return true
      } else {
        return false
      }
    }
    if (isEmptyString(input)) return

    if (!editToDo) {
      setToDos([...toDos, { text: input, id: uuidv4(), completed: false }])
      setInput('')
    } else {
      updateToDo(input, editToDo.id)
    }
  }

  const statusHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setStatus(e.currentTarget.value as StatusType)
  }

  const updateToDo = (text: string, id: string): void => {
    const newToDos = toDos.map((item: ToDoProps) => {
      if (item.id === id) {
        return { ...item, text: text }
      } else {
        return item
      }
      // item.id === id ? { ...item, text: text } : item
    })
    setToDos(newToDos)
    setEditToDo(null)
  }

  return (
    <>
      <Col xs={12} md={6} className="mb-3">
        <Form onSubmit={handleSubmit} className="shadow-sm">
          <InputGroup size="lg">
            <FormControl
              type="text"
              ref={toDoInput}
              onChange={handleChange}
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
              {!editToDo ? <BsPlusLg size="2rem" /> : <BsFillPencilFill size="2rem" />}
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

export default ToDoForm
