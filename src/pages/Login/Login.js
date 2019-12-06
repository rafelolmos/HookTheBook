import React, { useState } from 'react';
import FormInput from '../../components/FormInput';

import { login } from '../../services/auth';


const Login = ({ history }) => {
  const [formData, setFormData] = useState({ email: '', password: ''});
  const [error, setError] = useState('');

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    setError('');

    const { email, password } = formData;

    if (!email || !password) {
      setError('Todos los campos son obligatorios');
    } else {
      const result = await login(email, password);
      if (result) {
        history.push('/')
      }
    }
  }

  return (
    <section className="form-container">
      {error && <div className="form-error">{error}</div>}
      <form onSubmit={handleSubmitForm}>
        <FormInput 
          label="Email" 
          value={formData.email} 
          onChange={value => setFormData({ ...formData, email: value })} 
        />
        <FormInput 
          type="password"
          label="Password" 
          value={formData.password} 
          onChange={value => setFormData({ ...formData, password: value })} 
        />
        <button>Login</button>
      </form>
    </section>
  );
}
 
export default Login;