import { useEffect, useRef, useState } from 'react';
import { InputForm } from '../Components/Elements/Input/Index';
import { Button } from '../Components/Elements/Button/Index';
import { ForgotPassword } from '../Services/authService';
import emailjs from '@emailjs/browser';
// import env from 'react-dotenv';

export const ForgotPasswordPage = () => {
 const [openAlert, setOpenAlert] = useState(false);
 const [inputValue, setInputValue] = useState('');
 const [loginFailed, setLoginFailed] = useState('');

 const serviceId = import.meta.env.VITE_SERVICE_ID;
 const templateId = import.meta.env.VITE_TEMPLATE_ID;
 const userId = import.meta.env.VITE_USER_ID;

 const handlerSendClick = (e) => {
  e.preventDefault();
  const user = {
   email: e.target.email.value,
  };
  ForgotPassword(user, (status, res) => {
   if (status) {
    const tokenMatch = res.message.match(/token=([^&]+)/);
    const idMatch = res.message.match(/id=([^&]+)/);

    const templateParams = {
     from_name: 'Diagnose Gigih',
     to: user.email,
     to_name: user.email.match(/^([^@]*)@/)[1],
     message: `http://localhost:5173/auth/reset-password?token=${tokenMatch[1]}&id=${idMatch[1]}`,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
     function (response) {
      console.log('Email send successfully!', response.text);
     },
     function (error) {
      console.log('Failed sending email', error);
     }
    );

    setOpenAlert(true);
    setInputValue('');
   } else {
    setLoginFailed(res);
   }
  });
 };

 const emailRef = useRef(null);
 useEffect(() => {
  emailRef.current.focus();
  return () => {};
 }, []);

 return (
  <div className="flex flex-col gap-5 ">
   <div className="flex justify-center w-full items-center h-screen gap-10">
    <div className="max-w-4xl text-white">
     <div className="flex flex-col items-center justify-center p-4 space-y-4 antialiased bg-gray-100 rounded-md">
      <div className="w-full px-8 max-w-lg space-y-6 bg-gradient-to-r  from-sky-500 to-secondary rounded-md py-16">
       {loginFailed && <p className="bg-slate-200 rounded-md text-red-500 py-2 font-bold text-center my-3">{loginFailed}</p>}
       <h1 className=" mb-6 text-2xl font-bold text-center">Send Request Reset Password</h1>
       <p className="text-center mx-12">
        We are here to help you to recover your password. Enter the email address you used when you joined and we&apos;ll send you instructions to
        reset your password.
       </p>
       <form onSubmit={handlerSendClick} className="space-y-6 w-ful">
        <InputForm
         type={'email'}
         placeholder={'example@gmail.com'}
         id={'email'}
         name={'email'}
         ref={emailRef}
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
        />
        <div>
         <Button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         >
          Send
         </Button>
        </div>
       </form>
       <div className="text-sm text-text-white items-center flex justify-between">
        <p className="text-text-white cursor-pointer hover:text-blue-500 inline-flex items-center ml-4">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path
           fillRule="evenodd"
           d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
           clipRule="evenodd"
          />
         </svg>
         Back
        </p>
        <p className="hover:text-blue-500 cursor-pointer">Need help?</p>
       </div>
      </div>
     </div>
    </div>

    <div className="w-1/2">
     <img src="/public/images/3293464.png" alt="" />
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
      <h3 className="text-lg font-medium">Success to send request, Please check your email</h3>
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
