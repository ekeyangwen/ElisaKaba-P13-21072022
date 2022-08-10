const saveForm = (userName, userIsLogged, checked) => {
  const username = JSON.stringify(userName);
  const isLogged = JSON.stringify(userIsLogged);
  const check = JSON.stringify(checked);

  localStorage.getItem(isLogged);
  localStorage.getItem(username);
  localStorage.getItem(check);

  if (isLogged === "true" && check === "true") {
    return console.log(username), localStorage.setItem(username);
  }
  if (isLogged === "true") {
  }
};

export default saveForm;
