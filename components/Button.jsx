'use strict';

import React from 'react';

class Button extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    className: React.PropTypes.string
  }
  static defaultProps = {
    label: 'button',
    className: 'default-class'
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={this.props.className}>
        {this.props.label}
      </div>
    )
  }
}
export default Button
