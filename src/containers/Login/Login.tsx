import * as React from 'react'
import { Segment } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import { LoginInfo } from './../../models';
import { Redirect } from 'react-router';

type Props = {
  onSubmit(creds: LoginInfo): void,
  connected: boolean
};

export default class Login extends React.Component<Props> {
  render() {
    console.log('connected = ' + this.props.connected)
    if (this.props.connected) {
      return <Redirect to='/' />
    }
    return (
      <div style={{width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
        <div style={{marginTop: '250px'}}>
          <Segment placeholder>
            <LoginForm onSubmit={this.props.onSubmit}/>
          </Segment>
        </div>
      </div>
    )
  }
}
