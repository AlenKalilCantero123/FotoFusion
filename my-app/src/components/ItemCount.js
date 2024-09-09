import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: '0 1rem' }}>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => onAdd(quantity)} style={{ marginTop: '1rem' }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

















// import React, { useState } from 'react';

// const ItemCount = ({ stock, initial, onAdd }) => {
//   const [quantity, setQuantity] = useState(initial);

//   const increment = () => {
//     if (quantity < stock) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const decrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div style={{ marginTop: '1rem' }}>
//       <div>
//         <button onClick={decrement}>-</button>
//         <span style={{ margin: '0 1rem' }}>{quantity}</span>
//         <button onClick={increment}>+</button>
//       </div>
//       <button onClick={() => onAdd(quantity)} style={{ marginTop: '1rem' }}>
//         Agregar al carrito
//       </button>
//     </div>
//   );
// };

// export default ItemCount;
