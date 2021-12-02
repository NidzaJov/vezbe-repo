import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../actions/userActions';


export default function SingleTodo( {match} ) {
    useEffect(() => {
        dispatch(getAllUsers());
        console.log('Getting users')
    }, []);

    const { todoId } = match.params;
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todos.list.find(todo => todo._id === todoId));
    const usersList = useSelector(state => state.users.usersList);
    
    const findUser = (id) => usersList.find(user => user._id.toString() === id);
    const sharedWithList = todo.sharedWith.map((id, idx) => <article key={idx} ><span>{findUser(id).name ? findUser(id).name :findUser(id).firstName + ' ' + findUser(id).lastName}</span></article>)
    const owner = findUser(todo.owner);

    if (!todo) {
        return (
            <section>
                <h2>Todo not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article>
                <h2>{todo.title}</h2>
                <h2>{owner.name? owner.name : owner.firstName}</h2>
                {todo.lastModified && <h2>{todo.lastModified}</h2>}
                <input type="checkbox" checked={todo.done}/>
                <div>
                    <h3>Shared with:</h3>
                    {sharedWithList}
                </div>
                
            </article>
        </section>
    )
}