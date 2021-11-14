import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './views/Login';

export default function App() {
  
  const todosList = useSelector(
    state => state.todos.list
  );

  const todosItems = todosList.map(
    item => (<TodoItem todo={item} />)
  )

  const loggedIn = useSelector(state => state.auth.loggedIn);

  return (
    <>
      <h1>Todo App</h1>
      
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path='/register'>
          Register
        </Route>

        <Route path="/todos">
          {
            loggedIn ?  (
            <>
            <div>
              {todosItems}
            </div>
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