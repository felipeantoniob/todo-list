export interface ToDoProps {
  completed: boolean
  id: string
  text: string
}

export interface ToDoFormProps {
  editToDo: ToDoProps | null
  setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps | null>>
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>
  setToDos: React.Dispatch<React.SetStateAction<ToDoProps[]>>
  toDos: ToDoProps[]
}

export interface ToDoComponentProps {
  setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps | null>>
  setToDos: React.Dispatch<React.SetStateAction<ToDoProps[]>>
  text: string
  toDo: ToDoProps
  toDos: ToDoProps[]
}

export interface ToDoListProps {
  toDos: ToDoProps[]
  setToDos: React.Dispatch<React.SetStateAction<ToDoProps[]>>
  filteredToDos: ToDoProps[]
  setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps | null>>
  // setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps>>
}

export type StatusType = 'all' | 'completed' | 'uncompleted'
