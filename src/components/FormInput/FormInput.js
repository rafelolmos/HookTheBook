  
import React from 'react';

const FormInput = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div className="form-field">
      <label>{label}</label><br/>
      <input type={type} value={value} onChange={event => onChange(event.target.value)} />
    </div>
  );
}
 
export default FormInput;