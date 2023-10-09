import { useState } from 'react';
import { FooterLayout } from '../Components/Layouts/FooterLayout';
import { SectionCategory } from '../Components/Fragments/SectionCategory';
import { HeadingCategory } from '../Components/Fragments/HeadingCategory';

export const Category = () => {
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

 const data = [
  {
   title: 'AIDS',
   description:
    'AIDS adalah penyakit yang disebabkan oleh virus HIV. individu dengan HIV dapat mengembangkan AIDS, yang ditandai oleh infeksi serius dan penyakit yang lebih parah.',
  },
  {
   title: 'Malaria',
   description:
    'Malaria adalah penyakit menular yang disebabkan oleh parasit Plasmodium yang ditularkan melalui gigitan nyamuk Anopheles dapat menjadi penyakit serius jika tidak diobati.',
  },
  {
   title: 'TBC (Tuberkulosis)',
   description:
    'TBC adalah penyakit infeksius yang disebabkan oleh bakteri Mycobacterium tuberculosis. Penyakit ini biasanya menyerang paru-paru, tetapi dapat mengenai organ tubuh lainnya.',
  },
  {
   title: 'Konsultasi Umum - Ingin konsultasi diluar diagnosa penyakit diatas?',
   description:
    'Punya keluhan tersendiri dan ingin konsultasi diluar dari diagnosa penyakit diatas? Pilih menu ini untuk melakukan konsultasi langsung.',
  },
 ];
 return (
  <>
   <header className="container lg:px-32 my-5">
    <HeadingCategory />
   </header>
   <main className="px-5 lg:px-60">
    {data.map((item, index) => (
     <SectionCategory key={index} title={item.title} description={item.description} />
    ))}
   </main>
   <footer>
    <FooterLayout toogleHidden={toogleHidden} handleToogle={handleToogle} handleDarkMode={handleDarkMode} toggleDarkMode={toggleDarkMode} />
   </footer>
  </>
 );
};
