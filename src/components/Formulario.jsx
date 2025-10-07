import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import Swal from 'sweetalert2';
import { Toast } from 'primereact/toast';

const colores = [
  { name: 'Rojo', code: '#FF0000' },
  { name: 'Verde', code: '#28a745' },
  { name: 'Azul', code: '#007bff' },
  { name: 'Amarillo', code: '#ffc107' },
  { name: 'Naranja', code: '#fd7e14' },
  { name: 'Rosa', code: '#e83e8c' },
  { name: 'Violeta', code: '#6f42c1' },
  { name: 'Celeste', code: '#17a2b8' },
  { name: 'Gris claro', code: '#f8f9fa' },
  { name: 'Gris', code: '#6c757d' },
  { name: 'Negro', code: '#000000' },
  { name: 'Blanco', code: '#ffffff' },
  { name: 'Marrón', code: '#795548' },
  { name: 'Turquesa', code: '#20c997' },
  { name: 'Dorado', code: '#daa520' },
  { name: 'Plateado', code: '#c0c0c0' },
];


const Formulario = () => {
  const toast = useRef(null);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [color, setColor] = useState(null);
  const [terminos, setTerminos] = useState(false);

  const validarEmail = (email) => email.includes('@') && email.includes('.');

  const esValido = nombre && validarEmail(email) && color && terminos;

  const handleGuardar = () => {
    Swal.fire({
      title: '¿Confirmar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        const persona = { nombre, email, color: color.name };
        const personas = JSON.parse(localStorage.getItem('personas')) || [];
        personas.push(persona);
        localStorage.setItem('personas', JSON.stringify(personas));

        toast.current.show({
          severity: 'success',
          summary: 'Guardado',
          detail: 'Persona guardada correctamente',
          life: 3000
        });

        setNombre('');
        setEmail('');
        setColor(null);
        setTerminos(false);
      }
    });
  };

  const handleLimpiar = () => {
    setNombre('');
    setEmail('');
    setColor(null);
    setTerminos(false);
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className="p-field">
        <label>Nombre</label>
        <InputText value={nombre} onChange={(e) => setNombre(e.target.value)} />
        {!nombre && <small style={{ color: 'red' }}>Campo obligatorio</small>}
      </div>

      <div className="p-field">
        <label>Email</label>
        <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
        {!validarEmail(email) && email && <small style={{ color: 'red' }}>Email inválido</small>}
      </div>

      <div className="p-field">
        <label>Color favorito</label>
        <Dropdown
          value={color}
          options={colores}
          onChange={(e) => setColor(e.value)}
          optionLabel="name"
          placeholder="Seleccionar color"
        />
      </div>

      <div className="p-field-checkbox">
        <Checkbox checked={terminos} onChange={(e) => setTerminos(e.checked)} />
        <label>Acepto términos</label>
      </div>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 20px'
        }}
      >
        <Button
          label="Limpiar"
          type="button"
          className="p-button-text"
          style={{ color: '#444' }}
          onClick={handleLimpiar}
        />
        <Button
          label="Guardar"
          type="button"
          disabled={!esValido}
          style={{
            backgroundColor: '#444',
            border: 'none',
            color: 'white',
            borderRadius: '6px',
            padding: '8px 16px'
          }}
          onClick={handleGuardar}
        />
      </div>
    </div>
  );
};

export default Formulario;
