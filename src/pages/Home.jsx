import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Button label="Ir al formulario" onClick={() => navigate('/tarjeta')} />
    </div>
  );
};

export default Home;
