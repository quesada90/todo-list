import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      TO-DO
      <p className='CounterText'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </p>
    </h1>    
  );
}

export { TodoCounter };
