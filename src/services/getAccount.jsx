const getAccount = async (token) => {
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    header: {
      Authorization:
        "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzMjI3ZmZhYWIwYmJhNDBmNzI2YyIsImlhdCI6MTY1OTM1MDkxMywiZXhwIjoxNjU5NDM3MzEzfQ.686yFNVNJ6dVR3wJ6nz6QH3ouXhQOk0oJE9vo2yEO08",
      "content-Type": "application/json",
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

export default getAccount;
