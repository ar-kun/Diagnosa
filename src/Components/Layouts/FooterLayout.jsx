import { Link } from 'react-router-dom';
import { IsLoggedIn } from '../../Hooks/isLogin';

/* eslint-disable react/prop-types */
export const FooterLayout = ({ toogleHidden, handleDarkMode, toggleDarkMode, handleToogle }) => {
 const { isLogin } = IsLoggedIn();

 const handleLogout = () => {
  localStorage.removeItem('isLogin');
  localStorage.removeItem('token');
  window.location.href = '/';
 };
 return (
  <>
   <p className="text-lg text-center font-light dark:text-white my-5">Copyright © 2021 by gigih. All Right Reserved</p>
   {/* <!-- Toggle --> */}
   <div className="menu-toggle">
    {isLogin ? (
     <a
      onClick={handleLogout}
      className={`${!toogleHidden ? 'hidden' : ''} bg-secondary rounded-full text-white flex flex-col justify-center items-center w-10 h-10 my-2`}
      id="profile"
     >
      <i className="fa-solid fa-arrow-left"></i>
     </a>
    ) : (
     <Link
      to={'/auth/login'}
      className={`${!toogleHidden ? 'hidden' : ''} bg-secondary rounded-full text-white flex flex-col justify-center items-center w-10 h-10 my-2`}
      id="profile"
     >
      <i className="fa-solid fa-arrow-right-to-bracket"></i>
     </Link>
    )}

    <div
     id="darkMode"
     onClick={() => handleDarkMode()}
     className={`${
      !toogleHidden ? 'hidden' : ''
     } bg-secondary rounded-full text-white flex flex-col justify-center items-center w-10 h-10 my-2 cursor-pointer`}
    >
     <input type="checkbox" className="absolute z-50 w-8 h-8 opacity-0" id="darkToggle" />
     <i className={toggleDarkMode}></i>
    </div>
    <div className="open" onClick={() => handleToogle()}>
     <input type="checkbox" />
     <span></span>
     <span></span>
     <span></span>
    </div>
   </div>
  </>
 );
};
