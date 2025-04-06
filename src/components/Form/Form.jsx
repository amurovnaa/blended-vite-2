import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.search;
    const value = input.value.trim();

    if (value) {
      onSubmit(value);
      form.reset(); // очищення форми
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
