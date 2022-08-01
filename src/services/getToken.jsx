const getToken = () => {
  return fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "steve@rogers.com",
      password: "password456",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((erreur) => {
      return erreur;
    });
};

export default getToken;
