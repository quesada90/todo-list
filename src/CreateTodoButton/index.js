import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button 
      className="CreateTodoButton"
      onClick={(event) => {
        console.log('Click en el boton')
      }}
    >+</button>
  );
}

export { CreateTodoButton };
