import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';
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
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

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

  const findTodo = text => {
    return todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
  };

  const handleEditTodo = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateToDo = updatedText => {
    if (findTodo(updatedText)) {
      return alert('Todo already exists!');
    }
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text: updatedText } : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo({});
    console.log('Updated Todo: ', updatedText);
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateToDo={updateToDo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}

      <TodoList
        todos={todos}
        onChangeList={deleteToDo}
        onEdit={handleEditTodo}
      />
    </>
  );
};

export default Todos;
