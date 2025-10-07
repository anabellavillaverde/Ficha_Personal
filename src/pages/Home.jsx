import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ marginBottom: '30px', color: '#0f172a' }}>Ficha Personal</h1>
      <Button
        label="Ir al formulario"
        icon="pi pi-arrow-right"
        className="p-button-rounded p-button-primary"
        style={{
          backgroundColor: '#444',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          fontSize: '16px',
        }}
        onClick={() => navigate('/tarjeta')}
      />
    </div>
  );
};

export default Home;

