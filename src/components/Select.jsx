import React from 'react';

class Select extends React.Component {
  handleChange = (e) => {
    this.props.onSelectChange(e.target.value);
  };

  render() {
    const listItems = this.props.items.map((item) => <Option value={item}/>);

    return(
      <div>
        <select onChange={this.handleChange}>
          {listItems}
        </select>
      </div>
    );
};
}

class Option extends React.Component {
  render(){
    const value = this.props.value;
    const name = value.charAt(0).toUpperCase() + value.slice(1);

    return(<option value={value}>{name}</option>);
  };
}

export default Select;

