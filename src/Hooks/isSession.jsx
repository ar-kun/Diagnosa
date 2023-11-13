import { useEffect } from 'react';
import { useState } from 'react';
import { getSessionId } from '../Services/messageService';
import { getUsername } from '../Services/authService';

export const SessionChat = () => {
 const [sessionId, setSessionId] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   if (localStorage.getItem('token')) {
    getSessionId(localStorage.getItem('token'), (result, data, error) => {
     if (result) {
      const newSession = { session: data, username: getUsername(localStorage.getItem('token')), date: new Date() };
      setSessionId((prevSessions) => [...prevSessions, newSession]);
     } else {
      console.log(error);
     }
    });
   }
  };

  fetchData();
 }, []);

 return sessionId;
};
