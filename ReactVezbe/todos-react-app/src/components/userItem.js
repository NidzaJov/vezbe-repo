import { useDispatch, useSelector } from "react-redux"
import { shareTodoWithUser, unShareTodoWithUser } from "../actions/todosActions";



export default function UserItem(props) {
    const dispatch = useDispatch();
    const handleShare = () => {
        dispatch(shareTodoWithUser({ todoId: props.todo._id, userId: props.user._id}))
    }

    const handleUnshare = () => {
        dispatch(unShareTodoWithUser({ todoId: props.todo._id, userId: props.user._id}))
    }
    
    const isSharedWith = useSelector(state => state.todos.list.find(todo => todo._id === props.todo._id).sharedWith.includes(props.user._id));
    console.log(isSharedWith);
    return (
        <div className="user-item">
            <span>{props.user.name? props.user.name : props.user.firstName} {props.user.lastName}</span>
            <span>{isSharedWith.toString()}</span>
            {/*props.todo.sharedWith.includes(props.user._id)*/ isSharedWith ?
            <button onClick={handleUnshare}>Unshare</button> :
            <button onClick={handleShare}>Share</button> }
        </div>
    )
}