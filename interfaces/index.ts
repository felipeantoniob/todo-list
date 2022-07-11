export interface TodoProps {
  completed: boolean
  id: string
  text: string
}

export interface TodoFormProps {
  editTodo: TodoProps | null
  input: string
  setEditTodo: React.Dispatch<React.SetStateAction<TodoProps | null>>
  setInput: React.Dispatch<React.SetStateAction<string>>
  setStatus: React.Dispatch<React.SetStateAction<FilterType>>
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
  todoInputRef: React.MutableRefObject<HTMLInputElement | null>
  todos: TodoProps[]
}

export interface TodoItemProps {
  editTodo: TodoProps | null
  setEditTodo: React.Dispatch<React.SetStateAction<TodoProps | null>>
  setInput: React.Dispatch<React.SetStateAction<string>>
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
  todo: TodoProps
  todoInputRef: React.MutableRefObject<HTMLInputElement | null>
  todos: TodoProps[]
}

export interface TodoListProps {
  editTodo: TodoProps | null
  setEditTodo: React.Dispatch<React.SetStateAction<TodoProps | null>>
  setInput: React.Dispatch<React.SetStateAction<string>>
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
  todoInputRef: React.MutableRefObject<HTMLInputElement | null>
  todos: TodoProps[]
  visibleTodos: TodoProps[]
}

export type FilterType = 'all' | 'completed' | 'uncompleted'
