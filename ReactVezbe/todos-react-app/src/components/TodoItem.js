import { deleteTodo } from "../actions/todosActions";
import { useDispatch } from "react-redux";

export default function TodoItem(props) {
    const dispatch = useDispatch();
    const handleDeleteTodo = () => {
        dispatch(deleteTodo(props.todo._id))
    }

    return (
        <div>
            <input 
                type="checkbox"
                checked={props.todo.done}
                onChange={props.toggleItem}
            />
            <span>{props.todo.title}</span>
            <button 
            onClick={handleDeleteTodo}
            >X
            </button>
        </div>
    )
}