import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todosActions';

export default function TodoForm() {
    const [textValue, setTextValue] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (textValue) {
            dispatch(addTodo(textValue))
            setTextValue('');
        }
        
    };

    return (
        <div>
            <input
                type={'text'}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo();
                    }
                }}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}