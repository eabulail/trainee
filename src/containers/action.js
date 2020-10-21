const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validLoginData = (email, password) => {
  return (
    email.length > 0 &&
    password.length > 0 &&
    emailRegex.test(email)
  )
}

export const fetchLoginAPI = (email, password) => {
    return fetch("https://traineer-064a.restdb.io/rest/accounts", {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-apikey": "5f81fab25799e648a5a8eec6",
          "cache-control": "no-cache",
      }})
      .then(responce => responce.json())
      .then((data) => {
        const user = data.find(item => item.email === email && item.password === password)
        if (user) {
          const userId = user._id;
          fetch("https://traineer-064a.restdb.io/rest/accounts/" + userId, {
            async: true,
            crossDomain: true,
            method: "PUT",
            headers: {
              "content-type": "application/json",
              "x-apikey": "5f81fab25799e648a5a8eec6",
              "cache-control": "no-cache",
            },
          }).then((responce1) => responce1.json());
          return true
        } else {
          return false
        }
      })
}


