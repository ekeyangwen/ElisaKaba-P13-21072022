const PutProfile = async (tokenSave, firstName, lastName) => {
  console.log(tokenSave);
  const bearerToken = `Bearer ${tokenSave}`;
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: bearerToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (erreur) {
    return erreur;
  }
};

export default PutProfile;
