import TodoItem  from './TodoItem';
import { useDispatch, useSelector } from 'react-redux'
import { hideCompleted } from '../actions/todosActions';

export function TodoList(props) {
    
    const dispatch = useDispatch();
    const hidenCompleted = useSelector(state => state.todos.hideCompleted);
    console.log(hidenCompleted)
    const list = hidenCompleted? props.todoList.filter(item => item.done === false) : props.todoList;
    console.log(list);
    return (
        <>
        <div>
            <span>Hide completed todos</span>
            <input type="checkbox" 
                onChange={(e) => {
                    dispatch(hideCompleted());
                    e.stopPropagation();
                    }
                }
            />
        </div>
        <div>
            {list.map((item, index) => 
                <TodoItem 
                todo={item} 
                key={index} 
                />
                
            )}
        </div>
        </>
    )
}