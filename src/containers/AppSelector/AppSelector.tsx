import * as React from 'react';
import { Button, Form, DropdownProps } from 'semantic-ui-react';
import { Dialog } from './../../components';
import { RouteComponentProps } from 'react-router';
import { IApp } from '../../models';

interface IProps extends RouteComponentProps<any> {
  list: Array<IApp>,
  onLoad(): void
}

export default class AppSelector extends React.Component<IProps> {
  componentDidMount() {
    this.props.onLoad()
  }
  onAppSelect = (e: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    this.props.history.push(`/details/${data.value}`)
  }
  render() {
    const { history, list } = this.props; 
    return(
      <Dialog
        title='APP SELECTOR: Select Application' isContentCentered={true}
        controls={(
          <Button primary onClick={() => history.push('/wizard')}>Create New Application</Button>
        )}
      >
        <Form>
          <Form.Select
            options={list.map((item: IApp) => ({key: item.id, text: item.name, value: item.id}))}
            label='Application Name' placeholder='Select Application...'
            onChange={this.onAppSelect}
          />
        </Form>
        
      </Dialog>
    )
  }
}