const validateLogin = (username, password) => username === 'admin' && password === 'admin';
const validateRegister = (username, password) => username !== '' && password !== '';

const userValidator = {
  validateLogin,
  validateRegister
};

export default userValidator;
