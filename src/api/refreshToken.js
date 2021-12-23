import saveToken from './saveToken';

const refreshToken = (token) => (
    fetch( `https://iam.bkav.com/oauth2/token` , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token }) 
    })
    .then(res => res.text())
    .then(newToken => saveToken(newToken))
    .catch(err => console.log(err))
);
       
export default refreshToken;