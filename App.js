import logo from './logo.svg';
import './App.css';

import ParentComponent from './parent-component';

import { createContext, useContext, useState } from 'react';

import AppContext from './context';


function App() {

  const [ user, setUser ] = useState( { name: 'tbear', dob: '2013'});
  const [ cart, setCart ] = useState( {} );

  const contextValue = { user, setUser, cart, setCart };

  return (
    <AppContext.Provider value={ contextValue }>
      <ParentComponent />
    </AppContext.Provider>    
  );
}

export default App;
