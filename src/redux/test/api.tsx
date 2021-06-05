import API from '@aws-amplify/api';
import {RequestUserProfileParams, RequestVideoSuccessPayload} from './types';

export const getUserProfileApi = ({
  page,
  limit = 10,
}: RequestUserProfileParams): Promise<RequestVideoSuccessPayload> => {
  const url = `userProfile?page=${page}&limit=${limit}`;
  console.log('--- api is hit ');
  return API.get('', url, {});
};
