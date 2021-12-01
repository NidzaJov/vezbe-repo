import { useSelector, useDispatch } from 'react-redux';
import { editTodo, enterEditMode } from '../actions/todosActions';
import { useState, useEffect } from 'react';
import UserItem from './UserItem';
import { getAllUsers } from '../actions/userActions';

export default function EditForm(props) {
    const todoToEdit = useSelector(state => state.todos.editedTodo);
    const usersList = useSelector(state => state.users.usersList)
    const [editedTodo, setEditedTodo] = useState(todoToEdit);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    return (
        <>
        <div className='stand-in-front'>
            <div className='edit-card'>
                <input 
                    type="text"
                    value={editedTodo.title}
                    onChange={(e) => setEditedTodo({...todoToEdit, title: e.target.value})}
                    />
                <div>
                    <button
                        onClick={() => dispatch(editTodo(editedTodo))}
                    >Save</button>
                    <button
                        onClick={() => dispatch(enterEditMode(null))}
                    >Cancel</button>
                </div>
                <div>
                    {todoToEdit.sharedWith.map((item, idx) => <UserItem key={idx} user={usersList.find(user => user._id === item)}></UserItem>)}
                </div>
                
            </div>
            
        </div>
        </>
    )
}