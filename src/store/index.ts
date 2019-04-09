import { list, loggedUser } from './reducers';
import { IApp, AuthInfo } from './../models';
import { AppAction } from './actions';

export interface IState {
  list: Array<IApp>,
  loggedUser: AuthInfo
}

export const defaultState = () => ({
  list: [],
  loggedUser: new AuthInfo()
})

export const rootReducer = (state: IState = defaultState(), action: AppAction) => ({
  list: list(state.list, action),
  loggedUser: loggedUser(state.loggedUser, action)
})