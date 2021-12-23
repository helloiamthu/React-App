const logIn = (email, password) => (
    fetch(`https://iam.bkav.com/oauth2/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .catch(err => console.log(err))
);

export default logIn;