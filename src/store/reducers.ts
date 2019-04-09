import { 
  AppAction, 
  APP_ADD, 
  APP_LIST, 
  LOGIN, 
  APP_REMOVE,
  APP_ADD_VERSION 
} from './actions';
import { IApp, AuthInfo, AppVersionModel } from './../models';

export const list = (state: Array<IApp> = [], action: AppAction): Array<IApp> => {
  switch(action.type) {
    case APP_LIST: return [...action.list]
    case APP_ADD: return [...state, action.app]
    case APP_REMOVE: return state.filter((item: IApp) => item.id !== action.id)
    case APP_ADD_VERSION: 
      return state.map((app: IApp) => {
        if (app.id === action.appId) {
          const name = `version ${app.versions.length + 1}`;
          const versions = [...app.versions, new AppVersionModel(name)];
          return {...app, versions} as IApp;
        }
        return app;
      })
    default: return state
  }
}

export const loggedUser = (state: AuthInfo, action: AppAction): AuthInfo => {
  switch(action.type) {
    case LOGIN: return action.user
    default: return state
  }
}
