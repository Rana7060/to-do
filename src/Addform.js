import React from "react";

class Addform extends React.Component {
  state = {
    content: " ",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSumit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumit}>
          <label>Add new to-do:</label>
          <input
            onChange={this.handleChange}
            value={this.state.content}
            type="text"
          ></input>
        </form>
      </div>
    );
  }
}
export default Addform;
