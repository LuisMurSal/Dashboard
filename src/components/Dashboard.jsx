import '../styles/Dashboard.css';

const Home = () => {
  const handleSignOut = () => {
    // Lógica de cierre de sesión si es necesario, sin Firebase.
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/Formulario">Formulario</a></li>
          <li><a href="/Respuestas">Respuestas</a></li>
          <li><a href="#" onClick={handleSignOut}>Salir</a></li>
        </ul>
      </div>
      <div className="content">
        <h2 className="welcome-message">Bienvenido</h2>
        <div className="container">
          <div className="box">Formulario</div>
          <div className="box">Respuestas</div>
          <div className="box">Salir</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
