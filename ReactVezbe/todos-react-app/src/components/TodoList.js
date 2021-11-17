import TodoItem  from './TodoItem'

export function TodoList(props) {
    const list = props.todoList;

    return (
        <div>
            {list.map((item, index) => <TodoItem todo={item} key={index} />)}
        </div>
    )
}