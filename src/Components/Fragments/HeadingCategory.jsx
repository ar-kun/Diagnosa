import { Link } from 'react-router-dom';

export const HeadingCategory = () => {
 return (
  <div className="flex justify-center items-center gap-5">
   <Link href="">
    <span className="w-9 h-8 lg:h-9 bg-slate-200 rounded-full text-xl flex items-center justify-center">
     <i className="fa-solid fa-chevron-left"></i>
    </span>
   </Link>
   <h1 className="text-2xl font-bold dark:text-white">Pilih Jenis Konsiltasi Diagnosa</h1>
  </div>
 );
};
