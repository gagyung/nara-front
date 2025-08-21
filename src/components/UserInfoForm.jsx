import React, { useState } from 'react';
import PasswordField from './PasswordField';

export default function UserInfoForm({
  email, password, name, birthYear, birthMonth, birthDay,
  province, region, education, marital, jobStatus,
  major, specialty, income,
  setEmail, setPassword, setName, setBirthYear, setBirthMonth, setBirthDay,
  setProvince, setRegion, setEducation, setMarital, setJobStatus,
  setMajor, setSpecialty, setIncome, 
  regions,
  mode, footer
}) {
  const [showPassword, setShowPassword] = useState(false);

  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="user-info-box">
      {/* 이름, 이메일, 비밀번호 */}
      <label className="field">
        <span className="field__label">이름</span>
        <input className="field__input" value={name} onChange={e => setName(e.target.value)} />
      </label>

      <label className="field">
        <span className="field__label">이메일</span>
        <input className="field__input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>

      <PasswordField
        label="비밀번호"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {/* 생년월일 */}
      <div className="form__group">
        <label>생년월일</label>
        <div className="form__row">
          <select value={birthYear} onChange={e => setBirthYear(e.target.value)}>
            <option value="">년</option>
            {years.map((y) => <option key={y}>{y}</option>)}
          </select>
          <select value={birthMonth} onChange={e => setBirthMonth(e.target.value)}>
            <option value="">월</option>
            {months.map((m) => <option key={m}>{m}</option>)}
          </select>
          <select value={birthDay} onChange={e => setBirthDay(e.target.value)}>
            <option value="">일</option>
            {days.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
      </div>

      {/* 지역 */}
      <div className="form__row form__row--region">
        <div className="form__group">
          <label>도</label>
          <select value={province} onChange={(e) => { setProvince(e.target.value); setRegion(''); }}>
            <option value="">도 선택</option>
            {Object.keys(regions).map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>

        <div className="form__group">
          <label>시·구군</label>
          <select value={region} onChange={e => setRegion(e.target.value)} disabled={!province}>
            <option value="">시·구군 선택</option>
            {province && regions[province].map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="form__group">
        <label>추가정보</label>
        <div className="form__row">
          <select value={education} onChange={e => setEducation(e.target.value)}>
            <option value="">학력</option>
            <option>고졸 미만</option>
            <option>고교 재학</option>
            <option>고졸 예정</option>
            <option>고교 졸업</option>
            <option>대학 재학</option>
            <option>대졸 예정</option>
            <option>대학 졸업</option>
            <option>석·박사</option>
            <option>기타</option>
          </select>
          <select value={marital} onChange={e => setMarital(e.target.value)}>
            <option value="">혼인여부</option>
            <option>제한없음</option>
            <option>기혼</option>
            <option>미혼</option>
          </select>
          <select value={jobStatus} onChange={e => setJobStatus(e.target.value)}>
            <option value="">취업상태</option>
            <option>제한없음</option>
            <option>재직자</option>
            <option>자영업자</option>
            <option>미취업자</option>
            <option>프리랜서</option>
            <option>일용근로자</option>
            <option>(예비)창업자</option>
            <option>단기근로자</option>
            <option>영농종사자</option>
            <option>기타</option>
          </select>
        </div>
      </div>

      {/* 전공/특화 */}
      <div className="form__group">
        <label>전공분야</label>
        <select value={major} onChange={e => setMajor(e.target.value)}>
          <option value="">선택</option>
          <option>제한없음</option>
          <option>인문계열</option>
          <option>사회계열</option>
          <option>상경계열</option>
          <option>이학계열</option>
          <option>공학계열</option>
          <option>예체능계열</option>
          <option>농산업계열</option>
          <option>기타</option>
        </select>
      </div>

      <div className="form__group">
        <label>특화분야</label>
        <select value={specialty} onChange={e => setSpecialty(e.target.value)}>
          <option value="">선택</option>
          <option>제한없음</option>
          <option>중소기업</option>
          <option>여성</option>
          <option>기초생활수급자</option>
          <option>한부모가정</option>
          <option>장애인</option>
          <option>농업인</option>
          <option>군인</option>
          <option>지역인재</option>
          <option>기타</option>
        </select>
      </div>

      {/* 연소득 */}
      <div className="form__group">
        <label>연소득</label>
        <select value={income} onChange={e => setIncome(e.target.value)}>
          <option value="">선택</option>
          <option>1000만원 이하</option>
          <option>2000만원 이하</option>
          <option>3000만원 이하</option>
          <option>4000만원 이하</option>
          <option>5000만원 이하</option>
          <option>5000만원 초과</option>
        </select>
      </div>

      {/* 버튼 영역 */}
      {footer && <div className="form__group">{footer}</div>}
    </div>
  );
}
