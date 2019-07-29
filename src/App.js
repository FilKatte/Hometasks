import React from "react";
import MessageItem from "./MessageItem";
import "./App.css";

class Message extends React.Component {
  state = {
    value: "",
    message: []
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { value, message } = this.state;
    event.preventDefault();
    value &&
      this.setState({
        message: [...message, { text: value }],
        value: ""
      });
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <ul>
          {message.map((mes, i) => (
            <MessageItem key={i} text={mes.text} />
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>
            Сообщение
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}

export default Message;
