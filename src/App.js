import React, {useState} from 'react';
import Button from './components/Button';
import Select from './components/Select';

const cars = ['volvo', 'mazda', 'audi', 'renault'];
const currencies = ['USD', 'EUR', 'UAH'];

const App = () => {
  const [[car, currency], setValues] = useState([cars[0], currencies[0]]);

  const handleChange = (event) => {
    let {name, value} = event.target;
    setValues(name === 'car' ? [value, currency] : [car, value]);
  };

  return(
    <>
      <p>This is sample react app</p>
      <p>Car's model:</p>
      <Select name="car" items={cars} handleChange={handleChange}/>
      <p>Currency:</p>
      <Select name="currency" items={currencies} handleChange={handleChange}/>
      <p>Select items above and click button</p>
      <Button caption='Click here' item = {car} money={currency}/>
    </>
  )
};

export default App;
