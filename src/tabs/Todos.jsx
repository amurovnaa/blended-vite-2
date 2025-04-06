import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: '1', text: 'Practice more' },
          { id: '2', text: 'Get all tasks done on time' },
        ];
  });
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    const newTodo = {
      id: nanoid(),
      text: inputValue,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };
  const deleteToDo = toDoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== toDoId));
  };
  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} onChangeList={deleteToDo} />
    </>
  );
};

export default Todos;
