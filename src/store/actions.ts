import { Action, Dispatch } from 'redux';
import { IApp, LoginInfo, AuthInfo } from './../models';
import uniqid from 'uniqid';

export const APP_LIST = 'app/list';
export const APP_ADD  = 'app/add';
export const LOGIN = 'login';
export const APP_REMOVE = 'app/remove';
export const APP_ADD_VERSION = 'app/add/version';

export interface IActionAppAddVersion extends Action {
  type: 'app/add/version',
  appId: string
}

export interface IActionAppList extends Action {
  type: 'app/list'
  list: Array<IApp>
};

export interface IActionAppAdd extends Action {
  type: 'app/add',
  app: IApp, 
};

export interface IActionLogin extends Action {
  type: 'login',
  user: AuthInfo
}

export interface IActionAppRemove extends Action {
  type: 'app/remove',
  id: string
}

export type AppAction = IActionAppAdd | IActionAppList | IActionLogin | IActionAppRemove | IActionAppAddVersion;

export const addAppVersion = (appId: string) => (dispatch: Dispatch) => dispatch({
  type: APP_ADD_VERSION,
  appId
})

export const addApp = (appName: string) => (dispatch: Dispatch) => dispatch({
  type: APP_ADD,
  app: {name: appName, id: uniqid()}
})

export const appList = () => (dispatch: Dispatch) => {
  dispatch({
    type: APP_LIST,
    list: [
      {
        id: '1', name: 'app 1',
        versions: [
          {name: 'version 1'},
          {name: 'version 2'},
        ]
      } as IApp,
      {
        id: '2', name: 'app 2',
        versions: [
          {name: 'version 1'},
          {name: 'version 2'},
        ]
      } as IApp
    ]
  })
}
export const login = (creds: LoginInfo) => (dispatch: Dispatch) => dispatch({
  type: LOGIN,
  user: {
    login: creds.login,
    pswd: creds.password,
    token: 12,
    name: 'Shrek Ogre',
    success: true
  }
})

export const removeApp = (id: string) => (dispatch: Dispatch) => dispatch({
  type: APP_REMOVE,
  id
})
