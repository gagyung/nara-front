import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const isValid = email.trim() !== '' && password.trim() !== '';

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify({ email, password }, null, 2));
    navigate('/');
  }

  return (
    <div className="other_page">
      <div className="card">
        <header className="card__header">
          <h1 className="card__title">
            나랏돈은<br />처음이라
          </h1>
          <h2 style={{ textAlign: 'center', fontSize: '24px', marginTop: '40px' }}>
            로그인
          </h2>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <TextField
            label="이메일"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <PasswordField
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" fullWidth disabled={!isValid}>
            로그인
          </Button>
        </form>

        <nav className="links">
          <Link to="/find-password" className="links__item">비밀번호 찾기</Link>
          <span className="links__divider">｜</span>
          <Link to="/signup" className="links__item">회원가입</Link>
        </nav>
      </div>
    </div>
  );
}
