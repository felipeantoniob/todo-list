import { motion } from 'framer-motion'
import { Button, ButtonGroup, Form, ListGroup } from 'react-bootstrap'
import { BsXLg, BsFillPencilFill } from 'react-icons/bs'

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
    const selectedToDo = toDos.find((element) => element.id === toDo.id)
    setEditToDo(selectedToDo || null)
    console.log(selectedToDo)
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
              <BsFillPencilFill size="1.5rem" />
            </Button>
            <Button
              onClick={deleteToDo}
              className="border-0 p-3  delete-button"
              aria-label="Delete to-do"
            >
              <BsXLg size="1.5rem" />
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      </motion.div>
    </>
  )
}

export default ToDo
