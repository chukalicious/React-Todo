// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log("these are the props sent to the TodoList component: ", props);
  }
  render() {
    return (
      <div>
        <h2>This is the TodoList Component</h2>
        {console.log("taskData", this.props.taskData)}
        {this.props.taskData.map((task) => {
          return (
            <div key={task.id}>
              <p>Task: {task.task}</p>
              <p>TaskID: {task.id}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
