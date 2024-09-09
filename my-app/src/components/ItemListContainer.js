import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Simulamos una llamada a la API
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Producto 1', price: 100, category: 'electronics', image: 'https://www.impulzaseguridad.com/wp-content/uploads/2019/01/equipo-electronico-1.jpg' },
          { id: 2, name: 'Producto 2', price: 200, category: 'fashion', image: 'https://welpmagazine.com/wp-content/uploads/2020/10/158.jpeg' },
          { id: 3, name: 'Producto 3', price: 300, category: 'electronics', image: 'https://business-review.eu/wp-content/uploads/2018/04/electronic_devices.jpg' },
        ]);
      }, 1000);
    });

    obtenerProductos.then((productosFiltrados) => {
      if (categoryId) {
        setProductos(productosFiltrados.filter((producto) => producto.category === categoryId));
      } else {
        setProductos(productosFiltrados);
      }
    });
  }, [categoryId]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{mensaje}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {productos.map((producto) => (
          <div key={producto.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <img src={producto.image} alt={producto.name} style={{ width: '150px', height: '150px' }} />
            <h3>{producto.name}</h3>
            <p>Precio: ${producto.price}</p>
            <Link to={`/item/${producto.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;














// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const ItemListContainer = ({ mensaje }) => {
//   const { categoryId } = useParams();
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     // Simular llamada a una API con promesas
//     const obtenerProductos = new Promise((resolve) => {
//       setTimeout(() => {
//         const productosFiltrados = [
//           { id: 1, name: 'Producto 1', category: 'electronics' },
//           { id: 2, name: 'Producto 2', category: 'fashion' }
//         ].filter(producto => !categoryId || producto.category === categoryId);
//         resolve(productosFiltrados);
//       }, 1000);
//     });

//     obtenerProductos.then((data) => {
//       setProductos(data);
//     });
//   }, [categoryId]);

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       <h2>{mensaje}</h2>
//       <ul>
//         {productos.map((producto) => (
//           <li key={producto.id}>
//             <a href={`/item/${producto.id}`}>{producto.name}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemListContainer;
