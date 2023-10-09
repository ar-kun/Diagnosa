/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export const SectionCategory = ({ title, description }) => {
 return (
  <section
   className="container bg-white rounded-md shadow-lg shadow-slate-300-500/50 flex items-center gap-5 lg:gap-10 my-5 dark:bg-slate-600 dark:text-white"
   id="aids"
  >
   <div className="py-5">
    <h2 className="font-bold text-xl text-start">{title}</h2>
    <p className="text-justify leading-7">{description}</p>
   </div>
   <Link href="">
    <span className="w-9 h-8 lg:h-9 bg-slate-100 rounded-full text-xl flex items-center justify-center text-dark">
     <i className="fa-solid fa-chevron-right"></i>
    </span>
   </Link>
  </section>
 );
};
