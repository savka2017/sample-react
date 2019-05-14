import React from 'react';
import Button from './components/Button';
import Select from './components/Select';

const cars = ['volvo', 'mazda', 'audi', 'renault'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {car: ''};
  };

  handleSelectChange = (car) => {
    this.setState({car: car});
  };
  
  render() {
    return(
      <div>
        <p>This is sample react app</p>
        <Select items={cars} onChange={this.handleSelectChange}/>
        <p>Select item above and click button</p>
      	<Button caption='Click here' item = {this.state.car}/>
      </div>
    );
  };
}

export default App;

