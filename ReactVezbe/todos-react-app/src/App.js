import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Todos from './views/Todos';
import ShareTodo from './views/ShareTodo';
import './App.css'
import SingleTodo from './views/SingleTodo';

export default function App() {
  
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const registrationStatus = useSelector(state => state.auth.registrationStatus);

  return (
    <div className="App">
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
        <Route path='/todos/:todoId' component={SingleTodo}>
        </Route>
        <Route path="/todos">
          {
            loggedIn ?  (
            <>
            <Todos/>
            </>
            ) : <Redirect to="/login"/>
          }
          
        </Route>
        <Route path="/share/:todoId">
          <ShareTodo></ShareTodo>
        </Route>
        <Route path="/">
          <Redirect to="/todos"/>
        </Route>
      </Switch>
    </div>
  );
}