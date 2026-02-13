import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-200 transform active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-da-magenta to-[#C2185B] text-white hover:shadow-[0_10px_40px_rgba(233,30,99,0.3)] hover:-translate-y-0.5",
    secondary: "bg-transparent border-2 border-ff-blue text-ff-blue hover:bg-ff-blue hover:text-white",
    ghost: "bg-transparent text-neutral-900 underline underline-offset-4 hover:text-ff-blue",
    white: "bg-white text-ff-blue hover:shadow-lg hover:-translate-y-0.5"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-sm",
    md: "px-6 py-3 text-sm rounded-md",
    lg: "px-8 py-4 text-base rounded-md",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;