

const checkLogin = (token) => (
    fetch(`https://iam.bkav.com/oauth2/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
    .catch(() => 'TOKEN_KHONG_HOP_LE')
);

export default checkLogin;