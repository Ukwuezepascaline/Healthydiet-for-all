const validatePassword = (password) => {
  if (password.trim().length < 8) return;
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  // const minLengthRegExp = /.{8,}/;

  let errorMessage = "";

  if (!uppercaseRegExp.test(password)) {
    errorMessage = `${errorMessage} Missing an uppercase.`.trim();
  } else if (!lowercaseRegExp.test(password)) {
    errorMessage = `${errorMessage} Missing a lowercase`.trim();
  } else if (!digitsRegExp.test(password)) {
    errorMessage = `${errorMessage} Missing a digit`.trim();
  } else if (!specialCharRegExp.test(password)) {
    errorMessage = `${errorMessage} Missing a special character`.trim();
  }
  // else if (!minLengthRegExp.test(password)) {
  //   errorMessage = `${errorMessage} Password be at least 8 characters`.trim();
  // }

  return {
    strongPassword: errorMessage.trim().length === 0,
    message: errorMessage,
  };
};

export { validatePassword };
