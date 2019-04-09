import * as React from 'react';
import { Container } from 'semantic-ui-react';
import AppBuildWizard from '../AppBuildWizard/AppBuildWizard';
import Header from './../Header';
import AppSelector from './../AppSelector';
import AppWizard from './../AppWizard';
import AppDetails from './../AppDetails';
import AppUsersWizard from './../AppUsersWizard';
import { AuthInfo, Service } from '../../models';
import { Switch, Route, Redirect } from 'react-router-dom';

// todo: take from store
const constServices = [
  new Service('Manage Service Status'), new Service('Consume Report Status'), new Service('Reports Service Status')
];

// todo: take from store
const auth = new AuthInfo();
auth.name = 'Shrek Ogre'

export default class extends React.Component<{}> {
  render() {
    return (
      <div>
        <Header services={constServices} auth={auth} onLogout={() => alert('log out') }/>
        <Container>
          <Switch>
            <Route path='/selector' name='App Selector' component={ AppSelector } />
            <Route path='/wizard' name='App Wizard' component={ AppWizard } />
            <Route path='/details/:id' name='App Details' component={ AppDetails } />
            <Route path='/app/users' name='App Users' component={ AppUsersWizard } />
            <Route path='app/build' name='App Build Wizard' component={ AppBuildWizard } />
            <Redirect from='/' to='/selector' />
          </Switch>
        </Container>
      </div>
    )
  }
}
