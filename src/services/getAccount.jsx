const getAccount = async (token) => {
  const bearerToken = `Bearer ${token}`;
  console.log(bearerToken);
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
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
    console.log(erreur);
    return erreur;
  }
};

export default getAccount;
