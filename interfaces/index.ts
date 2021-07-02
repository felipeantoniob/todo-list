export type ToDoProps = {
  text: string
  id: string
  completed: boolean
}

export type ToDoFormProps = {
  editToDo: ToDoProps
  setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps>>
  setStatus: React.Dispatch<React.SetStateAction<string>>
  setToDos: React.Dispatch<React.SetStateAction<ToDoProps[]>>
  toDos: ToDoProps[]
}

export type ToDoComponentProps = {
  setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps>>
  setToDos: React.Dispatch<React.SetStateAction<ToDoProps[]>>
  text: string
  toDo: ToDoProps
  toDos: ToDoProps[]
}

export type ToDoListProps = {
  toDos: ToDoProps[]
  setToDos: React.Dispatch<React.SetStateAction<ToDoProps[]>>
  filteredToDos: ToDoProps[]
  setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps>>
}
