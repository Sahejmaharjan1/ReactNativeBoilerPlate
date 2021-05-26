const config = {
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: '',
    USERPOOL_WEB_CLIENT_ID: '',
    IDENTITY_POOL_ID: '',
    oauth: {
      domain: '',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: '',
      redirectSignOut: '',
      responseType: 'code',
    },
    federationTarget: 'COGNITO_USER_POOLS',
  },

  apiGateway: {
    REGION: 'us-east-1',
    COGNITO_URL: '',
  },
};
export default config;
