import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <div>
        <h1>Mi Tienda</h1>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ margin: '0 1rem' }}>Home</li>
        <li style={{ margin: '0 1rem' }}>Productos</li>
        <li style={{ margin: '0 1rem' }}>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
