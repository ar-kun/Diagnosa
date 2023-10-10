import { Button } from "../Elements/Button/Index";
import { InputForm } from "../Elements/Input/Index";
export const SectionDiagnosis = () => {
  return (
    <section>
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-normal items-center gap-5 md:w-1/2">
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "1%" }}
              ></div>
            </div>
            <h1 className="dark:text-white mt-4 font-bold">Informasi Pasien</h1>

            <form>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="basis-1/2">
                  <InputForm
                    label={"Umur"}
                    type={"text"}
                    placeholder={"Masukkan umur anda..."}
                    id={"umur"}
                    name={"umur"}
                  />
                </div>
                <div className="basis-1/2">
                  <InputForm
                    label={"Jenis kelamin"}
                    type={"text"}
                    placeholder={"Masukkan jenis Kelamin anda..."}
                    id={"jenis-kelamin"}
                    name={"jenis-kelamin"}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="basis-1/2">
                  <InputForm
                    label={"Tinggi Badan"}
                    type={"text"}
                    placeholder={"Masukkan ringgi badan anda..."}
                    id={"tinggi-badan"}
                    name={"tinggi-badan"}
                  />
                </div>
                <div className="basis-1/2">
                  <InputForm
                    label={"Berat Badan"}
                    type={"text"}
                    placeholder={"Masukkan berat badan anda..."}
                    id={"berat-badan"}
                    name={"berat-badan"}
                  />
                </div>
              </div>
              <InputForm
                label={"Apakah ada Kondisi Khusus Sebelumnya?"}
                type={"text"}
                placeholder={"Masukkan jawaban anda..."}
                id={"kondisi-khusus"}
                name={"kondisi-khusus"}
              />
              <InputForm
                label={"Apakah ada Konsumsi Suplemen atau Obat Saat Ini?"}
                type={"text"}
                placeholder={"Masukkan jawaban anda..."}
                id={"konsumsi-khusus"}
                name={"konsumsi-khusus"}
              />
              <div className="flex">
                <Button
                  type="submit"
                  className="text-white ms-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Berikutnya
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
