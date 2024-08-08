import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = ({ userId }) => {
  const [recommendations, setRecommendations] = useState('');

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recommendations/${userId}`);
        setRecommendations(response.data.recommendations);
      } catch (error) {
        setRecommendations('Error al obtener recomendaciones.');
      }
    };

    fetchRecommendations();
  }, [userId]);

  return (
    <div>
      <h2>Recomendaciones Nutricionales</h2>
      <p>{recommendations}</p>
    </div>
  );
};

export default Recommendations;
