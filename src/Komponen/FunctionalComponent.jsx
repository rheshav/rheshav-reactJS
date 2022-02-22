import { useState } from 'react';

const FunctionalComponent = ({ nama }) => {
  const [value, setValue] = useState(0);
  const plusOne = () => {
    setValue(value + 1);
  };
  const minusOne = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div>
      <h1>Coba Functional Component</h1>
      <h1>Coba {nama}</h1>
      <button onClick={minusOne}> - </button>
      <span>
        {''} {value} {''}
      </span>
      <button onClick={plusOne}> + </button>
    </div>
  );
};

FunctionalComponent.defaultProps = { nama: 'User' };
export default FunctionalComponent;
