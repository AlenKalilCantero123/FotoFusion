import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // Simular llamada a una API con promesas
    const obtenerProducto = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: itemId,
          name: `Producto ${itemId}`,
          description: 'Descripción del producto',
          price: 100,
          stock: 10,
          image: 'https://via.placeholder.com/300'
        });
      }, 1000);
    });

    obtenerProducto.then((data) => {
      setProducto(data);
    });
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    console.log(`Agregaste ${quantity} unidades del producto ${producto.name} al carrito.`);
    setAddedToCart(true);
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{producto.name}</h2>
      <img src={producto.image} alt={producto.name} style={{ width: '200px', height: '200px' }} />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      
      {/* Mostrar mensaje si el producto ha sido agregado al carrito */}
      {addedToCart ? (
        <p>¡Producto agregado al carrito!</p>
      ) : (
        <ItemCount stock={producto.stock} initial={1} onAdd={handleAddToCart} />
      )}
    </div>
  );
};

export default ItemDetailContainer;













