import React from 'react';

const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const Button = props => {
  const handleClick = () =>
    alert('You preffer ' + capitalize(props.item) + ' for ' + props.money);

  return(
    <button onClick={handleClick}>{props.caption}</button>
  )
};

export default Button;
