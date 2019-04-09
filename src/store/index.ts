import { list, loggedUser, selectedApp } from './reducers';
import { IApp, AuthInfo, AppModel } from './../models';
import { AppAction,  } from './actions';

export interface IState {
  list: Array<IApp>,
  loggedUser: AuthInfo,
  selectedApp: IApp
}

export const defaultState = () => ({
  list: [],
  loggedUser: new AuthInfo(),
  selectedApp: new AppModel()
})

export const rootReducer = (state: IState = defaultState(), action: AppAction) => ({
  list: list(state.list, action),
  loggedUser: loggedUser(state.loggedUser, action),
  selectedApp: selectedApp(state.selectedApp, action)
})