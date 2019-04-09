import React from 'react'

import { FormContextConsumer } from './formHoc'

class Canceller extends React.Component {
  render () {
    return (
      <FormContextConsumer>
        {
          ({onClose}) => (
            React.cloneElement(this.props.children, {onClick: onClose})
          )
        }
      </FormContextConsumer>
    )
  }
}

export default Canceller