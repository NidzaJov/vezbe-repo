import { useSelector, useDispatch } from 'react-redux';
import { editTodo, enterEditMode } from '../actions/todosActions';
import { useState } from 'react';

export default function EditForm(props) {
    const todoToEdit = useSelector(state => state.todos.editedTodo);
    const [editedTodo, setEditedTodo] = useState(todoToEdit);
    const dispatch = useDispatch();

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
                
            </div>
            
        </div>
        </>
    )
}