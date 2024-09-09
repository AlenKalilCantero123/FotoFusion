import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <div>
        <h1>Mi Tienda</h1>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ margin: '0 1rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link to="/category/electronics" style={{ color: 'white', textDecoration: 'none' }}>Electronics</Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link to="/category/fashion" style={{ color: 'white', textDecoration: 'none' }}>Fashion</Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link to="/category/contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;












// import React from 'react';
// import { Link } from 'react-router-dom';
// import CartWidget from './CartWidget';

// const NavBar = () => {
//   return (
//     <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
//       <div>
//         <h1>Mi Tienda</h1>
//       </div>
//       <ul style={{ display: 'flex', listStyle: 'none' }}>
//         <li style={{ margin: '0 1rem' }}>
//           <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
//         </li>
//         <li style={{ margin: '0 1rem' }}>
//           <Link to="/category/electronics" style={{ color: '#fff', textDecoration: 'none' }}>Electrónica</Link>
//         </li>
//         <li style={{ margin: '0 1rem' }}>
//           <Link to="/category/fashion" style={{ color: '#fff', textDecoration: 'none' }}>Moda</Link>
//         </li>
//       </ul>
//       <CartWidget />
//     </nav>
//   );
// };

// export default NavBar;
