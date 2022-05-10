import React from 'react';
import Plain from './Plain';
import Sass from './Sass';
import Title from './Inline';
import Module from './Module';
import Styled from './StyledComponents';
import Bootstrap from './Bootstrap';

export default class Styling extends React.Component {
  render() {
    return (
      <div>
        <Bootstrap />
      </div>
    );
  }
}
