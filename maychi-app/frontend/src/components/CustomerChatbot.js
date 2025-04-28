import React, { useState, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function CustomerChatbot() {
  const [messages, setMessages] = useState([]);

  const onSend = useCallback(async (msgs = []) => {
    setMessages(previous => GiftedChat.append(previous, msgs));
    try {
      const response = await fetch('http://localhost:3001/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...msgs] }),
      });
      const data = await response.json();
      const botMessage = {
        _id: new Date().getTime(),
        text: data.text,
        createdAt: new Date(),
        user: { _id: 2, name: 'Soporte MayChi' },
      };
      setMessages(previous => GiftedChat.append(previous, [botMessage]));
    } catch (error) {
      console.error('Chatbot error:', error);
    }
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={msgs => onSend(msgs)}
      user={{ _id: 1 }}
    />
  );
}
