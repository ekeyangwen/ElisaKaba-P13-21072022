const GetSignUp = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        password: "password456",
        firstName: "Steve",
        lastName: "Rogers",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (erreur) {
    console.log(erreur);
    return erreur;
  }
};

export default GetSignUp;
