const PutProfile = async (token) => {
  const bearerToken = `Bearer ${token}`;

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: bearerToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Steve",
        lastName: "Rogers",
      }),
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

export default PutProfile;
