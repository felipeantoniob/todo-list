import ToDo from './ToDo'
import { ToDoProps } from '../interfaces'

const ToDoList = ({ toDos, setToDos, filteredToDos, setEditToDo }) => {
  return (
    <>
      {filteredToDos.map((toDo: ToDoProps) => (
        <ToDo
          key={toDo.id}
          setToDos={setToDos}
          toDos={toDos}
          toDo={toDo}
          text={toDo.text}
          setEditToDo={setEditToDo}
        />
      ))}
    </>
  )
}

export default ToDoList
