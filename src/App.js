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
    this.state = {
      todoList: [
        {
          task: "what is this?",
          id: new Date(),
          completed: false,
        },
      ],
    };
  }

  getTodo = (todo) => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { task: todo, id: new Date(), completed: false },
      ],
    });
  };

  handleSubmit = () => {};

  render() {
    console.log("All the state in the app component: ", this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm getTodo={this.getTodo} />
        <TodoList todo={this.state.todoList} />
      </div>
    );
  }
}

export default App;
