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

export const convertStringToDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();

  let monthStr;

  switch (month) {
    case 0:
      monthStr = "January";
      break;
    case 1:
      monthStr = "February";
      break;
    case 2:
      monthStr = "March";
      break;
    case 3:
      monthStr = "April";
      break;
    case 4:
      monthStr = "May";
      break;
    case 5:
      monthStr = "June";
      break;
    case 6:
      monthStr = "July";
      break;
    case 7:
      monthStr = "August";
      break;
    case 8:
      monthStr = "September";
      break;
    case 9:
      monthStr = "October";
      break;
    case 10:
      monthStr = "November";
      break;
    case 11:
      monthStr = "December";
      break;
    default:
      monthStr = "Undefined";
  }

  let appendage = "";

  if (day === 1 || day === 21 || day === 31) {
    appendage = "st";
  } else if (day === 2 || day === 22) {
    appendage == "nd";
  } else if (day === 3 || day === 23) {
    appendage = "rd";
  } else {
    appendage = "th";
  }

  return `${day} of ${monthStr}, ${year}`;
};

export { validatePassword };
