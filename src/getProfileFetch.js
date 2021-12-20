export const getProfileFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("https://iam.bkav.com/oauth2/token", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (data.message) {
              localStorage.removeItem("token")
            } else {
              dispatch(loginUser(data.user))
            }
          })
      }
    }
  }