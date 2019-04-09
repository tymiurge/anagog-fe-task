import { 
  AppAction, 
  APP_ADD, 
  APP_LIST, 
  LOGIN, 
  APP_REMOVE,
  APP_ADD_VERSION, 
  SELECT_APP
} from './actions';
import { IApp, AuthInfo, AppVersionModel } from './../models';

export const list = (state: Array<IApp> = [], action: AppAction): Array<IApp> => {
  switch(action.type) {
    case APP_LIST: return [...action.list]
    case APP_ADD: return [...state, action.app]
    case APP_REMOVE: return state.filter((item: IApp) => item.id !== action.id)
    default: return state
  }
}

export const loggedUser = (state: AuthInfo, action: AppAction): AuthInfo => {
  switch(action.type) {
    case LOGIN: return action.user
    default: return state
  }
}

export const selectedApp = (state: IApp, action: AppAction): IApp => {
  switch(action.type) {
    case SELECT_APP: return {...action.app}
    case APP_ADD_VERSION: 
        const name = `version ${state.versions.length + 1}`;
        const versions = [...state.versions, new AppVersionModel(name)];
        return {...state, versions} as IApp;
    default: return state
  }
}
