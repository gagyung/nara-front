import React from 'react';
import Navbar from './Navbar';
import FloatingChatbot from './FloatingChatbot';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function QualificationPage() {
   const navigate = useNavigate();
  return (
    <div className="page">
      <div className="divider" />
      <div className="qualification-container">
        <div className="qualification-box">
          <div className="qualification-text">
            신청가능 여부 한번에 확인하기
          </div>
          <button className="login-btn"
            onClick={() => navigate('/login')}
          >
            로그인
            </button>
        </div>
        <div className="qualification-details">
          <ul className="details-grid">
            <li>
              <span>연령</span>
            </li>
            <li>
              <span>거주지역</span>
            </li>
            <li>
              <span>소득</span>
            </li>
            <li>
              <span>학력</span>
            </li>
            <li>
              <span>전공</span>
            </li>
            <li>
              <span>취업상태</span>
            </li>
            <li>
              <span>특화분야</span>
            </li>
          </ul>
          <div className="additional-info">
            <ul>
              <li>
                <span>추가사항</span>
              </li>
            </ul>
          </div>
          <div className="excluded-info">
            <ul>
              <li>
                <span>참여제한 대상</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FloatingChatbot />
    </div>
  );
}