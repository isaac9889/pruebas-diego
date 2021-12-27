import React from 'react';

// Images
import logo from './assets/logo.jpg';

//components
import ComponenteClima from './components/componenteclima/componente_clima';
import ComponenteAvatar from './components/componenteavatar/componente_avatar';

function App() {
  return (
    <div className="Pagina">
      <div className="Header">
        <ComponenteClima />
        <ComponenteAvatar />
      </div>
      <img className="Logo" src={logo} alt="Logo"/>
    </div>
  );
}

export default App;
