import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { ToDoProps } from '../interfaces'

const ToDoForm = ({ toDos, setToDos, setStatus, editToDo, setEditToDo }) => {
  const [input, setInput] = useState('')

  const toDoInput = useRef(null)

  useEffect(() => {
    toDoInput.current.focus()
  }, [])

  useEffect(() => {
    if (editToDo) {
      setInput(editToDo.text)
      toDoInput.current.focus()
    } else {
      setInput('')
    }
  }, [setInput, editToDo])

  // useEffect(() => {
  //   console.log(editToDo)
  // }, [setInput, editToDo])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input || /^\s*$/.test(input)) {
      return
    }

    if (!editToDo) {
      setToDos([...toDos, { text: input, id: uuidv4(), completed: false }])
      setInput('')
    } else {
      updateToDo(input, editToDo.id, editToDo.completed)
    }
  }

  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.currentTarget.value)
  }

  const updateToDo = (text: string, id: string, completed: boolean) => {
    const newToDos = toDos.map((item: ToDoProps) => {
      if (item.id === id) {
        return { ...item, text: text }
      } else {
        return item
      }
      // item.id === id ? { ...item, text: text } : item
    })

    setToDos(newToDos)
    setEditToDo('')
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
              placeholder="Add a to-do"
              aria-label="Add a to-do"
              aria-describedby="Add a to-do"
              value={input}
              className="py-3 text-input"
            />
            <InputGroup.Append>
              <Button type="submit" size="lg" className="p-3 add-button" variant="secondary">
                {!editToDo ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                  </svg>
                ) : (
                  'Update'
                )}
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Col>
      <Col xs="auto" className="mb-3">
        <select
          className="form-select form-select-lg shadow-sm"
          onChange={statusHandler}
          defaultValue="all"
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
