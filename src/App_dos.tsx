import React from 'react';

function App_dos() {
  return (
      <div className="AppDos">
          <header className="AppDos__Contenedor">
              <div className="AppDos__CajaInt-imagen2">
                <img src="../logo.png" className="imagen1" alt="logo"></img>

                <div className="AppDos__HeaderContenedor">
                  <nav className="AppDos__Menu">
                      <a className="Opcmenu" href="index.html">Inicio</a>
                      <a className="Opcmenu" href="/">Opcion 1</a>
                      <a className="Opcmenu" href="/">Opcion 2</a>
                      <a className="Opcmenu" href="/">Opcion 3</a>
                  </nav>

                  <div className="Iconos">
                    <div className="IconosRedes">
                      <em className="fas fa-apple-alt" />
                    </div>
                    <div className="IconosRedes">
                      <em className="fab fa-linkedin" />
                    </div>
                    <div className="IconosRedes">
                      <em className="fas fa-archive" />
                    </div>
                </div>
                </div>


              </div>
          </header>


          <section className="AppDos__Contenedor2">
              <div className="AppDos__Caja2">
                <h1 className="AppDos__Titulo1">Articulo 1...</h1>
                <p className="AppDos__Parrafo">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
              </div>
              <div className="AppDos__Caja3">
                <h1 className="AppDos__Titulo1">Articulo 2...</h1>
                <p className="AppDos__Parrafo">Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.</p>
              </div>
          </section>


          <div className="AppDos__Contenedor3">
             <div className="AppDos__Caja4">
                <img src="../foto1.jpg" className="AppDos__Imagenart" alt="foto1"></img>
             </div>
             <div className="AppDos__Caja5">
                <h1 className="AppDos__Titulo1">Articulo 3...</h1>
                <p className="AppDos__Parrafo">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
             </div>
          </div>


          <footer className="AppDos__Contenedor4">
             <div className="AppDos__CajaInt-imagen2">
                <img src="../logo.png" className="imagen1" alt="logo"></img>
             </div>
             <p className="AppDos__Pie">Ejemplo1 &copy;Todos los derechos reservados 2021</p>
             <div className="AppDos__CajaInt-imagen2">
                <img src="../logo.png" className="imagen1" alt="logo"></img>
             </div>
          </footer>



      </div>
  );
}

export default App_dos;
