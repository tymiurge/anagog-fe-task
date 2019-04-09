import * as React from 'react';
import StaticTextField from './StaticTextField';
import { Step, Segment, Input, Button, Icon, Form, Header } from 'semantic-ui-react';

type Props = {
  children: [React.ReactChild, React.ReactChild]
}

const BuildWizard: React.StatelessComponent<any> = ({ children }) => (
  <div>
    <Step.Group size='mini' fluid>
      <Step title='Metadata' active onClick={()=>alert('met')}/>
      <Step title='Activity Recognition' onClick={()=>alert('met')}/>
    </Step.Group>

    <Segment>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{flex: '1 1 0'}}>
          <StaticTextField title='Version' text='will be provided automatically' />
        </div>
        <div style={{flex: '1 1 0'}}>
          <StaticTextField title='Build Number' text='will be provided automatically' />
        </div>
      </div>

      <Input className='top-intend-10' fluid placeholder='Comment' />

      <div className='top-intend-10'>
        <Button primary size='mini'>Next >></Button>
      </div>
    </Segment>

    <Segment>
      <Form>
        <Form.Group widths='equal'>
          <Form.Checkbox label='Active' />
          <Form.Checkbox label='Notify' />
        </Form.Group>
        <Segment>
          <Header as='h4'>DBSizeLimit</Header>
          <Form.Group widths='equal'>
            <Form.Input label='MaxRows' />
            <Form.Input label='MaxTime' />
            <Form.Input label='RowsToDelete' />
            <Form.Input label='TimeToDelete' />
          </Form.Group>
        </Segment>
        <Segment>
          <Header as='h4'>Report</Header>
          <Form.Group>
            <Form.Input label='Historical Report URL' width={10}/>
            <Form.Input label='Interval' width={2}/>
            <Form.Input label='MaxRetryTime' width={2}/>
            <Form.Input label='Unmetered' width={2}/>
          </Form.Group>
          <Form.Input label='Real Time Report URL' />
        </Segment>
        
      </Form>

      <div className='top-intend-10'>
        <Button primary size='mini'><Icon name='angle double left' /> Previous</Button>
      </div>
    </Segment>

    
  </div>
)

export default BuildWizard
