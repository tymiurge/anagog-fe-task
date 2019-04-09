import AppDetails from './AppDetails';
import { IState } from '../../store';
import { appList, removeApp, addAppVersion } from '../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const stateMapping = (state: IState) => ({
  appList: state.list
})

const dispatchMapping = (dispatch: any) => ({
  onLoad: (id: string) => {
    dispatch(appList())
  },
  onAppRemove: (id: string) => {
    dispatch(removeApp(id))
  },
  onAppVersionAdd: (appId: string) => {
    dispatch(addAppVersion(appId))
  }
  
})
export default connect(stateMapping, dispatchMapping)(withRouter(AppDetails));
