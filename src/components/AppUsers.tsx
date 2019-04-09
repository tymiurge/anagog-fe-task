import * as React from 'react'
import { Table, Icon, Button } from 'semantic-ui-react'
import { IUser, User } from '../models';
import UserForm from './UserForm';

type Props = {
  users: Array<IUser>,
  editable?: boolean,
  onChange?: (users: Array<IUser>) => void
}

const UserPermission: React.FunctionComponent<{permission: boolean}> = ({permission}) => (
  <Icon name={permission ? 'check' : 'times'} color={permission ? 'green' : 'red'} />
)

export default class AppUsers extends React.Component<Props, any> {
  static defaultProps = {
    editable: false,
    onChange: () => {}
  }
  state = {
    newUserWizardDisplayed: false,
    editedUserIdx: -1
  }
  onUserEdit = (idx: number) => {
    if (this.state.editedUserIdx === -1) {
      this.setState({editedUserIdx: idx})
    }
  }
  onUserEditCancel = () => this.setState({editedUserIdx: -1})
  toggleNewAppWizardVisibility = () => this.setState({newUserWizardDisplayed: !this.state.newUserWizardDisplayed})
  render() {
    const { users, editable } = this.props;
    const { state } = this;
    return (
      <div>
        {
          editable && !state.newUserWizardDisplayed &&
          <Button color='blue' size='mini' onClick={this.toggleNewAppWizardVisibility}>Add User</Button>
        }
        {
          state.newUserWizardDisplayed &&
          <UserForm 
            onSubmit={(user: IUser) => {
              const formattedUser = new User(
                user.name,
                !!user.canDelete,
                !!user.canUpdate,
                !!user.canEditUsers
              )
              console.info(formattedUser);
              return formattedUser;
            }}
            onClose={this.toggleNewAppWizardVisibility}  
          />
        }
        {
          users.length === 0
            ? <div>No users configuration fot the selected application.</div>
            : (
              <Table compact celled>
                <Table.Header>
                  
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell collapsing><Icon name='delete' /></Table.HeaderCell>
                    <Table.HeaderCell collapsing><Icon name='edit' /></Table.HeaderCell>
                    <Table.HeaderCell collapsing><Icon name='users' /></Table.HeaderCell>
                    {
                      editable &&
                      <Table.HeaderCell collapsing />              
                    }
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  { users.map((user: IUser, idx: number) => state.editedUserIdx !== idx
                    ? <Table.Row key={idx}>
                      <Table.Cell>{ user.name }</Table.Cell>
                      <Table.Cell collapsing>{ <UserPermission permission={user.canDelete} />}</Table.Cell>
                      <Table.Cell collapsing>{ <UserPermission permission={user.canUpdate} />}</Table.Cell>
                      <Table.Cell collapsing>{ <UserPermission permission={user.canEditUsers} />}</Table.Cell>
                      {
                        editable &&
                        <Table.Cell collapsing>
                          <Icon className='clickable' name='edit' color='blue' onClick={() => this.onUserEdit(idx)} />
                          <Icon className='clickable' name='delete' color='blue' />
                        </Table.Cell>
                      }
                    </Table.Row>
                    : <Table.Row key={`in_edit_idx`} >
                        <Table.Cell colSpan='5'>
                          <div className='mergedCell'>
                            <UserForm onClose={this.onUserEditCancel} />
                          </div>
                        </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            )
        }
    </div>
    )
  }
} 
