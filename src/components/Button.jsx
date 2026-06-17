import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  to,
  href,
  ...props 
}) => {
  const commonClass = `btn btn-${variant} btn-${size} ${className}`;
  const content = (
    <>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </>
  );

  if (to) {
    return <Link to={to} className={commonClass} {...props}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={commonClass} target={href.startsWith('http') ? '_blank' : '_self'} rel={href.startsWith('http') ? 'noopener noreferrer' : ''} {...props}>{content}</a>;
  }

  return (
    <button className={commonClass} {...props}>
      {content}
    </button>
  );
};

export default Button;
