import axios from 'axios';

export default axios.create({
  baseURL: `https://iam.bkav.com/oauth2/token`,
  timeout: 3600,
});



// // let _login = axios.create({
// //   baseURL: 'https://iam.bkav.com/oauth2/token',
// //   timeout: 3600,
// // });

// // // Set JSON Web Token in Client to be included in all calls
    const setClientToken = token => {
  _login.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${getItem('access_token')}`;
    return config;
  });
};

// export default _login;