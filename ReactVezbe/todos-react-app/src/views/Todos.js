import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../actions/authActions";
import MainLayout from "./MainLayout";
import { getAllTodos } from '../actions/todosActions';
import { TodoList } from "../components/TodoList";
import  TodoForm  from "../components/TodoForm";
import SearchForm from '../components/SearchForm';
import EditForm from '../components/EditForm';
import classNames from 'classnames';
import Notifications from '../components/Notifications';

export default function Todos() {
    const dispatch = useDispatch();
    const list = useSelector(state => state.todos.list).slice().sort((a, b) => b.lastModified.localeCompare(a.lastModified));
    const searchTerm = useSelector(state => state.todos.searchTerm);
    const [showSearch, setShowSearch] = useState(false);
    const editMode = useSelector(state => state.todos.editMode)

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch])
    
    
    return (
        <MainLayout title={'My Todos'} buttonText={'Logout'} callback={() => { dispatch(logout()) }} >
            <div className={classNames('todos-root', {'darkened': editMode})}>
            {showSearch?
                <button onClick={() => setShowSearch(!showSearch)} 
                >&gt;</button>
                :<button onClick={() => setShowSearch(!showSearch)} 
                >V</button>
            }
            
            {showSearch? <SearchForm searchTerm={searchTerm}/> : <></>} 

            {editMode? <EditForm 
                
            /> : <></>}

            <TodoForm/>
           <TodoList todoList={list} key={list._id} />
           <Notifications/>
            </div>
            
        </MainLayout>
    )
}