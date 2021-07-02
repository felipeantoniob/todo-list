import { motion } from 'framer-motion'
import { Button, ButtonGroup, Form, ListGroup } from 'react-bootstrap'
import { fadeInUp } from '../animations/index'
import { ToDoProps, ToDoComponentProps } from '../interfaces'

const ToDo = ({ setToDos, toDos, toDo, text, setEditToDo }: ToDoComponentProps): JSX.Element => {
  const completeToDo: React.ChangeEventHandler<HTMLInputElement> = () => {
    setToDos(
      toDos.map((item: ToDoProps) => {
        if (item.id === toDo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const updateToDo: React.MouseEventHandler<HTMLButtonElement> = () => {
    const findToDo = toDos.find((element: ToDoProps) => element.id === toDo.id)
    setEditToDo(findToDo)
  }

  const deleteToDo: React.MouseEventHandler<HTMLButtonElement> = () => {
    setToDos(toDos.filter((element: ToDoProps) => element.id !== toDo.id))
  }

  return (
    <>
      <motion.div variants={fadeInUp}>
        <ListGroup.Item className="d-flex mb-3 rounded p-0 border align-items-center shadow">
          <Form.Check type="checkbox" aria-label="Complete to-do" className="ms-3">
            <Form.Check.Input type="checkbox" className="checkbox" onChange={completeToDo} />
          </Form.Check>
          <h3 className={toDo.completed ? ' mx-3 completed overflow-auto' : 'mx-3 overflow-auto'}>
            {text}
          </h3>

          <ButtonGroup size="lg" className="ms-auto">
            <Button
              onClick={updateToDo}
              className="border-0 p-3 update-button"
              aria-label="Update to-do"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
            </Button>
            <Button
              onClick={deleteToDo}
              className="border-0 p-3  delete-button"
              aria-label="Delete to-do"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
              </svg>
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      </motion.div>
    </>
  )
}

export default ToDo
