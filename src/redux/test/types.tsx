import {SagaReturnType} from '@redux-saga/core/effects';
import {GenericObject} from '../../utility/types';
import {getUserProfileApi} from './api';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILED,
  GET_USER_PROFILE_SUCCESS,
} from './constant';

export interface RequestUserProfileParams extends GenericObject {
  page: number;
  limit?: number;
}

export interface RequestVideoSuccessPayload extends GenericObject {
  data: GetUserProfileSuccessResponse;
}

export interface RequestVideoFailedPayload extends GenericObject {
  message: string;
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

//each action type and payload define
export interface GetUserProfileRequest {
  type: typeof GET_USER_PROFILE;
  payload: RequestUserProfileParams;
}

export type GetUserProfileRequestSuccess = {
  type: typeof GET_USER_PROFILE_SUCCESS;
  payload: RequestVideoSuccessPayload;
};

export type GetUserProfileRequestFailed = {
  type: typeof GET_USER_PROFILE_FAILED;
  payload: RequestVideoFailedPayload;
};

//action types
export type UserProfileActions =
  | GetUserProfileRequest
  | GetUserProfileRequestSuccess
  | GetUserProfileRequestFailed;

//types for api
export type UserProfileSaga = SagaReturnType<typeof getUserProfileApi>;

//getVideoApi response
export interface GetUserProfileResponse {
  data?: unknown;
  message: string;
}

export interface Doc {
  __v: number;
  _id: string;
  categories: string[];
  createdAt: Date;
  endTime: string;
  grade: string[];
  id: string;
  startTime: string;
  tags: string[];
  updatedAt: Date;
  videoLink: string;
}

export interface GetUserProfileSuccessResponse {
  docs: Doc[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null;
  page: number;
  pagingCounter: number;
  prevPage: null;
  totalDocs: number;
  totalPages: number;
}
