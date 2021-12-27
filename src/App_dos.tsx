import React from 'react';

function App_dos() {
  return (
    <div className="AppDos">
      <header className="AppDos__Contenedor">
          <div className="AppDos__CajaInt-imagen2">
            <img src="../logo.png" className="imagen1" ref="logo"></img>
          </div>

          <nav className="menu">
              <ul>
                  <li><a href="index.html">Inicio</a></li>
                  <li><a href="#">Opcion 1</a></li>
                  <li><a href="#">Opcion 2</a></li>
                  <li><a href="#">Opcion 3</a></li>
              </ul>

          </nav>

      </header>


      <section className="AppDos__Contenedor2">

          <div className="AppDos__Caja2">
            <h1>Articulo 1...</h1>
            <p className="AppDos__Parrafo">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
          </div>

          <div className="AppDos__Caja3">
            <h1>Articulo 2...</h1>
            <p className="AppDos__Parrafo">Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.</p>
          </div>

      </section>

    </div>
  );
}

export default App_dos;
