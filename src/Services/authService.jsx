import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// axios.defaults.withCredentials = true;

export const Login = (user, callback) => {
 axios
  .post('http://localhost:7000/api/v1/auth/login', user)
  .then((res) => {
   callback(true, res.data.accessToken);
  })
  .catch((error) => {
   if (error.response) {
    const errorMessage = error.response.data.msg;
    callback(false, errorMessage);
   } else {
    console.log(error);
    callback(false, 'An error occurred while trying to log in.');
   }
  });
};

export const Register = (user, callback) => {
 axios
  .post('http://localhost:7000/api/v1/auth/register', user)
  .then((res) => {
   callback(true, res.data.token);
  })
  .catch((error) => {
   if (error.response) {
    const errorMessage = error.response.data.msg;
    callback(false, errorMessage);
   } else {
    console.log(error);
    callback(false, 'An error occurred while trying to register.');
   }
  });
};

export const ForgotPassword = (user, callback) => {
 axios
  .post('http://localhost:7000/api/v1/auth/requestPasswordReset', user)
  .then((res) => {
   callback(true, res.data);
  })
  .catch((error) => {
   if (error.response) {
    const errorMessage = error.response.data.msg;
    callback(false, errorMessage);
   } else {
    console.log(error);
    callback(false, 'An error occurred while trying to request reset password.');
   }
  });
};

export const ResetPassword = (user, callback) => {
 axios
  .post('http://localhost:7000/api/v1/auth/resetPassword', user)
  .then((res) => {
   callback(true, res.data);
  })
  .catch((error) => {
   if (error.response) {
    const errorMessage = error.response.data.msg;
    callback(false, errorMessage);
   } else {
    console.log(error);
    callback(false, 'An error occurred while trying to reset password.');
   }
  });
};

export const getUsername = (token) => {
 const decode = jwtDecode(token);
 return decode.user.email;
};

// getUsername();
