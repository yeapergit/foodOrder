import React from 'react';

interface ButtonProps{
  children?: any,
  textOnly?: boolean,
  className?: string
}

const ButtonV2: React.FC<ButtonProps> = ({ children, textOnly, className, ...props }) => {

  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}

export default ButtonV2;

