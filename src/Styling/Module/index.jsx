import React from 'react';
import style from './index.module.css';

class Module extends React.Component {
  render() {
    return (
      <div>
        <button className={style.btn + ' ' + style.info}>Go Heroku</button>
      </div>
    );
  }
}

export default Module;
