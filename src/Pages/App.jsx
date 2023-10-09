// import { Button } from '../Components/Elements/Button/Index';

import { useState } from 'react';
import { HeadingMain } from '../Components/Fragments/HeadingApp';
import { SectionApp } from '../Components/Fragments/SectionApp';
import { HeadingLayout } from '../Components/Layouts/HeadingLayout';
import { FooterLayout } from '../Components/Layouts/FooterLayout';

export default function App() {
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
 return (
  <>
   <HeadingLayout>
    <HeadingMain />
   </HeadingLayout>
   <main>
    <SectionApp />
   </main>
   <footer>
    <FooterLayout toogleHidden={toogleHidden} handleToogle={handleToogle} handleDarkMode={handleDarkMode} toggleDarkMode={toggleDarkMode} />
   </footer>
  </>
 );
}
