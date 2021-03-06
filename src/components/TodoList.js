// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

class TodoList extends React.Component {
  render() {
    console.log(
      "props from the App component to the TodoList component: ",
      this.props
    );
    return (
      <div>
        <h2>This is the TodoList component. </h2>

        {this.props.todo.map((item, index) => (
          <div key={index}>
            <p>{item.task}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
