import {Auth} from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth/lib/types';

import {
  CognitoUser,
  CognitoUserSession,
  ISignUpResult,
} from 'amazon-cognito-identity-js';

export interface AddUser {
  email: string;
  password: string;
  username: string;
}

export interface Signin {
  email: string;
  password: string;
}

export interface FederatedSignin {
  provider: string | undefined;
}

export interface SignUpConfirm {
  email: string;
  code: string;
}

export interface ResendVerificationCode {
  email: string;
}

export interface ForgotPassword {
  email: string;
  password: string;
  code: string;
}

export interface DeleteUser {
  email: string;
}

export interface UserDetail {
  email: string;
  gender?: string;
  dob?: string;
  interests?: Array<string>;
}

export interface ChangePassword {
  oldPassword?: string;
  newPassword?: string;
  userObj?: {
    [key: string]: any;
  };
}

export const addUserApi = (
  arg: AddUser,
): Promise<ISignUpResult> | undefined => {
  const {username, password, email} = arg;
  if (username && password && email) {
    return Auth.signUp({
      username: email,
      password: password,
      attributes: {
        name: username,
      },
    });
  }
};

export const signInApi = ({
  email,
  password,
}: Signin): Promise<CognitoUser> | undefined => {
  if (password && email) {
    console.log('called', password, email);

    return Auth.signIn(email, password);
  }
};

export const federatedSignInApi = ({
  provider,
}: FederatedSignin): Promise<any> | undefined => {
  if (provider === 'google') {
    return Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  } else if (provider === 'facebook') {
    return Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook,
    });
  } else if (provider === 'Twitter') {
    return Auth.federatedSignIn({
      provider: 'Twitter' as any,
    });
  } else if (provider === 'Apple') {
    return Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Apple,
    });
  }
};

export const confirmSignUpApi = ({
  email,
  code,
}: SignUpConfirm): Promise<any> | undefined => {
  if (email && code) {
    return Auth.confirmSignUp(email, code, {forceAliasCreation: true});
  }
};

export const resendVerificationCodeApi = ({
  email,
}: ResendVerificationCode): Promise<any> | undefined => {
  if (email) {
    console.log('email is ', email);
    return Auth.resendSignUp(email);
  }
};

export const getSession = (): Promise<CognitoUserSession | null> => {
  return new Promise((resolve, reject) => {
    Auth.currentSession()
      .then(() =>
        Auth.currentAuthenticatedUser({bypassCache: true})
          .then(resolve)
          .catch(reject),
      )
      .catch(reject);
  });
};

export const signOutApi = (): Promise<any> => {
  return Auth.signOut();
};

export const forgotPasswordApi = ({email}: ForgotPassword): any => {
  console.log(email, 'from api');
  if (email) {
    return Auth.forgotPassword(email);
  }
};

export const forgotPasswordSubmitApi = ({
  code,
  email,
  password,
}: ForgotPassword): Promise<void> | undefined => {
  if (code && email && password) {
    return Auth.forgotPasswordSubmit(email, code, password);
  }
};

export const changePasswordApi = ({
  userObj,
  oldPassword,
  newPassword,
}: ChangePassword): Promise<'SUCCESS'> | undefined => {
  if (oldPassword && newPassword && userObj) {
    return Auth.changePassword(userObj, oldPassword, newPassword);
  }
};
