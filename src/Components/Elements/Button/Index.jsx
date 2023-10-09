import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export const Button = ({ children, type, href, className = 'bg-secondary py-3 px-10 rounded-3xl text-white shadow-lg shadow-blue-500/50' }) => {
 return type === 'submit' ? (
  <button type={type} className={className}>
   {children}
  </button>
 ) : (
  <Link to={href} className={className}>
   {children}
  </Link>
 );
};
