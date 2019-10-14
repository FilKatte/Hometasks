import Select from "react-select";
import React from "react";

class SearchSelect extends React.Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { filmsList } = this.props;
    const { selectedOption } = this.state;

    const options =
      filmsList.length > 0
        ? filmsList.map(obj => {
            return { value: obj.title, label: obj.title };
          })
        : [];

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        isClearable={true}
        options={options}
      />
    );
  }
}

export default SearchSelect;
