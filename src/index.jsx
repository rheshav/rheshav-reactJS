import React from 'react';
import ClassComponent from './Komponen/ClassComponent';
import FunctionalComponent from './Komponen/FunctionalComponent';

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama={123}></ClassComponent>
        <FunctionalComponent />
      </div>
    );
  }
}
