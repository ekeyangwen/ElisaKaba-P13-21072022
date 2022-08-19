const GetToken = async (userName, password) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (erreur) {
    return erreur;
  }
};

export default GetToken;
