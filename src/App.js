import React from 'react';
import Homepage from './app/components/Homepage/Homepage';
import rootStore from "./app/reudx/store";

function App(props) {
  console.log('update');
  const state = rootStore.getState();
  return (
      <Homepage {...props} {...state}/>
  );
}

export default App;
