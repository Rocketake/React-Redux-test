import { Button } from '../Button/Button';
import css from './TaskForm.module.css';

// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { addTask } from "../../redux/actions.js";

export const TaskForm = () => {
const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask({
      id: crypto.randomUUID(),
	    completed: false,
	    text: form.elements.text.value}))
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
