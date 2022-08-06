const GetAccount = async (token) => {
  const URL = "http://localhost:3001/api/v1/user/profile";
  try {
    const bearerToken = `Bearer ${token}`;

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerToken,
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (erreur) {
    return erreur;
  }
};

export default GetAccount;
