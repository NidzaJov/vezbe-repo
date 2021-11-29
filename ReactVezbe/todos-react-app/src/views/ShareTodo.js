import { useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './MainLayout';
import { logout } from '../actions/authActions';
import { getAllUsers } from '../actions/userActions';
import UserItem from '../components/userItem';

export default function ShareTodo() {
    const userList = useSelector(state => state.users.usersList);
    const { todoId } = useParams();
    console.log('param',todoId);
    const todo = useSelector(state => state.todos.list.find(todo => todo._id === todoId));
    console.log('todo', todo);
    console.log(userList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    return (
        <div>
            <MainLayout title={'My Todos'} buttonText={'Logout'} callback={() => { dispatch(logout()) }} path={'/login'}>
                <div className="share-todo-root">
                    <h2>{todo.title}</h2>
                    <div className="user-item-list">
                        {userList.map((item, idx) => <UserItem todo={todo} user={item} key={idx}>{item.name}</UserItem>)}
                    </div>

                </div>
            </MainLayout>
            
        </div>
    )
}