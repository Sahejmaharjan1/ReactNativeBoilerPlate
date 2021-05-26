import {Action} from './action';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILED,
  GET_USER_PROFILE_SUCCESS,
} from './constant';

interface InitialStateProps {
  loading: boolean;
  error: string;
  data: unknown;
}
const InitialState: InitialStateProps = {
  error: '',
  loading: false,
  data: {},
};

export default function userProfileReducer(
  state: InitialStateProps = InitialState,
  action: Action,
): InitialStateProps {
  switch (action.type) {
    case GET_USER_PROFILE: {
      return {...state, loading: true};
    }
    case GET_USER_PROFILE_SUCCESS: {
      return {...state, error: '', data: action.payload, loading: false};
    }
    case GET_USER_PROFILE_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.message as string,
        data: {},
      };
    }
    default: {
      return state;
    }
  }
}
