import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILED,
  GET_USER_PROFILE_SUCCESS,
} from './constant';
import {Doc, UserProfileActions} from './types';

interface InitialStateProps {
  loading: boolean;
  error: string;
  data: [] | Array<Doc>;
}
const InitialState: InitialStateProps = {
  error: '',
  loading: false,
  data: [],
};

export default function userProfileReducer(
  state = InitialState,
  action: UserProfileActions,
) {
  switch (action.type) {
    case GET_USER_PROFILE: {
      return {...state, loading: true};
    }
    case GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        error: '',
        data: action.payload.data.docs,
        loading: false,
      };
    }
    case GET_USER_PROFILE_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
}
