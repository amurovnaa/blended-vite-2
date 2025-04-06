import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onChangeList, onEdit }) => {
  console.log(todos);
  return (
    <Grid>
      {todos.map((todos, index) => (
        <GridItem key={todos.id}>
          <TodoListItem
            id={todos.id}
            text={todos.text}
            index={index + 1}
            onChangeList={onChangeList}
            onEdit={onEdit}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
