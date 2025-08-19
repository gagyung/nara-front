// src/components/SearchBox.jsx
import React from 'react';
import '../App.css'; // 스타일이 App.css에 정의되어 있다면

export default function SearchBox() {
  return (
    <div className="search-box">
      <input placeholder="검색어를 입력하세요" />
      <span className="dot"></span>
    </div>
  );
}
