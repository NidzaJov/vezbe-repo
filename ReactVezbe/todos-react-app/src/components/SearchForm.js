import { useDispatch } from 'react-redux';
import { searchTodos } from '../actions/todosActions';

export default function SearchForm(props) {

    const dispatch = useDispatch();
    

    return (
        <>
            <input 
            type="text"
            placeholder="...Search" 
            onChange = { (e) => {
                console.log(e.target.value)
                dispatch(searchTodos(e.target.value))
                }
            }
            />
        </>
    )
}