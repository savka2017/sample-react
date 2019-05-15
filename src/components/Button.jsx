import React from 'react';

class Button extends React.Component {
  buttonStyle =  {
    width: '100px',
    height: '40px',
    color: 'yellow',
    backgroundColor: 'blue'
  };

  handleClick = () => {
    const item = this.props.item.charAt(0).toUpperCase() + this.props.item.slice(1);
    alert("You prefer " + item + " for " + this.props.money);
  };

  render() {
    return(
      <button
        style={this.buttonStyle}
        onClick={this.handleClick}>{this.props.caption}
      </button>
    );
  };
}

export default Button;
