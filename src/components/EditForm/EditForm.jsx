import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

const EditForm = ({ updateToDo, cancelUpdate, defaultValue }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.text;
    const updatedText = input.value.trim();

    if (!updatedText) {
      return alert('Enter the todo!');
    }
    updateToDo(updatedText);
    form.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
