export interface UserDetail {
  email: string;
}

// export const getUserProfileApi = (email: UserDetail): Promise<any> => {
//   //hit api here and return api response
//   let a = email as any;
//   return a;
// };
export const getUserProfileApi = (): Promise<any> => {
  //hit api here and return api response
  let a = 'test' as any;
  return a;
};
