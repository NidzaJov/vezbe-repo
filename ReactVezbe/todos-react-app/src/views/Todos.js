import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../actions/authActions";
import MainLayout from "./MainLayout";
import { getAllTodos } from '../actions/todosActions';
import { TodoList } from "../components/TodoList";
import  TodoForm  from "../components/TodoForm";
import SearchForm from '../components/SearchForm';

export default function Todos() {
    const dispatch = useDispatch();
    const list = useSelector(state => state.todos.list);
    const searchTerm = useSelector(state => state.todos.searchTerm)

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch])

    return (
        <MainLayout title={'My Todos'} buttonText={'Logout'} callback={() => { dispatch(logout()) }}>
            <SearchForm searchTerm={searchTerm}/>
            <TodoForm/>
           <TodoList todoList={list} key={list._id} />
        </MainLayout>
    )
}