import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      TO-DO
      <p className='CounterText'>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </p>
    </h1>    
  );
}

export { TodoCounter };
