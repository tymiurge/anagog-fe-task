import React from 'react'

import { FormContextConsumer } from './formHoc'

// TODO: make submitter disabled until changes made
class Submitter extends React.Component {
  render () {
    return (
      <FormContextConsumer>
        {
          ({onSubmit}) => (
            React.cloneElement(this.props.children, {onClick: onSubmit})
          )
        }
      </FormContextConsumer>
    )
  }
}

export default Submitter