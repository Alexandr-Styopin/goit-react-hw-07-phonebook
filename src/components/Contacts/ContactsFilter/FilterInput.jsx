import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../../redux/phonebookSlice';

export default function FilterInput() {
  // const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const handlerFilterValue = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        // value={filter}
        onChange={handlerFilterValue}
      />
    </label>
  );
}
