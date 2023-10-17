import { Link } from "react-router-dom";

export const HeadingDiagnosis = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex justify-normal items-center gap-5 w-1/2">
        <Link href="">
          <span className="w-9 h-8 lg:h-9 bg-slate-200 rounded-full text-xl flex items-center justify-center">
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </Link>
        <h1 className="text-2xl font-bold dark:text-white">Malaria</h1>
      </div>
    </div>
  );
};
