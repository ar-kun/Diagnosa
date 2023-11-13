import axios from 'axios';

export const getHistoryMessages = (token, sessionId, callback) => {
 axios
  .get(`http://localhost:7000/api/v1/chat/get-conversation?sessionId=${sessionId}`, {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  })
  .then((res) => {
   callback(true, res.data.conversationHistory.messages);
  })
  .catch((err) => {
   callback(false, err);
  });
};

export const initiateChat = (sessionId, text, callback) => {
 const chatResult = {
  question: text,
  answer: '',
 };

 const message = {
  sessionId,
  input: text,
 };

 fetch('http://localhost:7000/api/v1/chat/conversation', {
  method: 'POST',
  body: JSON.stringify(message),
  headers: {
   'Content-Type': 'application/json',
   Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2vyIjp7InVzZXJJZCI6IjY1NGEwYWY7YTM3YjYyYTg1NGQ4NWFjMiIsImVtYWlsIjoiYWRhbXJhbWRhbi5rdW5AZ21haWwuY29tIn0sImlhdCI6MTY5OTQzODE3MSwiZXhwIjoxNjk5NDQxNzcxfQ.vfKkBgHzHUCkSvfwrDbmml7Aedu1KrbkiQV-IVprnKE',
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
      callback(chatResult);
     } else {
      const textEncode = new TextDecoder().decode(value);
      serverAnswer += textEncode;
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

export const getSessionId = (token, callback) => {
 axios
  .get('http://localhost:7000/api/v1/chat/initialize', {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  })
  .then((res) => {
   callback(true, res.data.sessionId);
  })
  .catch((err) => {
   callback(false, err);
  });
};
