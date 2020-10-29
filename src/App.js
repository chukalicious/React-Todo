import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
/* 
const todoList = [
  {

  }
] */

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    //need to put an array somewhere
    //the todos is going to be a list of strings
    this.state = [
      {
        task: "what is this?",
      },
    ];
  }

  getTodo = (todo) => {
    this.setState([
      {
        task: todo,
        id: new Date(),
        completed: false,
      },
    ]);
  };
  handleSubmit = () => {};

  render() {
    console.log(
      "state from the App component to the Form component: ",
      this.getTodo
    );
    console.log("All the state in the app component: ", this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm getTodo={this.getTodo} />
        <TodoList todo={this.state} />
      </div>
    );
  }
}

export default App;
