import React from 'react';
import { Card } from 'primereact/card';
import Formulario from '../components/Formulario';

const Tarjeta = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card title="Formulario de Personas" style={{ width: '400px' }}>
        <Formulario />
      </Card>
    </div>
  );
};

export default Tarjeta;
