import React, { useState, useEffect } from 'react'
import { Button, InputGroup, Form, FormControl } from 'react-bootstrap'

const ToDoForm = (props) => {
  const [input, setInput] = useState('')

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])

    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    })

    setInput('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup size="lg" className="mb-3">
        <FormControl
          type="text"
          onChange={handleChange}
          placeholder="Add a task"
          aria-label="Task"
          aria-describedby="Task"
          value={input}
          className="py-3"
        />
        <InputGroup.Append>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="primary"
            size="lg"
            className="p-3 rounded-end"
          >
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
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default ToDoForm
