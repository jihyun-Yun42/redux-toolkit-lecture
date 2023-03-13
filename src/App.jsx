import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNumber, minusNumber } from './redux/modules/counter';

function App() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onPlusBtnClickHandler = () => {
    dispatch(addNumber(1));
  };

  const onMinusBtnClickHandler = () => {
    dispatch(minusNumber(1));
  };
  return (
    <div>
      {number}
      <button onClick={onPlusBtnClickHandler}>+</button>
      <button onClick={onMinusBtnClickHandler}>-</button>
    </div>
  );
}

export default App;
