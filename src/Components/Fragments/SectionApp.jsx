export const SectionApp = () => {
 return (
  <>
   <AboutSection />
   <QuestionSection />
  </>
 );
};

const AboutSection = () => {
 return (
  <section className="container text-center lg:px-32 my-5" id="about">
   <h3 className="text-secondary text-sm lg:text-lg">Ketahui Lebih Lanjut</h3>
   <h2 className="font-bold text-2xl mt-3 mb-7 lg:text-4xl dark:text-white">Tentang Kami</h2>
   <div className="flex flex-col lg:flex-row lg:gap-10 flex-wrap items-center justify-center">
    <img src="./images/Rectangle 832.png" alt="" className="order-last lg:order-first" />
    <div className="text-justify mb-10 lg:w-[40%]">
     <p className="[&>*]:block [&>*]:mb-5 leading-8 dark:text-white">
      <span>
       Jangan menunggu lebih lama untuk mendapatkan jawaban. Segera lakukan diagnosa keluhan Anda dan temukan hasil diagnosa penyakit serta
       rekomendasi perawatan utamanya. Mudah dan cepat!
      </span>
      <span>
       <b>PERHATIAN:</b> Aplikasi kami mengandalkan kecerdasan buatan untuk memberikan respons cepat terhadap keluhan penyakit Anda. Meskipun kami
       berusaha memberikan informasi yang akurat, sangat disarankan untuk berkonsultasi dengan seorang dokter dan melakukan tes tambahan untuk
       diagnosis yang lebih akurat.
      </span>
     </p>
     <div className="flex justify-center">
      <a href="diagnosa.html" className="bg-secondary py-3 px-10 rounded-3xl text-white shadow-lg shadow-blue-500/50">
       Mulai Diagnosis
      </a>
     </div>
    </div>
   </div>
  </section>
 );
};

const QuestionSection = () => {
 return (
  <section className="container text-center lg:px-32 my-10 lg:my-28 flex flex-col lg:flex-row flex-wrap justify-center lg:gap-10" id="question">
   <img src="./images/Rectangle 839.png" alt="" className="order-last w-[30%]" />
   <div className="lg:w-[50%]">
    <h2 className="text-2xl font-bold my-5 lg:text-[3rem] text-start lg:leading-[3.5rem] dark:text-white">Temukan Jawaban Atas Keluhan Anda!</h2>
    <div className="flex justify-center">
     <a href="diagnosa.html" className="bg-secondary py-3 px-10 rounded-3xl text-white shadow-lg shadow-blue-500/50">
      Get Started
     </a>
    </div>
   </div>
  </section>
 );
};
