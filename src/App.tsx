import React from 'react';
import Simple from './components/simple';
import './App.css';
import ComponentWithContext from './components/componentWithContext';
import Hook from './components/hook';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Simple></Simple>
      <ComponentWithContext></ComponentWithContext>
      <Hook></Hook>
    </div>
  );
};

export default App;
