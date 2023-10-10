export const SectionChat = () => {
  return (
    <>
      <HistorySection />
      <ChatSection />
    </>
  );
};

const HistorySection = () => {
  return (
    <section id="histori" class="[&>*]:my-2 w-[30%] h-screen flex flex-col">
      <div class="flex justify-end pt-10">
        <button class="block text-white bg-secondary rounded-lg p-3">
          Buat Catatan baru
        </button>
      </div>
      <a href="" class="block bg-white rounded-lg p-3">
        Cari Berdasarkan Nama Konsiltasi
      </a>
      <div class="bg-gradient-to-r from-sky-500 to-secondary rounded-lg p-5 text-white">
        <div class="flex justify-between items-center">
          <h3 class="font-bold">Malaria</h3>
          <p>27 Sept 2023</p>
        </div>
        <p>
          Demam. Menggigil. Sakit kepala. Berkeringat banyak. Lemas. Pegal linu.
        </p>
      </div>
      <div class="h-96 bg-white flex justify-center items-center flex-col p-10 rounded-lg [&>*]:my-2">
        <h3 class="text-xl font-bold">Simpan Catatan Konsulmu!</h3>
        <p class="text-center">
          Kamu bisa menyimpan dan melanjutkan riwayat catatan konsultasi
          sebelumnya!
        </p>
        <a
          href="diagnosa.html"
          class="bg-secondary py-3 px-10 rounded-3xl text-white shadow-lg shadow-blue-500/50"
        >
          Masuk/Daftar
        </a>
      </div>
    </section>
  );
};

const ChatSection = () => {
  return (
    <section
      id="chat"
      class="w-[70%] max-h-[40rem] self-center bg-white my-4 flex flex-col px-5"
    >
      <div class="py-5">
        <h4 class="font-bold text-xl">Malaria</h4>
        <p class="text-secondary">28 Sept 2023</p>
        <hr />
      </div>
      <div class="h-[70%] flex flex-col gap-5 text-white overflow-auto">
        <div class="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">
          Gejala yang Anda sebutkan, seperti demam, menggigil, sakit kepala,
          berkeringat banyak, lemas, pegal linu, mual, dan muntah, memang bisa
          menjadi tanda-tanda malaria. Namun, gejala-gejala ini juga dapat
          disebabkan oleh berbagai penyakit lainnya.
        </div>
        <div class="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">
          Gejala yang Anda sebutkan, seperti demam, menggigil, sakit kepala,
          berkeringat banyak, lemas, pegal linu, mual, dan muntah, memang bisa
          menjadi tanda-tanda malaria. Namun, gejala-gejala ini juga dapat
          disebabkan oleh berbagai penyakit lainnya.
        </div>
        <div class="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">
          Malaria adalah penyakit yang ditularkan melalui gigitan nyamuk
          Anopheles yang membawa parasit Plasmodium. Untuk mendapatkan diagnosis
          yang akurat, sangat penting untuk melakukan pemeriksaan medis yang
          lebih mendalam dan tes darah yang dapat mendeteksi keberadaan parasit
          malaria.
        </div>
        <div class="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">
          Istirahat dan Hidrasi: Jaga agar tubuh Anda tetap terhidrasi dengan
          minum air yang cukup. Istirahat yang cukup juga penting untuk membantu
          tubuh melawan infeksi.
        </div>
        <div class="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">
          Istirahat dan Hidrasi: Jaga agar tubuh Anda tetap terhidrasi dengan
          minum air yang cukup. Istirahat yang cukup juga penting untuk membantu
          tubuh melawan infeksi.
        </div>
      </div>
      <hr />
      <div class="py-3 flex flex-col">
        <input
          type="text"
          placeholder="Ketik Konsultasi disini"
          class="p-2 rounded-md"
        />
      </div>
    </section>
  );
};
