import axios from 'axios';

export const userApi = {
  signIn: (payload) => {
    const url = 'https://iam.bkav.com/oauth2/token';
    return axiosClient.post(url, payload);
  },

  getMe = async (payload) => {
    const url = 'https://iam.bkav.com/oauth2/token';
    const response = await axiosClient.get(url, payload);
    return response.data;
  }
}

//?
// export default axios.create({
//   baseURL: `https://iam.bkav.com/oauth2/token`,
//   timeout: 3600,
// });
//?


// // let _login = axios.create({
// //   baseURL: 'https://iam.bkav.com/oauth2/token',
// //   timeout: 3600,
// // });

// // // Set JSON Web Token in Client to be included in all calls


//?
//     const setClientToken = token => {
//   _login.interceptors.request.use(function(config) {
//     config.headers.Authorization = `Bearer ${getItem('access_token')}`;
//     return config;
//   });
// };
//?




// export default _login;
const _login = axios.create({
  baseURL:`https://iam.bkav.com/oauth2/token`,
  headers: {
    'content-type': 'application/json',
     Accept: 'application/json'
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

_login.interceptors.request.use(async (config) => {
  const customHeaders = {};
  config.headers.Authorization = `Bearer ${getItem('access_token')}`;
  const accessToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
  if (accessToken) {
    customHeaders.Authorization = accessToken;
  }
  else{
  	console.log(err);
  }

  return {
    ...config,
    headers: {
      ...customHeaders,  // auto attach token
      ...config.headers, // but you can override for some requests
    }
  };
});

export default _login;
