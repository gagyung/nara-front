import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean
}

export default function Button({ fullWidth = false, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={[
        'btn',
        fullWidth ? 'btn--full' : '',
        rest.disabled ? 'btn--disabled' : '',
        rest.className || '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}
