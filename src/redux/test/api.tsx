import API from '@aws-amplify/api';
import {RequestUserProfileParams, GetUserProfileResponse} from './types';

export const getUserProfileApi = ({
  page,
  limit = 10,
}: RequestUserProfileParams): Promise<GetUserProfileResponse> => {
  const url = `userProfile?page=${page}&limit=${limit}`;
  console.log('--- api is hit ');
  return API.get('', url, {});
};
