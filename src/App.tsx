import { Link } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <div>
      {/* Navbar Global de Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-mortarboard-fill me-2"></i>
            Portal Oferta Académica
          </Link>
          <div className="d-flex align-items-center gap-2">
            <Link to="/alumno/carreras" className="btn btn-outline-light btn-sm">
              <i className="bi bi-book me-1"></i> Ver Carreras
            </Link>

            {/* Botón directo a la vista de Administración */}
            <Link to="/admin/carreras" className="btn btn-warning btn-sm fw-bold">
              <i className="bi bi-shield-lock-fill me-1"></i> Panel Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Render de Rutas */}
      <main className="container pb-5">
        <AppRouter />
      </main>
    </div>
  );
}