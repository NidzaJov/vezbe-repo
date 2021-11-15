import TodoItem  from './TodoItem'

export function TodoList(props) {
    const list = props.todoList;

    return (
        <div>
            <h1>{list.title} - {list.lastModified}</h1>
            {list.items.map(item => <TodoItem todo={item}/>)}
        </div>
    )
}