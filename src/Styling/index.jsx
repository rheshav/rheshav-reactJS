import React from 'react';
import Plain from './Plain';
import Sass from './Sass';
import Title from './Inline';
import Module from './Module';

export default class Styling extends React.Component {
  render() {
    return (
      <div>
        <Module />
      </div>
    );
  }
}
