import React from 'react';
import botImg from '../assets/chatbot.png';

export default function FloatingChatbot() {
  return (
    <button className="fab">
      <img src={botImg} alt="chatbot" />
    </button>
  );
}