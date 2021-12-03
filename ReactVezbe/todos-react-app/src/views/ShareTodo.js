import { useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './MainLayout';
import { logout } from '../actions/authActions';
import { getAllUsers } from '../actions/userActions';
import UserItem from '../components/UserItem';

export default function ShareTodo() {
    
    const { todoId } = useParams();
    const todo = useSelector(state => state.todos.list.find(todo => todo._id === todoId));
    const usersList = useSelector(state => state.users.usersList.filter( user => user._id !== todo.owner));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    return (
        <div className="share-todo-view-panel">
            <MainLayout title={'Share todo'} buttonText={'Logout'} callback={() => { dispatch(logout()) }}>
                <div className="share-todo-root">
                    <h2>{todo.title}</h2>
                    <div className="user-item-list">
                        {usersList.map((item, idx) => <UserItem todo={todo} user={item} key={idx}>{item.name}</UserItem>)}
                    </div>

                </div>
            </MainLayout>
            
        </div>
    )
}