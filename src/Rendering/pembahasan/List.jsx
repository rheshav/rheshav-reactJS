import React from 'react';

class List extends React.Component {
  state = {
    users: ['Ada', 'Baba', 'Caca'],
  };

  render() {
    return (
      <div>
        <ul>
          {
            /* {this.state.users.map((user, i) => (
            <li key={i}>{user}</li>
          ))} */

            this.state.users.map(function (user, i) {
              return <li key={i}>{user}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default List;
