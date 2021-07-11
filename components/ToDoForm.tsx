import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { ToDoProps, ToDoFormProps } from '../interfaces'

const ToDoForm = ({
  toDos,
  setToDos,
  setStatus,
  editToDo,
  setEditToDo,
}: ToDoFormProps): JSX.Element => {
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (!input || /^\s*$/.test(input)) {
      return
    }

    if (!editToDo) {
      setToDos([...toDos, { text: input, id: uuidv4(), completed: false }])
      setInput('')
    } else {
      updateToDo(input, editToDo.id)
    }
  }

  const statusHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setStatus(e.currentTarget.value)
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
            />
            <InputGroup.Append>
              <Button
                type="submit"
                size="lg"
                className="p-3 add-button"
                variant="secondary"
                aria-label="Add to-do"
              >
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
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                    {/* Update */}
                  </div>
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
          onBlur={statusHandler}
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
