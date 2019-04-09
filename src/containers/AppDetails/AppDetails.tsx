import * as React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Dialog, TwoColumns, AppUsers, CUDElement, StaticTextField } from './../../components';
import { User, IApp, IAppVersion } from '../../models';
import { RouteComponentProps } from 'react-router';
import { appList } from '../../store/actions';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

interface IProps extends RouteComponentProps<any> {
  onAppRemove(id: string): void,
  onLoad(id: string): void,
  appList: Array<IApp>,
  onAppVersionAdd(appId: string): void
}

export default class AppDetails extends React.Component<IProps> {
  componentDidMount() {
    this.props.onLoad(this.props.match.params.id);
    
  }
  onAppRemove = () => {
    // this.props.onAppRemove(this.props.match.params.id);
  }
  render() {
    const { appList } = this.props;
    if (appList.length === 0) return (<div></div>)
    const selectedApp: IApp = appList.find((app: IApp) => app.id === this.props.match.params.id) as IApp
    return(
      <Dialog
        title={`APP DETAILS: ${selectedApp.name} Application`}
        controls={(<Button primary>Edit Users</Button>)}
      >
        <TwoColumns>
          <Form>
            <Segment>
              <CUDElement addDisabled={true}
                onEditClick={() => alert('not implemented yet')}
                onRemoveClick={() => alert('not implemented yet') /*this.onAppRemove*/}
              >
                <Form.Select
                  options={appList.map((i: IApp) => ({key: i.id, text: i.name, value: i.id}))}
                  label='Application Name' placeholder='Select Application...'
                  defaultValue={selectedApp.id}
                />
              </CUDElement>
            </Segment>
            <Segment>
              <CUDElement
                onEditClick={() => alert('not implemented yet')}
                onAddClick={() => this.props.onAppVersionAdd(selectedApp.id)}
              >
                <Form.Select
                  options={selectedApp.versions.map((v: IAppVersion) => ({key: v.name, text: v.name, value: v.name}))}
                  label='Version' placeholder='Select Version...'
                  defaultValue={selectedApp.versions[selectedApp.versions.length - 1].name}
                />
              </CUDElement>
            </Segment>
            <Segment>
              <CUDElement
                onEditClick={() => alert('not implemented yet')}
              >
                <Form.Select
                  options={options} label='Build' placeholder='Select Build...'
                />
              </CUDElement>
              <StaticTextField title='Comment' text='text here' />
            </Segment>
          </Form>
          <div>
            <AppUsers users={[new User('Shrek'), new User('fiona ogre', false), new User('hottabch ibn comehere', false, false)]} />
          </div>
        </TwoColumns>
      </Dialog>
    ) 
  }
}
