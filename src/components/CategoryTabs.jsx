import React from 'react';
import clsx from 'clsx';

export default function CategoryTabs({ active, onChange }) {
  const tabs = ['일자리', '복지문화', '참여권리', '주거', '교육'];
  return (
    <div className="container tabs-line">
      {tabs.map(t => (
        <div
          key={t}
          className={clsx('tab', active === t && 'active')}
          onClick={() => onChange(t)}
        >
          {t}
        </div>
      ))}
      <div className="search-box">
        <input placeholder="검색어를 입력하세요" />
        <span className="dot"></span>
      </div>
    </div>
  );
}