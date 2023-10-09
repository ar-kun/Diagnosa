export const HeadingMain = () => {
 return (
  <>
   <div className="lg:w-1/2 text-center px-2 lg:px-16">
    <h1 className="text-3xl tracking-wide lg:text-[2.75rem] font-bold lg:tracking-wider lg:leading-[3rem]">
     Diagnosis Penyakit Cepat dari Keluhan Anda
    </h1>
    <p className="leading-7 lg:leading-5 text-lg font-light mb-12 mt-3">
     Ingin mendapatkan diagnosis penyakit secara cepat dari keluhan Anda? Kami siap membantu dengan teknologi AI terbaru!
    </p>
    <a href="diagnosa.html" className="bg-secondary py-3 px-10 rounded-3xl text-white shadow-lg shadow-blue-500/50">
     Mulai Diagnosis
    </a>
   </div>
   <img src="./images/bg.png" alt="" className="w-full my-5 lg:w-3/4 lg:my-0" />
  </>
 );
};
