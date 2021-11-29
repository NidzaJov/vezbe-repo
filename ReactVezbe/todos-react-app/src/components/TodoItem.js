import { deleteTodo, toggleTodo, enterEditMode } from "../actions/todosActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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

    const history = useHistory();

    const handleShareClick = (todo) => {
        console.log('handling started', props)
        history.push(props.path);
    }

    return (
        <div className="list-item">
            <input 
                type="checkbox"
                checked={props.todo.done}
                onChange={(e) => toggle(e,props.todo)}
            />
            <span>{props.todo.title}</span>
            <button
            onClick={() => handleShareClick(props.todo)}
            > Share
            </button>
            <button
            className='edit-button'
            onClick={() => handleEditClick(props.todo)}
            >Edit</button>
            <button 
            onClick={handleDeleteTodo}
            >X
            </button>
        </div>
    )
}