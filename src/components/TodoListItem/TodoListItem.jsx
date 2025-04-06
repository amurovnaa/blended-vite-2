import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text.jsx';
const TodoListItem = ({ id, text, index, onChangeList, onEdit }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => onChangeList(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} onClick={() => onEdit({ id, text })} />
      </button>
    </div>
  );
};

export default TodoListItem;
