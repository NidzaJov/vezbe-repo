import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Todos from './views/Todos';

export default function App() {
  
  const todosList = useSelector(
    state => state.todos.list
  );

  const todosItems = todosList.map(
    item => (<TodoItem todo={item} />)
  )

  const loggedIn = useSelector(state => state.auth.loggedIn);
  const registrationStatus = useSelector(state => state.auth.registrationStatus);

  return (
    <>
      <h1>Todo App</h1>
      
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path='/register'>
          {
            registrationStatus
            ? <Redirect to="/login"/>
            : <Register/>
          }
        </Route>

        <Route path="/todos">
          {
            loggedIn ?  (
            <>
            <Todos/>
            <TodoForm/>
            </>
            ) : <Redirect to="/login"/>
          }
          
        </Route>

        <Route path="/">
          <Redirect to="/todos"/>
        </Route>
      </Switch>
    </>
  );
}