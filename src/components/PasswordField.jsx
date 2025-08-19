import React from 'react';

export default function PasswordField({ label, id, ...rest }) {
  const fieldId = id || React.useId();
  const [visible, setVisible] = React.useState(false);

  return (
    <label className="field" htmlFor={fieldId}>
      <span className="field__label">{label}</span>

      <input
        id={fieldId}
        className="field__input field__input--password"
        type={visible ? 'text' : 'password'}
        {...rest}
      />

      <button
        type="button"
        className="field__toggle"
        aria-label={visible ? '비밀번호 숨기기' : '비밀번호 보이기'}
        onClick={() => setVisible(v => !v)}
      >
        {visible ? (
         // 👁️ 눈 뜬 아이콘 (보이는 상태)
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
            stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ) : (
        // 🙈 눈 감은 아이콘 (숨기는 상태)
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10.58 10.58A3 3 0 0012 15a3 3 0 002.42-4.42M4.5 4.5C2.6 6.1 1.2 8 1 8.3c-.1.2-.1.5 0 .7 0 0 3.8 6.9 11 6.9 1.7 0 3.2-.3 4.5-.8M19.5 15.7c2-1.5 3.3-3.5 3.5-3.8.1-.2.1-.5 0-.7 0 0-3.8-6.9-11-6.9-1.7 0-3.2.3-4.6.8"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        )}
      </button>
    </label>
  );
}
