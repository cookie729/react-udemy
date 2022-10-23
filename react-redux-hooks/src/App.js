import { useState } from 'react';
import './App.css';

const App = (props) => {
  // propsをそのまま渡すことができる
  const [state, setState] = useState(props);
  // const [name, setName] = useState(props.name);
  // const [price, setPrice] = useState(props.price);
  const { name, price } = state;

  // const reset =() => {
  //   setPrice(props.price)
  //   setName(props.name)
  // }

  return (
    <>
      <p>
        現在の{name}は、{price}円です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      {/* <button onClick={() => setPrice(price + 1)}>+1</button> */}
      {/* <button onClick={() => setPrice(price - 1)}>-1</button> */}
      <button onClick={() => setState(props)}>Reset</button>
      {/* <button onClick={reset}>Reset</button> */}
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;
