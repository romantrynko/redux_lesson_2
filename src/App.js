import React, { useEffect, useReducer } from 'react';

const initialState = {
  count: 0,
  name: 'test',
  token: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, name: state.name + 't' };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {

  // const [counter, setCounter] = useState(0);
  // const [counter1, setCounter1] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({state});

  // useEffect(() => {}, [counter])

  return (
    <div className='App'>
      <h1 onClick={() => {
        dispatch({type: 'increment', payload: [1,2,3]});
      }}>Hello {state.count} - {state.name}</h1>
    </div>
  );
}

export default App;
