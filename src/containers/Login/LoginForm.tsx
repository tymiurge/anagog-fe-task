import * as React from 'react'
import { Form, Input, Button } from 'semantic-ui-react';
import { forms } from '../../hocs/forms'

const LoginForm: React.FunctionComponent<any> = (props) => (
  <Form style={{width: '350px'}}>
    
    <forms.Field {...forms.semanticConfig('input', 'login')} >
      <Form.Input placeholder='Login...' />
    </forms.Field>
    <forms.Field {...forms.semanticConfig('input', 'password')} >
      <Form.Input placeholder='Password...' />
    </forms.Field>

    <div style={{marginTop: '10px'}}>
      <forms.Submitter><Button size='mini' color='blue'>Submit</Button></forms.Submitter>
    </div>
  </Form>
)

export default forms.formHoc(LoginForm)