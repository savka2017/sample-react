import React from 'react';

class Button extends React.Component {
  buttonStyle =  {
    width: '100px',
    height: '30px',
    color: 'blue',
    backgroundColor: 'yellow'
  };

  handleClick = () => {
    alert("You prefer " + this.props.car);
  };

  render() {
    return(<button style={this.buttonStyle} onClick={this.handleClick}>{this.props.caption}</button>);
};
}

export default Button;

