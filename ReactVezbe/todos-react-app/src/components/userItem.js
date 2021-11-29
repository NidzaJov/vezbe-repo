import { useDispatch } from "react-redux"
import { shareTodoWithUser } from "../actions/todosActions";

export default function UserItem(props) {
    const dispatch = useDispatch();
    const handleShare = () => {
        dispatch(shareTodoWithUser({ todoId: props.todo._id, userId: props.user._id}))
    }

    return (
        <div className="user-item">
            <span>{props.user.name? props.user.name : props.user.firstName} {props.user.name? null : props.user.lastName}</span>
            <button onClick={handleShare}>Share</button>
        </div>
    )
}