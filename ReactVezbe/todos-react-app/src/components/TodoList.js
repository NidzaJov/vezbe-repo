import TodoItem  from './TodoItem';
import { useDispatch, useSelector } from 'react-redux'
import { hideCompleted } from '../actions/todosActions';
import { memo } from 'react';

function TodoList(props) {
    
    const dispatch = useDispatch();
    const hidenCompleted = useSelector(state => state.todos.hideCompleted);
    const list = hidenCompleted? props.todoList.filter(item => item.done === false) : props.todoList;
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
        <div className="list">
            {list.map((item, index) => 
                <TodoItem 
                todo={item} 
                key={index} 
                path={`/share/${item._id}`}
                />
                
            )}
        </div>
        </>
    )
}

export default memo(TodoList);