import {GenericObject} from '../../utility/types';

export interface RequestLoginParams extends GenericObject {
  username: string;
  password: string;
}

export interface AuthDetailsParams {
  id?: number;
}

export interface AuthInitialStateType {
  error: GenericObject;
  logging: boolean;
  loginState: GenericObject;
}

export interface AuthError extends GenericObject {
  code?: string;
  detail?: GenericObject;
  message: string;
}
