import * as React from 'react'
import { Button } from 'semantic-ui-react'
import { Dialog, AppUsers } from './../../components';
import { User } from '../../models';

const AppDetails: React.FunctionComponent<{}> = () => (
  <Dialog
    title='Edit Users for com.anagog.discover Application'
    controls={(
      <div>
        <Button primary>Save</Button>
        <Button color='red'>Cancel</Button>
      </div>
    )}
  >
    <AppUsers editable={true} users={[new User('Shrek'), new User('fiona ogre', false), new User('hottabch ibn comehere', false, false)]} />
  </Dialog>
)

export default AppDetails
