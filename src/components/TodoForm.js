import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("Props passed down to the TodoForm component", props);
    this.state = {
      task: "",
    };
  }

  render() {
    return (
      <div>
        <h2>This is the TodoForm Component</h2>
        <form>
          <label htmlFor="task">
            <input
              type="text"
              id="task"
              name="task"
              placeholder="Enter new item"
            />
          </label>
          <br />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
