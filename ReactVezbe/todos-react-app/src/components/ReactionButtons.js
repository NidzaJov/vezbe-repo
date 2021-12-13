import { useDispatch, useSelector } from "react-redux"
import { addReaction, getReaction } from "../actions/reactionsActions";
import { addNotification } from "../actions/notificationsActions";
import { useEffect } from 'react';

const reactionEmoji = {
    thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

export default function ReactionButtons({ todo }) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getReaction(todo._id))
    } , [dispatch]);

    const reactionClicked = (key) => {
        dispatch(addReaction({todoId: todo._id, reaction: key}));
        dispatch(addNotification({ receiver: todo.owner, todoId: todo._id, reaction: key}))
    }

    const reaction = useSelector(state => state.reactions.reactionsList.find(reaction => reaction.todoId === todo._id));
   
    if (reaction) {
        return (<div className="reaction-div">{
            Object.keys(reaction).map(key => {
                if(Object.keys(reactionEmoji).includes(key)) {
                    return (
                        <button
                            key={key}
                            type="button" 
                            className="reaction-button"
                            onClick={() => reactionClicked(key)}
                        >
                            {reaction[key]} {reactionEmoji[key]}
                        </button>
                    )
                } else return null
                
            })
        }</div>)
    } else return null
}



