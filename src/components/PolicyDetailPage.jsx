import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import FloatingChatbot from './FloatingChatbot';
import '../index.css';

// 가상의 정책 데이터 (데이터베이스에서 가져올 값)
const policyDetailsDB = {
  '1': {
    id: 1,
    name: '취업 정책이름 1',
    description: '정책에 대한 쉬운 설명',
    category: '취업',
    period: '사업 운영 신청 기간',
    score: '000',
    summary: '주관기관, 정책 목적, 유형 등 전체적 내용을 쉽게',
    details: '유형 같은 내용',
    qualification: '신청자격 확인하기',
    additionalNotes: '추가사항',
    excluded: '참여제한 대상',
    documents: '제출서류',
    applicationSite: '신청 사이트',
    applicationProcedure: '신청절차',
  },
  // ... 다른 정책 데이터 ...
};

export default function PolicyDetailPage() {
  const { policyId } = useParams();
  const navigate = useNavigate();
  const policy = policyDetailsDB[policyId];

  const handleQualificationCheck = () => {
    navigate(`/policy/${policyId}/qualification`);
  };

  if (!policy) {
    return <div className="page">정책을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="page">
      <div className="divider" />
      <div className="policy-detail-container">
        <div className="policy-header-section">
          <h1 className="policy-title">{policy.name}</h1>
          <span className="category-badge">{policy.category}</span>
          <span className="policy-period">{policy.period}</span>
          <span className="policy-score">스크랩 {policy.score}☆</span>
        </div>
        <p className="policy-summary">{policy.summary}</p>
        
        <div className="info-section">
          <h2>정책정보</h2>
          <div className="info-item">
            <strong className="info-title">지원 내용</strong>
            <p>{policy.details}</p>
          </div>
        </div>

        <div className="info-section">
          <h2>신청자격</h2>
          <div className="info-item">
            <button className="qualification-btn" onClick={handleQualificationCheck}>{policy.qualification}</button>
            <ul>
              <li>{policy.additionalNotes}</li>
            </ul>
          </div>
          <div className="info-item">
            <p className="excluded-text">참여제한 대상</p>
          </div>
        </div>

        <div className="info-section">
          <h2>신청방법</h2>
          <div className="application-info-grid">
            <div className="app-item">
              <strong className="app-title">제출서류</strong>
            </div>
            <div className="app-item">
              <strong className="app-title">신청 사이트</strong>
            </div>
          </div>
          <div className="app-procedure-item">
            <strong className="app-title">신청절차</strong>
          </div>
        </div>
      </div>
      <FloatingChatbot />
    </div>
  );
}