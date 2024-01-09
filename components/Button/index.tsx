import React from 'react';
import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant:
    | 'btn_dark_green'
    | 'btn_green'
    | 'btn_white_text'
    | 'btn_white'
    | 'btn_dark_green_outline';
  fullWidth?: boolean;
};

const Button = ({ type, title, icon, variant, fullWidth }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 border rounded-full ${variant} ${
        fullWidth && 'w-full'
      }`}
    >
      {!!icon && (
        <div className="relative w-6 h-6 flex-shrink-0">
          <Image src={icon} alt={title} fill className="bg-cover" />
        </div>
      )}
      <label className="bold-16 whitespace-nowrap">{title || ''}</label>
    </button>
  );
};

export default Button;
