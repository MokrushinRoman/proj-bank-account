import { useDispatch } from 'react-redux';
import { convert } from 'redux/operations';
export function ConvertForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.currentTarget.elements.value;
    const [amount, from, , to] = value.split(' ');
    dispatch(convert({ to, from, amount }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input required name="value" placeholder="15 usd in uah" />
      <button type="submit">convert</button>
    </form>
  );
}
