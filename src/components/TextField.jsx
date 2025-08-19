import React from 'react';

export default function TextField({ label, id, ...rest }) {
  const fieldId = id || React.useId();

  return (
    <label className="field" htmlFor={fieldId}>
      <span className="field__label">{label}</span>
      <input id={fieldId} className="field__input" {...rest} />
    </label>
  );
}
