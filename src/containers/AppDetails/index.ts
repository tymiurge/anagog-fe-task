import AppDetails from './AppDetails';
import { IState } from '../../store';
import { appList, removeApp, addAppVersion, selectApp } from '../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const stateMapping = (state: IState) => ({
  appList: state.list,
  selectedApp: state.selectedApp
})

const dispatchMapping = (dispatch: any) => ({
  onLoad: (id: string) => {
    dispatch(appList()),
    dispatch(selectApp(id));
  },
  onAppRemove: (id: string) => {
    dispatch(removeApp(id))
  },
  onAppVersionAdd: (appId: string) => {
    dispatch(addAppVersion(appId))
  }
  
})
export default connect(stateMapping, dispatchMapping)(withRouter(AppDetails));
