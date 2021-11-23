import { deleteTodo, toggleTodo, enterEditMode } from "../actions/todosActions";
import { useDispatch, } from "react-redux";

export default function TodoItem(props) {
    const dispatch = useDispatch();
    const handleDeleteTodo = () => {
        dispatch(deleteTodo(props.todo._id))
    }
    const toggle = (e, item) => {
        dispatch(toggleTodo(item));
        e.stopPropagation();
    }
    
    const handleEditClick = (todo) => {
        dispatch(enterEditMode(todo))
    }

    return (
        <div class="list-item">
            <input 
                type="checkbox"
                checked={props.todo.done}
                onChange={(e) => toggle(e,props.todo)}
            />
            <span>{props.todo.title}</span>
            <button
            class='edit-button'
            onClick={() => handleEditClick(props.todo)}
            >Edit</button>
            <button 
            onClick={handleDeleteTodo}
            >X
            </button>
        </div>
    )
}