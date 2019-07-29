import React from "react";
import PropTypes from "prop-types";

class MessageItem extends React.Component {
  render() {
    const { text } = this.props;
    return <li>{text}</li>;
  }
}

export default MessageItem;

MessageItem.propTypes = {
  text: PropTypes.string
};
