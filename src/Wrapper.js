import React from "react";

function Wrapper(WrappedComponent) {
  return class extends React.Component {
    state = {
      list: null
    };

    componentDidMount() {
      const { data } = this.props;
      fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/${data}/`)
        .then(response => response.json())
        .then(response => this.setState({ list: response.results }));
    }

    render() {
      return <WrappedComponent {...this.props} list={this.state.list} />;
    }
  };
}

export default Wrapper;
