import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    weight: '',
    height: '',
    healthCondition: '',
    dietaryPreferences: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', formData);
      alert('Registro exitoso');
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
        <input type="number" name="age" placeholder="Edad" onChange={handleChange} />
        <input type="number" name="weight" placeholder="Peso (kg)" onChange={handleChange} />
        <input type="number" name="height" placeholder="Altura (cm)" onChange={handleChange} />
        <input type="text" name="healthCondition" placeholder="Condición de salud" onChange={handleChange} />
        <input type="text" name="dietaryPreferences" placeholder="Preferencias dietéticas" onChange={handleChange} />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
