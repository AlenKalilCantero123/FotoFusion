import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Filtrando productos por categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Página no encontrada (404)</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;










// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer';

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />} />
//         <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Categoría seleccionada" />} />
//         <Route path="/item/:itemId" element={<ItemDetailContainer />} />
//         <Route path="*" element={<h2>Página no encontrada (404)</h2>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
