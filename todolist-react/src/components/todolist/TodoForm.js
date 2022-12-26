import React, { useState } from "react";
import '../../App.css';

function TodoForm () {

    //valeur de l'input 
    const [todo, setTodo] = useState('');
    //tableau contenant tout les tâches 
    const [todos, setTodos] = useState([])

    function handleInputChange(e) {
        setTodo(e.target.value);
      }

      function addTodo(e) {
        // prevent the browser default behavior or refreshing the page on submit
        e.preventDefault();
    
        if (todo !== "") {
          setTodos([...todos,
            {
              id: todos.length + 1,
              text: todo.trim()
            }
          ]);
        }
    
        // clear out the input box
        setTodo("");
      }

  return (
    <div className="todo-form">
        <form onSubmit={addTodo}>
            <input type="text"
                    name="todo"
                    value={todo}
                    onChange={handleInputChange}
                    placeholder="ajouter une tache" />
            <input type="submit" value="Create" />
        </form>

        <div className="todo-list">
            <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoForm;