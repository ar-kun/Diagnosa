import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { InputForm } from '../Components/Elements/Input/Index';
import { ResetPassword } from '../Services/authService';
import { Button } from '../Components/Elements/Button/Index';

export const ResetPasswordPage = () => {
 const { search } = useLocation();
 const queryParams = new URLSearchParams(search);

 const token = queryParams.get('token');
 const id = queryParams.get('id');

 const [openAlert, setOpenAlert] = useState(false);

 const handlerSendClick = (e) => {
  e.preventDefault();
  const user = {
   userId: id,
   token: token,
   password: e.target.password.value,
   confirmPassword: e.target.confirmPassword.value,
  };
  console.log(user);
  ResetPassword(user, (status, res) => {
   if (status) {
    setOpenAlert(true);
    setTimeout(() => {
     window.location.href = '/auth/login';
    }, 3000);
   } else {
    // setLoginFailed(res);
   }
  });
 };

 const passwordRef = useRef(null);
 useEffect(() => {
  passwordRef.current.focus();
  return () => {};
 }, []);

 return (
  <div className="flex flex-col gap-5 ">
   <div className="flex justify-center w-full items-center h-screen gap-10">
    <div className="w-1/2">
     <img src="/public/images/5500660.png" alt="" />
    </div>
    <div className="max-w-4xl text-white">
     <div className="flex flex-col items-center justify-center p-4 space-y-4 antialiased bg-gray-100">
      <div className="w-full px-8 max-w-lg space-y-4 bg-gradient-to-r  from-sky-500 to-secondary rounded-md py-16">
       <h1 className="text-2xl font-bold text-center">Create new password</h1>
       <p className="text-center mx-12">Your new password must be different from previous used passwords.</p>
       <form onSubmit={handlerSendClick} className="space-y-6 w-ful">
        <div className="font-bold">
         <label htmlFor="password">New Password</label>
         <InputForm type={'password'} placeholder={'********'} id={'password'} name={'password'} ref={passwordRef} />
        </div>
        <div className="font-bold">
         <label htmlFor="confirmPassword">Confirm Password</label>
         <InputForm type={'password'} placeholder={'********'} id={'confirmPassword'} name={'confirmPassword'} />
        </div>
        <div>
         <Button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         >
          Save
         </Button>
        </div>
       </form>
      </div>
     </div>
    </div>

    <div
     id="alert-additional-content-3"
     className={`${
      openAlert ? '' : 'hidden'
     } absolute top-10 p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 w-1/3`}
     role="alert"
    >
     <div className="flex items-center">
      <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <h3 className="text-lg font-medium">Successfully for change your password</h3>
     </div>
     <div className="mt-2 mb-4 text-sm">
      More info about this info success goes here. This example text is going to run a bit longer so that you can see how spacing within an alert
      works with this kind of content.
     </div>
     <div className="flex justify-end">
      <button
       type="button"
       onClick={() => setOpenAlert(false)}
       className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
       data-dismiss-target="#alert-additional-content-3"
       aria-label="Close"
      >
       Dismiss
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};
