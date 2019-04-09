import { connect } from 'react-redux';
import AppSelector from './AppSelector';
import { IState } from '../../store';
import { appList } from '../../store/actions';
import { withRouter } from 'react-router-dom';

const stateMapping = (state: IState) => ({
  list: state.list
})

const dispatchMapping = (dispatch: any) => ({
  onLoad: () => {
    dispatch(appList())
  }
  
})

export default connect(stateMapping, dispatchMapping)(withRouter(AppSelector));
