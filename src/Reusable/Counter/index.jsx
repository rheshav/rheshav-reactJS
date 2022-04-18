import React from 'react';
// import { Button } from 'bootstrap';
import styled from 'styled-components';
import { useState } from 'react';

const Qty = styled.p`
  font-size: 22px;
  width: 600px;
`;

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: darkslategrey;
  background-color: lightgreen;
  text-align: center;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;
// Functional Component
// const Counter = () => {
//   const [value, setValue] = useState(0);
//   const plusOne = () => {
//     setValue(value + 1);
//   };
//   const minusOne = () => {
//     if (value > 0) {
//       setValue(value - 1);
//     }
//   };

// Class Component
class Counter extends React.Component {
  state = {
    value: 0,
  };
  plusOne = () => {
    this.setState({ value: this.state.value + 1 }, () => this.props.receiveValue(this.state.value));
  };
  minusOne = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 }, () => this.props.receiveValue(this.state.value));
    }
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Button onClick={this.minusOne}>-</Button>
        <Qty> {this.state.value} </Qty>
        <Button onClick={this.plusOne}>+</Button>
      </div>
    );
  }
}

export default Counter;
