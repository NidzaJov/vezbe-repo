import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../actions/userActions';
import MainLayout from './MainLayout';
import { logout } from '../actions/authActions';
import ReactionButtons from '../components/ReactionButtons'


export default function SingleTodo( {match} ) {
    const { todoId } = match.params;
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todos.list.find(todo => todo._id === todoId));
    const usersList = useSelector(state => state.users.usersList);
    
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])
    
    
    console.log(todo);
    console.log(usersList);
    usersList.map(user => console.log(user._id));
    todo.sharedWith.map(id => console.log(id));
    const findUser = (id) => usersList.find(user => user._id.toString() === id);
    const sharedWithList = todo.sharedWith.map((id, idx) => {
        console.log(id, idx);
        console.log(findUser(id));
        return <article key={idx} ><span>{findUser(id).firstName + ' ' + findUser(id).lastName}</span></article>
    })
    const owner = findUser(todo.owner);

    if (!todo) {
        return (
            <MainLayout title="Single Todo" buttonText="Logout" callback={() => { dispatch(logout()) }}>
                <section>
                    <h2>Todo not found!</h2>
                </section>
            </MainLayout>
        )
    }

    return (
        <MainLayout title="Single Todo" buttonText="Logout" callback={() => { dispatch(logout()) }}>
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
                    <div>
                        <ReactionButtons todo={todo}></ReactionButtons>
                    </div>
                    
                </article>
            </section>
        </MainLayout>
    )
}