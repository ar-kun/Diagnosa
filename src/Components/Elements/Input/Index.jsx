/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Input } from './Input';
import { Label } from './Label';

export const InputForm = ({ label, type, name, id, placeholder, value, onChange }) => {
 return (
  <div className="my-3">
   <Label htmlFor={id}>{label}</Label>
   <Input type={type} placeholder={placeholder} id={id} name={name} value={value} onChange={onChange} />
  </div>
 );
};
