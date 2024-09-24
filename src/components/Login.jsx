import { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrando, setRegistrando] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const toggleMode = () => {
    setRegistrando(!registrando);
    setEmail('');
    setPassword('');
    setNombre('');
    setApellidos('');
    setFechaNacimiento('');
  };

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      if (registrando) {
        // Lógica de registro sin Firebase
        console.log('Registro exitoso');
        console.log('Datos adicionales:', nombre, apellidos, fechaNacimiento);
      } else {
        // Lógica de inicio de sesión sin Firebase
        console.log('Inicio de sesión exitoso');
      }
    } catch (error) {
      alert('Error en la autenticación');
      console.error('Error en la autenticación:', error.message);
    }
  };

  return (
    <div>
      <header className="login-header">
        <h1>{registrando ? "Registro" : "Login"}</h1>
      </header>
      <div className="login-container">
        <form onSubmit={handleAuth}>
          {registrando && (
            <>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input 
                  id="nombre"
                  type="text"
                  placeholder='Ingrese su nombre' 
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos:</label>
                <input 
                  id="apellidos"
                  type="text"
                  placeholder='Ingrese sus apellidos' 
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
                <input 
                  id="fecha-nacimiento"
                  type="date"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)} 
                  required 
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              id="email"
              type="email"
              placeholder='Ingrese el correo electrónico' 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input 
              id="password"
              type="password"
              placeholder='Ingrese la contraseña' 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="submit-button">{registrando ? "Regístrate" : "Inicia Sesión"}</button>
          </div>
        </form>
        <h4>
          {registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
          <button className="toggle-button" onClick={toggleMode}>
            {registrando ? "Inicia sesión" : "Regístrate"}
          </button>
        </h4>
      </div>
    </div>
  );
};

export default Login;
