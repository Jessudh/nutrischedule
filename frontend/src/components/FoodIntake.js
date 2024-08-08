import React, { useState } from 'react';
import axios from 'axios';

const FoodIntake = () => {
  const [formData, setFormData] = useState({
    userId: '',
    date: '',
    foods: '',
    calories: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/food-intake', formData);
      alert('Registro de consumo alimenticio exitoso');
    } catch (error) {
      console.error('Error registrando consumo alimenticio:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Consumo Alimenticio</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userId" placeholder="ID del Usuario" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <input type="text" name="foods" placeholder="Alimentos consumidos" onChange={handleChange} />
        <input type="number" name="calories" placeholder="Calorías" onChange={handleChange} />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default FoodIntake;
