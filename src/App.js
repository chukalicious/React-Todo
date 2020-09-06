import React from "react";
import Todo from "./components/Todo";
import "./components/Todo.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = [
      {
        task: "",
        id: Date.now(),
        completed: false,
      },
    ];
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //event on add button
  addItem = (e) => {
    e.preventDefault();
    console.log("addItem handler");
    this.setState({
      task: "",
      id: Date.now(),
      completed: false,
    });
    console.log("this.state after clicking the add button", this.state);
  };

  //event on clicking completed button
  clearCompleted = (e) => {
    e.preventDefault();
    console.log("clear completed handler");
  };

  handleInputChange = (e) => {
    e.persist();
    const newTask = {
      ...this.state,
      [e.target.name]: e.target.value,
    };
    this.setState(newTask);
    console.log("newTask", newTask);
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to your Todo App!</h1>
        <Todo />
        <TodoList taskData={this.state} />
        <TodoForm
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
