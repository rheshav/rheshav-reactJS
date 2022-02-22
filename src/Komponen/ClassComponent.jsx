import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  //   this.plusOne = this.plusOne.bind(this);
  //   this.minusOne = this.minusOne.bind(this);
  // }

  state = { value: 0 };

  plusOne = () => {
    this.setState({ value: this.state.value + 1 });
  };
  minusOne = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>Coba Class Component</h1>
        <h2>Coba {this.props.nama}</h2>
        <button onClick={this.minusOne}> - </button>
        <span>
          {''} {this.state.value} {''}
        </span>
        <button onClick={this.plusOne}> + </button>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  nama: PropTypes.string.isRequired,
};
export default ClassComponent;
