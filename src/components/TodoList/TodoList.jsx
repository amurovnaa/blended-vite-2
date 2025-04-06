import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onChangeList }) => {
  return (
    <Grid>
      {todos.map(({ id, text }) => (
        <GridItem key={id}>
          <TodoListItem id={id} text={text} onChangeList={onChangeList} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
