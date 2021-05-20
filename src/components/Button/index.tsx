import React from 'react';

import s from './Button.module.scss';
import { ButtonColor, ButtonSize } from './Button.Interface';



interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    size: ButtonSize,
    color: ButtonColor
}

const Button: React.FC<ButtonProps> = ({children, onClick, size, color}) => {
    return (
      <button
        type="button"
        className={[s.root, s[size], s[color]].join(' ')}
        onClick={onClick}
      >
          {children}
      </button>
    );
};

export default Button;
