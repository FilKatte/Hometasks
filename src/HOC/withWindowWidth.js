import React from "react";

function withWindowWidth(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        windowWidth: window.innerWidth
      };
    }
    componentDidMount() {
      window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);
    }

    onResize = () => {
      this.setState({ windowWidth: window.innerWidth });
    };

    render() {
      return (
        <WrappedComponent width={this.state.windowWidth} {...this.props} />
      );
    }
  };
}

export default withWindowWidth;
