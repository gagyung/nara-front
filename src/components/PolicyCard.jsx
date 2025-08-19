import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PolicyCard({ id, title = '', desc = '', tag = '' }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/policy/${id}`);
  };

  return (
  <div className="card" onClick={handleClick}>
    <div className="card-head">
      <div className="card-title-wrap">
        <strong>{title}</strong>
        <span className="badge">{tag}</span>
      </div>
      <span className="star">☆</span>
    </div>
    <div style={{ fontSize: 12, color: '#8a8f9d', marginTop: 8 }}>{desc}</div>
  </div>
);
}