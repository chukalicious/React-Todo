import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }
  handleChange = (e) => {
    console.log("from inside the handleChange fn: ", e.target.value);
    this.setState({ todo: e.target.value });
    this.props.getTodo(this.state.todo);
  };

  postTodo = () => {};

  render() {
    console.log("this.props from the App component: ", this.props);
    console.log("this is the local state of the Form component: ", this.state);
    return (
      <div>
        <h2>This is the Todo Form Component</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
