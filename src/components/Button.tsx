import React, { ButtonHTMLAttributes } from 'react';

interface SpectrumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
}

const Button: React.FC<SpectrumButtonProps> = ({ icon, children, ...props }) => (
  <button {...props} data-icon={icon}>
    {children}
  </button>
);

export default Button;