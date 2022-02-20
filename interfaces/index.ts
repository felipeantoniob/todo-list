export type ToDoProps = {
  completed: boolean
  id: string
  text: string
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
  // setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps>>
  // setEditToDo: React.Dispatch<React.SetStateAction<ToDoProps>>
}
