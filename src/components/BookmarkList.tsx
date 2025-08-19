// pages/Mypage/BookmarkList.tsx

import React, { useState } from 'react'
import './BookmarkList.css' 

type BookmarkItem = {
  id: number;
  title: string;
  desc: string;
  category: string;
};

const dummyBookmarks: BookmarkItem[] = [
  { id: 1, title: '정책이름', desc: '정책 설명 글', category: '일자리' },
  { id: 2, title: '정책이름', desc: '정책 설명 글', category: '주거' },
  { id: 3, title: '정책이름', desc: '정책 설명 글', category: '교육' },
  { id: 4, title: '정책이름', desc: '정책 설명 글', category: '교육' },
  { id: 5, title: '정책이름', desc: '정책 설명 글', category: '복지생활' },
  { id: 6, title: '정책이름', desc: '정책 설명 글', category: '참여권리' },
  { id: 7, title: '정책이름', desc: '정책 설명 글', category: '일자리' },
  { id: 8, title: '정책이름', desc: '정책 설명 글', category: '주거' },
  { id: 9, title: '정책이름', desc: '정책 설명 글', category: '교육' },
  { id: 10, title: '정책이름', desc: '정책 설명 글', category: '교육' },
  { id: 11, title: '정책이름', desc: '정책 설명 글', category: '복지생활' },
  { id: 12, title: '정책이름', desc: '정책 설명 글', category: '교육' },
  { id: 13, title: '정책이름', desc: '정책 설명 글', category: '복지생활' },
  { id: 14, title: '정책이름', desc: '정책 설명 글', category: '참여권리' },
  { id: 15, title: '정책이름', desc: '정책 설명 글', category: '일자리' },
  { id: 16, title: '정책이름', desc: '정책 설명 글', category: '주거' },
  { id: 17, title: '정책이름', desc: '정책 설명 글', category: '교육' },
  { id: 18, title: '정책이름', desc: '정책 설명 글', category: '교육' },
];

export default function BookmarkList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyBookmarks.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dummyBookmarks.length / itemsPerPage);

  return (
    <div className="bookmark-list-container">
      <div className="bookmark-list">
        {currentItems.map((item) => (
          <div key={item.id} className="bookmark-card no-background">
            <div className="bookmark-card-top">
              <span className="category-badge">{item.category}</span>
              <button className="bookmark-btn">★</button>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={currentPage === idx + 1 ? "active" : ""}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}