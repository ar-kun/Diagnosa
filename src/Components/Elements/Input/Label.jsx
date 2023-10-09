/* eslint-disable react/prop-types */
export const Label = ({ children, htmlFor }) => {
 return (
  <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
   {children}
  </label>
 );
};
