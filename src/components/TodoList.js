// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: "",
    };
  }

  render() {
    return (
      <div>
        <h2>This is the TodoList component. </h2>
      </div>
    );
  }
}

export default TodoList;
