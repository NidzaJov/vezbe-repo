import { deleteTodo, toggleTodo, enterEditMode } from "../actions/todosActions";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

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
        history.push(props.path);
    }

    return (
        <div className="list-item">
            <div className="list-content">
                <input 
                    type="checkbox"
                    checked={props.todo.done}
                    onChange={(e) => toggle(e,props.todo)}
                />
                <span>{props.todo.title}</span>
                <TimeAgo timestamp={props.todo.lastModified}></TimeAgo>
                
                <Link to={`/todos/${props.todo._id}`} className='list-item-link'>View todo</Link>
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
            <div>
                <ReactionButtons todo={props.todo}></ReactionButtons>
            </div>
        </div>
    )
}