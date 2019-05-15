import React from 'react';

const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const Option = props => {
  return (<option value={props.value}>{capitalize(props.value)}</option>)
};

const Select = (props) => {
  const listItems = props.items.map((item) => <Option value={item}/>);

  return(
    <div>
      <select onChange={props.handleChange} name={props.name}>
        {listItems}
      </select>
    </div>
  )
};

export default Select;
