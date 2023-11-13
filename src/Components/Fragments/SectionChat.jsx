/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
// import { IsLoggedIn } from '../../Hooks/isLogin';
import { getHistoryMessages } from '../../Services/messageService';
import { IsLoggedIn } from '../../Hooks/isLogin';
import { getUsername } from '../../Services/authService';
import { SessionChat } from '../../Hooks/isSession';

export const SectionChat = () => {
 const newSessionId = SessionChat();

 const [text, setText] = useState('');
 const [response, setResponse] = useState('');
 const [chat, setChat] = useState([]);
 const [sessionId, setSessionId] = useState('');
 const [date, setDate] = useState('');

 const [histori, setHistori] = useState([]);
 const [token, setToken] = useState('');
 const [activeSessionData, setActiveSessionData] = useState([]);
 const [dataHistori, setDataHistori] = useState([]);

 const [userGuide, setUserGuide] = useState(true);

 const sessionData = JSON.parse(localStorage.getItem('sessionId'));
 let latestSession = null;

 if (sessionData && sessionData.length > 1) {
  latestSession = sessionData.reduce((latest, current) => (new Date(current.date) > new Date(latest?.date) ? current : latest));
 } else {
  latestSession = sessionData;
 }

 useEffect(() => {
  setSessionId(latestSession.session);
  setDate(new Date().toLocaleDateString());
  setToken(localStorage.getItem('token'));
  setDataHistori(JSON.parse(localStorage.getItem('sessionActive')).sort((a, b) => new Date(b.date) - new Date(a.date)));
 }, []);

 useEffect(() => {
  if (activeSessionData.session !== sessionId) {
   const existingData = JSON.parse(localStorage.getItem('sessionActive'));
   activeSessionData.length !== 0 && localStorage.setItem('sessionActive', JSON.stringify([...existingData, activeSessionData]));
  }
 }, [activeSessionData]);

 if (localStorage.getItem('token') === null) {
  window.location.href = '/auth/login';
  return null;
 }
 const username = getUsername(localStorage.getItem('token'));

 const { isLogin } = IsLoggedIn();

 const handleNewSessionId = () => {
  const latestSession = newSessionId.reduce((latest, current) => (new Date(current.date) > new Date(latest?.date) ? current : latest));
  localStorage.setItem('sessionId', JSON.stringify(latestSession));
  setHistori([]);

  setSessionId(latestSession.session);
 };

 const conversation = (e) => {
  const chatResult = {
   question: text,
   answer: '',
  };

  e.preventDefault();

  const message = {
   sessionId,
   input: text,
  };

  fetch('http://localhost:7000/api/v1/chat/conversation', {
   method: 'POST',
   body: JSON.stringify(message),
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
  })
   .then((result) => {
    if (!result.ok) {
     throw new Error('Network response was not ok');
    }
    return result.body.getReader();
   })
   .then((reader) => {
    let serverAnswer = '';
    const readData = () => {
     return reader.read().then(({ done, value }) => {
      if (done) {
       chatResult.answer = serverAnswer;
       setChat([...chat, chatResult]);
       setText('');
       setResponse('');
       const activeSession = JSON.parse(localStorage.getItem('sessionActive'));
       activeSession.session !== sessionId
        ? setActiveSessionData({ session: sessionId, email: username, result: chatResult, date: new Date() })
        : null;
      } else {
       const textEncode = new TextDecoder().decode(value);
       serverAnswer += textEncode;
       setResponse((prev) => prev + textEncode);
       return readData();
      }
     });
    };

    return readData();
   })
   .catch((error) => {
    console.error('Error:', error);
   });
 };

 const historiHandler = (sessionId) => {
  setSessionId(sessionId);
  getHistoryMessages(localStorage.getItem('token'), sessionId, (result, data) => {
   if (result) {
    setHistori(data);
   }
  });
 };

 return (
  <div className="flex justify-between w-full items-center gap-10 h-screen py-10">
   <HistorySection
    isLogin={isLogin}
    historiHandler={historiHandler}
    handleNewSessionId={handleNewSessionId}
    dataHistori={dataHistori}
    setUserGuide={setUserGuide}
   />
   <ChatSection
    conversation={conversation}
    chat={chat}
    response={response}
    text={text}
    setText={setText}
    data={date}
    histori={histori}
    dataHistori={dataHistori}
    setUserGuide={setUserGuide}
    userGuide={userGuide}
   />
  </div>
 );
};

const HistorySection = ({ isLogin, historiHandler, handleNewSessionId, dataHistori, setUserGuide }) => {
 const firstData = dataHistori.slice(0, 1);

 return (
  <section id="histori" className="[&>*]:my-2 w-[30%] h-full flex flex-col">
   <div className="flex justify-end gap-5">
    <button onClick={() => setUserGuide(true)} className="block text-white bg-secondary rounded-lg p-3">
     <i className="fa-solid fa-circle-info"></i> Panduan Pengguna
    </button>
    <button onClick={() => handleNewSessionId()} className="block text-white bg-secondary rounded-lg p-3">
     <i className="fa-solid fa-plus"></i> Buat Catatan baru
    </button>
   </div>
   <div className=" bg-white rounded-lg p-3 flex gap-5 items-center">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input type="text" className="w-full" placeholder="Cari Berdasarkan Nama Konsiltasi" />
   </div>
   {firstData.map((data, index) => (
    <div key={index} className="bg-gradient-to-r from-sky-500 to-secondary rounded-lg p-5 text-white">
     <div className="flex flex-col justify-start items-start cursor-pointer" onClick={() => historiHandler(data.session)}>
      <h3 className="font-bold">Konsutasi Baru</h3>
      <p className="italic text-sm">{new Date(data.date).toUTCString()}</p>
     </div>
     <p>{data.result.question}</p>
    </div>
   ))}
   <div className="h-full bg-white flex justify-start items-center flex-col p-5 rounded-lg [&>*]:my-2">
    {isLogin ? (
     dataHistori.length === 0 ? (
      <h3 className="text-xl font-bold">Catatan Konsulmu</h3>
     ) : (
      dataHistori.map((data, index) => (
       <div key={index} className="bg-gradient-to-r from-sky-500 to-secondary rounded-lg p-5 text-white">
        <div className="flex justify-between items-center">
         <h3 className="font-bold">{new Date(data.date).toDateString()}</h3>
         {/* <p>{data.date}</p> */}
        </div>
        <p>{data.result.question}</p>
       </div>
      ))
     )
    ) : (
     <>
      <h3 className="text-xl font-bold">Simpan Catatan Konsulmu!</h3>
      <p className="text-center">Kamu bisa menyimpan dan melanjutkan riwayat catatan konsultasi sebelumnya!</p>
      <a href="diagnosa.html" className="bg-secondary py-3 px-10 rounded-3xl text-white shadow-lg shadow-blue-500/50">
       Masuk/Daftar
      </a>
     </>
    )}
   </div>
  </section>
 );
};

const ChatSection = ({ conversation, chat, response, text, setText, date, histori, dataHistori, setUserGuide, userGuide }) => {
 useEffect(() => {
  if (dataHistori !== null) {
   setUserGuide(false);
  }
 }, []);
 return (
  <section id="chat" className="w-[70%] relative rounded-lg h-full self-center bg-white flex flex-col justify-between px-5">
   <div className="py-5">
    <h4 className="font-bold text-xl">Konsutasi Baru</h4>
    <p className="text-secondary">{date}</p>
    <hr />
   </div>
   <div className="h-[80%] flex flex-col gap-5 text-white overflow-auto">
    {histori &&
     histori.map((message, index) => (
      <div className="flex flex-col gap-5" key={index}>
       {message.type === 'human' ? (
        <div className="flex justify-end">
         <div className="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">{message.data.content}</div>
        </div>
       ) : (
        <div className="flex justify-start">
         <div className="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">{message.data.content}</div>
        </div>
       )}
      </div>
     ))}

    {chat.map((message, index) => {
     return (
      <div className="flex flex-col gap-5" key={index}>
       <div className="flex justify-end">
        <div className="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">{message.question}</div>
       </div>
       <div className="flex justify-start">
        <div className="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">{message.answer}</div>
       </div>
      </div>
     );
    })}
    {text && (
     <div className="flex flex-col gap-5">
      <div className="flex justify-end">
       <div className="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">{text}</div>
      </div>
     </div>
    )}
    {response && (
     <div className="flex flex-col gap-5">
      <div className="flex justify-start">
       <div className="bg-gradient-to-r from-sky-500 to-secondary p-5 rounded-lg w-[70%]">{response}</div>
      </div>
     </div>
    )}
   </div>
   <hr />

   <form onSubmit={conversation} className="py-3 flex flex-col items-center relative">
    <input
     className="p-2 rounded-md w-full"
     type="text"
     placeholder="Ketik Konsultasi disini"
     value={text}
     onChange={(e) => setText(e.target.value)}
    />
    <button type="submit">
     <i className="fa-regular fa-paper-plane absolute right-5 top-1/3 cursor-pointer"></i>
    </button>
   </form>
   {/* </div> */}

   {/* userguide */}
   {userGuide && (
    <div
     className="absolute left-0 rounded-md bg-secondary bg-opacity-25 backdrop-blur-sm  w-full h-full flex justify-center items-center"
     id="guide"
    >
     <div className="bg-white p-10 rounded-md relative w-1/2 flex flex-col gap-5">
      <div className="absolute top-0 right-0 p-5">
       <i className="fa-solid fa-xmark text-2xl cursor-pointer" onClick={() => setUserGuide(false)}></i>
      </div>
      <h1 className="font-bold text-xl text-slate-600">Selamat datang di Layanan Kesehatan Gigih</h1>
      <p>Sebelum kita mulai, berikut beberapa panduan untuk memudahkan Anda dalam berinteraksi dengan chatbot kami:</p>
      <ul className=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-justify">
       <li>
        Saat menjelaskan gejala, cobalah untuk memberikan deskripsi yang jelas dan spesifik. Misalnya, seberapa sering Anda merasakan gejala, sejak
        kapan, dan apakah ada faktor pemicu tertentu.
       </li>
       <li>Chatbot akan mengajukan beberapa pertanyaan untuk memahami kondisi Anda. Pastikan untuk menjawab dengan jujur dan seakurat mungkin.</li>
       <li>
        Jika Anda memiliki pertanyaan khusus atau ingin informasi lebih lanjut, siapkan pertanyaan tersebut sebelumnya untuk memastikan percakapan
        yang efektif.
       </li>
       <li>
        Chatbot ini dirancang untuk memberikan informasi umum. Namun, untuk masalah medis yang lebih serius atau pribadi, sebaiknya konsultasikan
        dengan profesional kesehatan secara langsung.
       </li>
       <li>Jika Anda tidak yakin dengan pertanyaan atau jawaban, jangan ragu untuk meminta klarifikasi. Kami di sini untuk membantu!</li>
      </ul>
      <p>
       Ingatlah bahwa chatbot ini tidak dapat menggantikan konsultasi langsung dengan dokter. Untuk masalah kesehatan yang mendesak atau serius,
       segera hubungi profesional medis atau layanan darurat setempat.
      </p>
      <p>Terima kasih dan semoga Anda mendapatkan informasi yang berguna melalui Layanan Kesehatan ChatBot kami!</p>
     </div>
    </div>
   )}
  </section>
 );
};
