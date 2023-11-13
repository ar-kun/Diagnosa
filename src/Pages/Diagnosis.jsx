import { useState } from 'react';
import { FooterLayout } from '../Components/Layouts/FooterLayout';
import { HeadingDiagnosis } from '../Components/Fragments/HeadingDiagnosis';
import { SectionDiagnosis } from '../Components/Fragments/SectionDiagnosis';
import { Button } from '../Components/Elements/Button/Index';

export const Diagnosis = () => {
 const [toogleHidden, setToogleHidden] = useState(false);
 const [toggleDarkMode, setToggleDarkMode] = useState('fa-solid fa-moon');
 const [darkMode, setDarkMode] = useState(false);

 const handleToogle = () => {
  setToogleHidden(!toogleHidden);
 };

 const handleDarkMode = () => {
  const html = document.querySelector('html');
  if (darkMode) {
   setToggleDarkMode('fa-solid fa-moon');
   html.classList.remove('dark');
   return setDarkMode(!darkMode);
  } else {
   setToggleDarkMode('fa-solid fa-sun');
   html.classList.add('dark');
   return setDarkMode(!darkMode);
  }
 };

 const handleLogout = () => {
  localStorage.removeItem('isLogin');
  localStorage.removeItem('token');
  window.location.href = '/';
 };
 return (
  <>
   <header className="container lg:px-0 my-5">
    <HeadingDiagnosis />
    <Button variant=" h-10 px-4 font-semibold rounded-md w-auto bg-blue-600 text-white" text="Logout" onClick={handleLogout} />
   </header>
   <main className="container lg:px-0 my-5">
    <SectionDiagnosis />
   </main>
   <footer>
    <FooterLayout toogleHidden={toogleHidden} handleToogle={handleToogle} handleDarkMode={handleDarkMode} toggleDarkMode={toggleDarkMode} />
   </footer>
  </>
 );
};
