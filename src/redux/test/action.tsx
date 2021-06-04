import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILED,
} from './constant';
import {
  GetUserProfileRequest,
  GetUserProfileRequestFailed,
  GetUserProfileRequestSuccess,
  RequestUserProfileParams,
} from './types';

export type Payload = {
  data: unknown;
  message?: String;
};

export const getUserProfileTest = (
  params: RequestUserProfileParams,
): GetUserProfileRequest => ({
  type: GET_USER_PROFILE,
  payload: params,
});

export const getUserProfileSuccess = (
  params: any,
): GetUserProfileRequestSuccess => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: params,
});

export const getUserProfileFailed = (
  params: any,
): GetUserProfileRequestFailed => ({
  type: GET_USER_PROFILE_FAILED,
  payload: params,
});
