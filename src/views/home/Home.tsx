import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';

import { getCounter } from 'views/home/state/selectors';
import { setCounter } from 'views/home/state/slice';

import './Home.css';

export function Home() {
  // Hooks
  const dispatch = useDispatch();
  const counter = useAppSelector(state => getCounter(state));

  return (
    <div className="home__container">
      <h1>Home</h1>
      <p>
        counter:
        {counter}
      </p>
      <div>
        <button onClick={() => dispatch(setCounter(counter + 1))}>+</button>
        <button onClick={() => dispatch(setCounter(counter - 1))}>-</button>
      </div>
    </div>
  );
}
