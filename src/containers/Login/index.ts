import Login from './Login';
import { IState } from '../../store';
import { LoginInfo } from './../../models';
import { login } from '../../store/actions';
import { connect } from 'react-redux';

const stateMapping = (state: IState) => ({
  connected: state.loggedUser.success
})

const dispatchMapping = (dispatch: any) => ({
  onSubmit: (data: LoginInfo) => {
    dispatch(login(data))
  }
})
export default connect(stateMapping, dispatchMapping)(Login)
