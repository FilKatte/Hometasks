import React from "react";
import MessageItem from "./MessageItem";
import { connect } from "react-redux";
import { messageSelector } from "./store/selectors";
import { addMessage } from "./store/duck";
import { removeMessage } from "./store/duck";
import "./style.css";

const mapStateToProps = state => {
  return {
    messages: messageSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: value => dispatch(addMessage(value)),
    removeMessage: id => dispatch(removeMessage(id))
  };
};

class Message extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { addMessage } = this.props;
    const { value } = this.state;
    const now = Date.now();
    if (value) {
      addMessage({ text: value, id: now });
      this.setState({
        value: ""
      });
    }
  };

  removeSubmit = id => {
    const { removeMessage } = this.props;

    removeMessage(+id);
  };

  render() {
    const { value } = this.state;
    const { messages } = this.props;
    return (
      <div>
        <ul>
          {messages &&
            messages.map((mes, i) => (
              <div key={i} className="messageItem">
                <MessageItem text={mes.text} />
                <button
                  className="delete"
                  value={mes.id}
                  onClick={() => this.removeSubmit(mes.id)}
                >
                  x
                </button>
              </div>
            ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>
            Сообщение
            <input type="text" value={value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
