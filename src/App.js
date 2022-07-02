import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todos, todosozgar] = useState([])

  useEffect(function () {
    fetch(` https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(json => todosozgar(json));
  }, [])

  console.log(todos)

  return (

    <div className='App'>

      {todos.map(todo =>
        <div className='container' key={todo.id}>


          <table >
            <tr>
              <th>ID</th>
              <th>Completed</th>
              <th>Title</th>
            </tr>
            <tr>
              <td>{todo.id}</td>
              <td>{todo.comleted}</td>
              <td>{todo.title}</td>
            </tr>
          </table>
          <h3>  malumot</h3>






        </div>)}


    </div>
  );
}

export default App;
