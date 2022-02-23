import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

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
