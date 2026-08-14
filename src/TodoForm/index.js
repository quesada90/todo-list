import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
   const {
      addTodo,
      setOpenModal,
   } = React.useContext(TodoContext);

   const [newTodoValue, setNewTodoVale] = React.useState('');

   const onSubmit = (event)=> {
         event.preventDefault();
         addTodo(newTodoValue);
         setOpenModal(false);
      };

   const onCancel = () => {
      setOpenModal(false);
   };

   const onChange = (event) => {
      setNewTodoVale(event.target.value);
   };

   return (
      <form onSubmit={onSubmit}>
         <label>New ToDo</label>
         <textarea 
            placeholder="ToDo name"
            value={newTodoValue}
            onChange={onChange}
         />
         <div className="TodoForm-buttonContainer">
            <button 
               type="button"
               className="TodoForm-button TodoForm-button--cancel"
               onClick={onCancel}
            >Cancel</button>
            <button 
               type="submit"
               className="TodoForm-button TodoForm-button--add"
               onClick={onSubmit}
            >Add</button>
         </div>
      </form>
   )
}

export { TodoForm };