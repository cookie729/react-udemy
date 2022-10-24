import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Events';

import EventForm from './EventForm';

// import Event from './Event';
import reducer from '../reducers/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  // console.log(state, "app.js");

  return (
    <>
      <div className='container-fluid'>
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </>
  );
};

export default App;
