import { deleteTodo, toggleTodo } from "../actions/todosActions";
import { useDispatch } from "react-redux";

export default function TodoItem(props) {
    const dispatch = useDispatch();
    const handleDeleteTodo = () => {
        dispatch(deleteTodo(props.todo._id))
    }
    const toggle = (e, item) => {
        dispatch(toggleTodo(item));
        e.stopPropagation();
    }

    return (
        <div>
            <input 
                type="checkbox"
                checked={props.todo.done}
                onChange={(e) => toggle(e,props.todo)}
            />
            <span>{props.todo.title}</span>
            <button 
            onClick={handleDeleteTodo}
            >X
            </button>
        </div>
    )
}