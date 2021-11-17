export default function TodoItem(props) {
    return (
        <div>
            <input 
                type="checkbox"
                //checked={props.todo.done}
                //onChange={props.toggleItem}
            />
            <span>{props.todo.title}</span>
            <button 
            // onClick={props.deleteItem}
            >X
            </button>
        </div>
    )
}