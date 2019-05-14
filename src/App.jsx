import React from 'react';
import Button from './components/Button';
import Select from './components/Select';

const cars = ['volvo', 'mazda', 'audi', 'renault'];
const currencies = ['USD', 'EUR', 'UAH'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {car: cars[0], currency: currencies[0]};
  };

  handleSelectChange = (name, value) => {
    this.setState({[name]: value});
  };

  render() {
    return(
      <div>
        <p>This is sample react app</p>
        <p>Car's model:</p>
        <Select name="car" items={cars} onSelectChange={this.handleSelectChange}/>
        <p>Currency:</p>
        <Select name="currency" items={currencies} onSelectChange={this.handleSelectChange}/>
        <p>Select items above and click button</p>
      	<Button caption='Click here' item = {this.state.car} money={this.state.currency}/>
      </div>
    );
  };
}

export default App;
