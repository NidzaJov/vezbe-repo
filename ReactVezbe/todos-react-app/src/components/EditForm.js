import { useSelector, useDispatch } from 'react-redux';
import { editTodo, enterEditMode } from '../actions/todosActions';
import { useState, useEffect } from 'react';
import { getAllUsers } from '../actions/userActions';

export default function EditForm(props) {
    const todoToEdit = useSelector(state => state.todos.editedTodo);
    const usersList = useSelector(state => state.users.usersList)
    const [editedTodo, setEditedTodo] = useState(todoToEdit);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    const findUser = (id) => usersList.find(user => user._id === id);
    const sharedWithList = todoToEdit.sharedWith.map((id, idx) => <article key={idx} ><span>{findUser(id).name ? findUser(id).name :findUser(id).firstName + ' ' + findUser(id).lastName}</span></article>)
    
    const usersOptions = usersList.map(user => (
        <option key={user._id} value={user._id}>
            {user.name? user.name : user.firstName + ' ' + user.lastName}
        </option>
    ))
    const onOwnerChanged = (e) => {
        setEditedTodo({...todoToEdit, owner: e.target.value});
    }
    
    const canSave = Boolean(editedTodo.title) && Boolean(editedTodo.owner)
    const saveEditClicked = (editedTodo) => {
        let sharedWithNewOwnerIndex = editedTodo.sharedWith.indexOf(editedTodo.owner)
        if(sharedWithNewOwnerIndex >= 0) {
            editedTodo.sharedWith.splice(sharedWithNewOwnerIndex, 1)
        }
        if (editedTodo.title) {
            dispatch(editTodo(editedTodo))
        } else setMessage('Please, enter some text in empty field before you save.')
    }

    return (
        <>
        <div className='stand-in-front'>
            <div className='edit-card'>
                <input 
                    type="text"
                    value={editedTodo.title}
                    onChange={(e) => setEditedTodo({...todoToEdit, title: e.target.value})}
                    />
                <label htmlFor="todoOwner">Owner:</label>
                <select id="todoOwner" value={editedTodo.owner} onChange={onOwnerChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <div>
                    <button
                        onClick={() => saveEditClicked(editedTodo)
                        }
                        disabled={!canSave}
                    >Save</button>
                    <button
                        onClick={() => dispatch(enterEditMode(null))}
                    >Cancel</button>
                </div>
                <div>
                    {sharedWithList}
                </div>
                
            </div>
            {message && <span>{message}</span>}
            
        </div>
        </>
    )
}