import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import chatbot from '../assets/chatbot.png';

export default function Navbar({ onHomeClick, activeCategory, onChange }) {
  const tabs = ['전체','일자리', '복지문화', '참여권리', '주거', '교육'];
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <div className="brand" onClick={onHomeClick}>나랏돈은 처음이라</div>
      <nav className="tabs">
        {tabs.map(t => (
          <a
            key={t}
            className={clsx('tab', activeCategory === t && 'active')}
            onClick={() => onChange(t)}
          >
            {t}
          </a>
        ))}
      </nav>
      <div className="right-cta">
        <button className="ghost" onClick={() => navigate('/mypage')}>마이페이지</button>
        <button className="ghost" onClick={() => navigate('/signup')}>회원가입</button>
        <button className="primary" onClick={() => navigate('/login')}>로그인</button>
      </div>

    </div>
  );
}