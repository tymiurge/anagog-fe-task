import * as React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Dialog } from './../../components';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {
  onSubmit(appName: string): void
}

type ICompState = {
  value: string,
  warning: boolean
}

export default class AppWizard extends React.Component<IProps, ICompState> {
  state = {
    value: '',
    warning: false
  }

  onChange = (e: React.SyntheticEvent<HTMLInputElement>) => this.setState({
    value: e.currentTarget.value,
    warning: false
  })

  onSubmit = () => {
    if (this.state.value === '') {
      this.setState({warning: true})
    } else {
      this.props.onSubmit(this.state.value);
      setImmediate(() => this.props.history.push('/selector'))
    }
  }

  render() {
    const { history } = this.props;
    const { value, warning } = this.state;
    return (
      <Dialog
        title='APP WIZARD: Create New Application' isContentCentered={true}
        controls={(
          <div>
            <Button primary onClick={this.onSubmit}>Save</Button>
            <Button color='red' onClick={ () => history.push('/selector') }>Cancel</Button>
          </div>
        )}
      >
        <Form>
          <Form.Input
            label='Application Name' placeholder='Type Name...'
            value={value}
            onChange={this.onChange}
          />
        </Form>
        {
          warning &&
          <div style={{color: 'red', marginTop: '10px'}}>
            App name should not be empty.
          </div>
        }
      </Dialog>  
    )
  }
}

// export default AppDetails
