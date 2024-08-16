import React from 'react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{mensaje}</h2>
    </div>
  );
};

export default ItemListContainer;
