import React from 'react';

class Conditional extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);

    return <div>{this.state.isLoading ? <h1>Loading...</h1> : <h1>Selamat Datang</h1>}</div>;
  }
}

// Cara 3
// const isLogin = false;
// return <div>{isLogin ? <h1>Anda Sudah Login</h1> : <h1>Silahkan Login terlebih dahulu</h1>}</div>;
// Cara 2
// let message = '';
// if (isLogin) {
//   message = 'anda sudah login';
// } else {
//   message = 'Silahkan Login terlebih dahulu';
// }
// return (
//   <div>
//     <h1>{message}</h1>
//   </div>
// );
// Cara 1
// if (isLogin) {
//   return (
//     <div>
//       <h1>Anda Sudah Login</h1>
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <h1>Silahkan Login terlebih dahulu</h1>
//     </div>
//   );
// }

export default Conditional;
