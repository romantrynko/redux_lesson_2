import React, { useEffect, useReducer, useState, memo, useCallback, useMemo } from 'react';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + 1, name: state.name + 't' };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

const Test = memo(({ name, onClickHandler }) => {
  console.log('rerender');
  return <h2 onClick={onClickHandler}>Random component</h2>
})


function App() {

  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(10);

  const fn = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);

  const calcSomeHardStuff = () => {
    let val = 0;
    for(let i = 0; i < counter1; i++) {
      console.log(i);
      val++
    }

    return val;
  }

  const someValue = useMemo(()=> calcSomeHardStuff(), [counter1]);

  return (
    <div className='App'>
      <h1 onClick={() => {
        setCounter(counter + 1)
      }}
      >
        Hello {counter} {someValue}
      </h1>
      <Test name='test' onClickHandler={fn} />
    </div>
  );
}

export default App;
 