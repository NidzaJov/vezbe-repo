import TodoItem  from './TodoItem';
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../actions/todosActions'

export function TodoList(props) {
    const list = props.todoList;
    const dispatch = useDispatch()
    return (
        <div>
            {list.map((item, index) => <TodoItem 
                                            todo={item} 
                                            key={index} 
                                            toggleItem={ () => {
                                                dispatch(toggleTodo(item));
                                            }}/>)}
        </div>
    )
}