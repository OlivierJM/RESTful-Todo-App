import React, { Fragment, useEffect, useState } from 'react';

// prefer to use named functions for components than allow functions, they are easier to debug
const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3001/todo');
      const results = await response.json();
      setTodos(results);
      console.log(results);
    } catch (error) {
      console.error(`message : ${error.message}`);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  // use camelCase for variables whenever you can
  // forEach does not return anything, it just loops through an array
  // when using => you either immediately return using these ()
  // or explicitly return with the keyword
  const ListData = todos.map((todo) => (
    // key needs to be put at the root of every returned element not the child
    <tr key={todo.id}>
      <td>{todo.description}</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  ));

  return (
    <Fragment>
      <h2>Todo List</h2>

      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{ListData}</tbody>
      </table>
    </Fragment>
  );
};
export default ListTodos;
