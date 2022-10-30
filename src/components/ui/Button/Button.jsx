import { memo } from 'react';
import cls from './Button.module.scss';

export const Button = memo((props) => {
  const { className = '', cb, children } = props;

  return (
    <button onClick={cb} className={`${cls.button} ${className}`}>
      {children}
    </button>
  );
});
