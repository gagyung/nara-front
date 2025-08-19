import React from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function FindPasswordPage() {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');

  const isValid = email.trim() !== '' && name.trim() !== '';

  function handleSubmit(e) {
    e.preventDefault();
    alert(`임시 비밀번호를 ${email}로 발송했습니다.`);
  }

  return (
    <div className="other_page">
      <div className="card">
        <header className="card__header">
          <h1 className="card__title">
            나랏돈은<br />처음이라
          </h1>
          <h2 style={{ textAlign: 'center', fontSize: '24px', marginTop: '40px' }}>
            비밀번호 찾기
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

          <TextField
            label="이름"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />

          <Button type="submit" fullWidth disabled={!isValid}>
            비밀번호 찾기
          </Button>
        </form>
      </div>
    </div>
  );
}
