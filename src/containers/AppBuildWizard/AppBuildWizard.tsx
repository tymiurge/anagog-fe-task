import * as React from 'react'
import { Button } from 'semantic-ui-react'
import { Dialog, BuildWizard } from './../../components';

const AppBuildWizard: React.FunctionComponent<{}> = () => (
  <Dialog
    title='Create new build of configuration for App name, version 1234-jun-12, 14:00'
    controls={(
      <div>
        <Button primary>Save</Button>
        <Button color='red'>Cancel</Button>
        <Button
          style={{marginLeft: '80px'}}
          primary
          onClick={() => alert('not implemented yet')}
        >
          Download Configuration
        </Button>
        <Button primary onClick={() => alert('not implemented yet')}>Upload Configuration</Button>
      </div>
    )}
  >
    <BuildWizard />  
  </Dialog>
)

export default AppBuildWizard
