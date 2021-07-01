import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import { ToDoProps } from '../interfaces'

const ToDo = ({ setToDos, toDos, toDo, text, setEditToDo }) => {
  const completeToDo = () => {
    setToDos(
      toDos.map((item: ToDoProps) => {
        if (item.id === toDo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const updateToDo = () => {
    const findToDo = toDos.find((element: ToDoProps) => element.id === toDo.id)
    setEditToDo(findToDo)
    // console.log(findToDo)
  }

  const deleteToDo = () => {
    setToDos(toDos.filter((element: ToDoProps) => element.id !== toDo.id))
  }

  return (
    <ListGroup.Item className="d-flex mb-3 rounded p-0 border-0 align-items-center">
      <h3 className={toDo.completed ? ' mx-3 completed' : 'mx-3 '}>{text}</h3>

      <ButtonGroup size="lg" className="ms-auto">
        <Button onClick={completeToDo} variant="outline-success" className="rounded-0 p-3 border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-check-lg"
            viewBox="0 0 16 16"
          >
            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
          </svg>
        </Button>
        <Button onClick={updateToDo} variant="outline-warning" className="border-0 p-3">
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
        </Button>
        <Button onClick={deleteToDo} variant="outline-danger" className="border-0 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  )
}

export default ToDo
