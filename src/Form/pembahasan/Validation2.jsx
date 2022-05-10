import React from 'react';

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

export default class Validation2 extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (email.length === 0) {
      alert('Email tidak boleh kosong');
    }
  };

  render() {
    const style = {
      width: '400px',
      margin: '100px auto 0',
      border: '1px solid black',
      padding: '10px',
    };
    return (
      <div style={style}>
        <h4>Login Page </h4>
        <form onSubmit={this.handleSubmit}>
          <Input type="email" name="email" label="Email" onChange={(value) => this.setState({ email: value })} />
          <Input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
