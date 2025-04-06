import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text.jsx';
const TodoListItem = ({ id, text, onChangeList }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{id}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => onChangeList(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
