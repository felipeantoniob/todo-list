import { motion } from 'framer-motion'
import { stagger } from '../animations/index'
import { ToDoProps, ToDoListProps } from '../interfaces'
import ToDo from './ToDo'

const ToDoList = ({ toDos, setToDos, filteredToDos, setEditToDo }: ToDoListProps): JSX.Element => {
  return (
    <motion.div variants={stagger}>
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
    </motion.div>
  )
}

export default ToDoList
