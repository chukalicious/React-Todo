import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleChange = (e) => {
    console.log("from inside the handleChange fn: ", e.target.value);
    this.setState({ input: e.target.value });
  };

  addingTodo = (e) => {
    this.props.getTodo(this.state.input);
  };

  postTodo = () => {};

  render() {
    console.log("this is the local state of the Form component: ", this.state);
    return (
      <div>
        <h2>This is the Todo Form Component</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="todo"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button onClick={this.addingTodo}>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
