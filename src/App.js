import React from "react";
import Addform from "./Addform";
import Todos from "./Todos";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "watch the tutorial" },
      { id: 2, content: "push update to github" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };
  render() {
    return (
      <div className="todo-app container  p-3">
        <h1 className="center blue-text display-4 mb-4">To do's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Addform addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
