import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  border-color: rgb(82, 0, 82);
  border-radius: 5px;
  &:hover {
    background-color: purple;
    color: white;
  }
`;

class Styled extends React.Component {
  render() {
    return (
      <div>
        <Button>Go Heroku</Button>
      </div>
    );
  }
}

export default Styled;
