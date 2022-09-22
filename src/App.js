import React , {Component} from 'react';
import './App.css';

import Path from './components/shared/Paths';


function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        <h1 className='Main'>Bugzilla Project</h1>
      </header>
      <Path />
    </div>
  );
}
export default App;