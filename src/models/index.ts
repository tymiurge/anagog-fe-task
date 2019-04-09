
export interface IUser {
  name: string,
  canUpdate: boolean,
  canDelete: boolean,
  canEditUsers: boolean
}

export class User implements IUser {
  public name: string;
  public canDelete: boolean;
  public canUpdate: boolean;
  public canEditUsers: boolean;

  constructor(name: string, canDelete: boolean = false, canUpdate: boolean = false, canEditUsers: boolean = false) {
    this.name = name;
    this.canDelete = canDelete;
    this.canEditUsers = canEditUsers,
    this.canUpdate = canUpdate;
  }
}

export interface IService {
  name: string,
  statusOk: boolean 
}

export class Service implements IService {
  public name: string;
  public statusOk: boolean;
  constructor(name: string, statusOk: boolean = true) {
    this.name = name;
    this.statusOk = statusOk;
  }
}

export class AuthInfo {
  public login?: string = '';
  public pswd?: string = '';
  public token?: number = 0;
  public name?: string = '';
  public success: boolean = false;
}

export interface IAppVersion {
  name: string
}

export class AppVersionModel implements IAppVersion {
  name: string;
  builds: Array<any> = [];
  constructor(name: string) {
    this.name = name;
  }
}

export interface IApp {
  id: string,
  name: string,
  versions: Array<IAppVersion>
};

export type LoginInfo = {
  login: string,
  password: string
};
