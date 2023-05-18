import './App.css';

//to get the data from the store we need to use hooks present in react-redux module hence importing them
import { useSelector, useDispatch } from 'react-redux';

//importing the defined function to perform operation using useDispatch hook
import { incNumber, decNumber } from './actions/index';

function App() {
  //extracting  the state from the store using useSelector
  const myState = useSelector((state) => {
    return state.changeTheNumber;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div className='container'>
        <h1>Increment or Decrement Counter</h1>
        <h3>React and Redux</h3>
        <div className='quantity '>
          <button
            className='decrement '
            title='Decrement'
            onClick={() => {
              dispatch(decNumber());
            }}
          >
            <span>-</span>
          </button>
          <input name='quantity' type='text' value={myState} />
          <button
            className='increment'
            title='Increment'
            onClick={() => {
              dispatch(incNumber(5));
            }}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
