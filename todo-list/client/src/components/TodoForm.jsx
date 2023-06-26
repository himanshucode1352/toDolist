import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState({});

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText({...text,
          [e.target.name]: e.target.value
        });
      };
      console.log(text)

    return (
        <form className="form" >
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                name="name"
                value={text.name}
            />
            <br/>
              <input  
                placeholder="description..."
                className="input"
                name="description"
                onChange={onInputChange}
                value={text.description}
            />
            <button onClick={handleClick}>submit</button>
        </form>
    )
}

export default TodoForm;