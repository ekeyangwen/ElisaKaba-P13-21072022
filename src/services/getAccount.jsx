const GetAccount = async (token) => {
  try {
    const bearerToken = `Bearer ${token}`;
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerToken,
      },
    });

    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (erreur) {
    console.log(erreur);
    return erreur;
  }
};

export default GetAccount;
