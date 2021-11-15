import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../actions/authActions";
import MainLayout from "./MainLayout";
import { getAllTodos } from '../actions/todosActions';
import { TodoList } from "../components/TodoList"

export default function Todos() {
    const dispatch = useDispatch();
    const list = useSelector(state => state.todos.list);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch])

    return (
        <MainLayout title={'My Todos'} buttonText={'Logout'} callback={() => { dispatch(logout()) }}>
           {list.map(todoList => <TodoList todoList={todoList}/>)}
        </MainLayout>
    )
}