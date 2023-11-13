/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { SessionChat } from '../../Hooks/isSession';
// import { useEffect } from 'react';

export const SectionCategory = ({ title, description }) => {
 const sessionId = SessionChat();

 const handleLinkClick = () => {
  const latestSession = sessionId.reduce((latest, current) => (new Date(current.date) > new Date(latest?.date) ? current : latest));
  localStorage.setItem('sessionId', JSON.stringify(latestSession));
 };

 return (
  <div>
   {title === 'Konsultasi Umum - Ingin konsultasi diluar diagnosa penyakit diatas?' ? (
    <Link to={'/chat'} onClick={handleLinkClick}>
     <section
      className="container bg-white rounded-md shadow-lg shadow-slate-300-500/50 flex justify-between items-center gap-5 lg:gap-10 my-5 dark:bg-slate-600 dark:text-white"
      id="aids"
     >
      <div className="py-5">
       <h2 className="font-bold text-xl text-start">{title}</h2>
       <p className="text-justify leading-7">{description}</p>
      </div>
      <div>
       <span className="w-9 h-8 lg:h-9 bg-slate-100 rounded-full text-xl flex items-center justify-center text-dark">
        <i className="fa-solid fa-chevron-right"></i>
       </span>
      </div>
     </section>
    </Link>
   ) : (
    <Link aria-disabled className="cursor-default">
     <section
      className="container bg-slate-100 opacity-50 rounded-md shadow-lg shadow-slate-300-500/50 flex justify-between items-center gap-5 lg:gap-10 my-5 dark:bg-slate-600 dark:text-white"
      id="aids"
     >
      <div className="py-5">
       <h2 className="font-bold text-xl text-start">{title}</h2>
       <p className="text-justify leading-7">{description}</p>
      </div>
      <div>
       <span className="w-9 h-8 lg:h-9 bg-slate-100 rounded-full text-xl flex items-center justify-center text-dark">
        <i className="fa-solid fa-chevron-right"></i>
       </span>
      </div>
     </section>
    </Link>
   )}
  </div>
 );
};
