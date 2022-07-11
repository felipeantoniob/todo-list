import { motion } from 'framer-motion'

import Todo from './Todo'

import { stagger } from '../animations/index'
import { TodoProps, TodoListProps } from '../interfaces'

const TodoList = ({
  editTodo,
  setEditTodo,
  setInput,
  setTodos,
  todoInputRef,
  todos,
  visibleTodos,
}: TodoListProps): JSX.Element => {
  return (
    <motion.div variants={stagger} data-cy="todo-list">
      {visibleTodos.map((todo: TodoProps) => (
        <Todo
          editTodo={editTodo}
          key={todo.id}
          setEditTodo={setEditTodo}
          setInput={setInput}
          setTodos={setTodos}
          todo={todo}
          todoInputRef={todoInputRef}
          todos={todos}
        />
      ))}
    </motion.div>
  )
}

export default TodoList
