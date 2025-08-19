import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import FindPasswordPage from './pages/FindPasswordPage';
import SignupPage from './pages/SignupPage';
import MyPage from './pages/Mypage/MyPage';

import Navbar from './components/Navbar';
import PolicyCard from './components/PolicyCard';
import PolicyDetailPage from './components/PolicyDetailPage';
import QualificationPage from './components/QualificationPage';
import Calendar from './components/Calendar';
import FloatingChatbot from './components/FloatingChatbot';
import mainImg from './assets/main.png';
import SearchBar from './components/SearchBar';

import './index.css';

// 가상의 DB 데이터
const policiesDB = {
  '전체': [
    { id: 16, title: '정책이름1', desc: '정책 설명 글', tag: '일자리' },
    { id: 17, title: '정책이름2', desc: '정책 설명 글', tag: '주거' },
    { id: 18, title: '정책이름3', desc: '정책 설명 글', tag: '교육' },
  ],
  '일자리': [
    { id: 1, title: '일자리 정책이름1', desc: '일자리 설명 글', tag: '일자리' },
    { id: 2, title: '일자리 정책이름2', desc: '일자리 설명 글', tag: '일자리' },
    { id: 3, title: '일자리 정책이름3', desc: '일자리 정책 설명 글', tag: '일자리' },
  ],
  '주거': [
    { id: 4, title: '주거 정책이름1', desc: '주거 정책 설명 글', tag: '주거' },
    { id: 5, title: '주거 정책이름2', desc: '주거 정책 설명 글', tag: '주거' },
    { id: 6, title: '주거 정책이름3', desc: '주거 정책 설명 글', tag: '주거' },
  ],
  '교육': [
    { id: 7, title: '교육 정책이름1', desc: '교육 정책 설명 글', tag: '교육' },
    { id: 8, title: '교육 정책이름2', desc: '교육 정책 설명 글', tag: '교육' },
    { id: 9, title: '교육 정책이름3', desc: '교육 정책 설명 글', tag: '교육' },
  ],
  '복지문화': [
    { id: 10, title: '창업 정책이름1', desc: '복지문화 정책 설명 글', tag: '복지문화' },
    { id: 11, title: '창업 정책이름2', desc: '복지문화 정책 설명 글', tag: '복지문화' },
    { id: 12, title: '창업 정책이름3', desc: '복지문화 정책 설명 글', tag: '복지문화' },
  ],
  '참여권리': [
    { id: 13, title: '참여권리 정책이름1', desc: '참여권리 정책 설명 글', tag: '참여권리' },
    { id: 14, title: '참여권리 정책이름2', desc: '참여권리 정책 설명 글', tag: '참여권리' },
    { id: 15, title: '참여권리 정책이름3', desc: '참여권리 정책 설명 글', tag: '참여권리' },
  ],
};

function MainPageComponent() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            다른 사람들은
            <br />
            이런 정책을 보고 있어요!
          </h1>
          <img className="hero-img" src={mainImg} alt="main" />
        </div>
        <div className="hero-right">
          <article className="policy-card">
            <div className="pill">카테고리</div>
            <h3></h3>
            <p></p>
          </article>
          <article className="policy-card">
            <div className="pill">카테고리</div>
            <h3></h3>
            <p></p>
          </article>
          <article className="policy-card">
            <div className="pill">카테고리</div>
            <h3></h3>
            <p></p>
          </article>
        </div>
      </section>
      <section className="calendar-wrap">
        <h2>MY Calendar</h2>
        <Calendar />
      </section>
    </>
  );
}

function CategoryPageComponent({ category }) {
  const policies = policiesDB[category] || [];
  return (
    <>
      <div className="category-header">
        <div className="sort-box">
          <span>최신순</span>
          {/* 정렬 옵션 추가 */}
        </div>
      </div>
      <div className="policy-grid">
        {policies.map(policy => (
          <PolicyCard
            key={policy.id}
            id={policy.id}
            title={policy.title}
            desc={policy.desc}
            tag={policy.tag}
          />
        ))}
      </div>
    </>
  );
}

function AppContent({ children }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  const hideNavbar =
    location.pathname.startsWith('/login') ||
    location.pathname.startsWith('/signup') ||
    location.pathname.startsWith('/find-password');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (!isHome) {
      navigate('/'); // ✅ 카테고리 선택 시 홈으로 이동
    }
  };

  const handleHomeClick = () => {
    setActiveCategory(null);
    navigate('/');
  };

  return (
    <div className="page">
      {!hideNavbar && (
        <Navbar
          onHomeClick={handleHomeClick}
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
        />
      )}

      <div className="divider" />

      {/* ✅ 홈에서만 카테고리 선택 시 검색창 보여줌 */}
      {/* {isHome && activeCategory && <SearchBar />} */}

      <div className="container">
        {isHome && activeCategory && <SearchBar />}

        {isHome && activeCategory ? (
          <CategoryPageComponent category={activeCategory} />
        ) : (
          children
        )}
      </div>

      <FloatingChatbot />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent><MainPageComponent /></AppContent>} />
      <Route path="/mypage" element={<AppContent><MyPage /></AppContent>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/find-password" element={<FindPasswordPage />} />
      <Route path="/policy/:policyId" element={<AppContent><PolicyDetailPage /></AppContent>} />
      <Route path="/policy/:policyId/qualification" element={<AppContent><QualificationPage /></AppContent>} />
    </Routes>
  );
}