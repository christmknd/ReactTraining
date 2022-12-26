import TodoForm from "../components/todolist/TodoForm";
import '../App.css';

function Todo () {

    return (
        <div className="todolist">
            <h1>Todolist App</h1>
            <TodoForm/>
        </div>
    )
}

export default Todo;