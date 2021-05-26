import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILED,
} from './constant';
import {RequestLoginParams} from './types';
import {ReducerActionType} from '../../utility/types';
export type Payload = {
  data: unknown;
  message?: String;
};

export interface Action {
  type:
    | typeof GET_USER_PROFILE
    | typeof GET_USER_PROFILE_SUCCESS
    | typeof GET_USER_PROFILE_FAILED;
  payload: Payload;
}

export interface OnlyType {
  type: typeof GET_USER_PROFILE;
}

export const getUserProfile = (): OnlyType => {
  return {
    type: GET_USER_PROFILE,
  };
};

//either follow this typescript pattern
export const getUserProfileTest = (
  params: RequestLoginParams,
): ReducerActionType => ({
  type: GET_USER_PROFILE,
  payload: params,
});

//or follow this typescript pattern
export const getUserProfileSuccess = (payload: Payload): Action => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload,
  };
};

export const getUserProfileFailed = (payload: Payload): Action => {
  return {
    type: GET_USER_PROFILE_FAILED,
    payload,
  };
};
