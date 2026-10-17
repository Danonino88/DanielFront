import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2><i className="bi bi-speedometer2 me-2"></i>Panel de Administración de Carreras</h2>
        <div className="gap-2 d-flex">
          <Link to="/admin/carreras/nueva" className="btn btn-success">
            <i className="bi bi-plus-circle me-1"></i> Subir Nueva Carrera
          </Link>
          <Link to="/admin/carreras/publicar" className="btn btn-primary">
            <i className="bi bi-cloud-upload me-1"></i> Publicar Ofertas
          </Link>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Gestión de Oferta Académica</h5>
          <p className="card-text text-muted">Aquí se muestra la lista de carreras registradas en el sistema para publicar o editar.</p>
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Carrera</th>
                <th>Facultad</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ingeniería en Software</td>
                <td>Tecnologías de la Información</td>
                <td><span className="badge bg-warning text-dark">Borrador</span></td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-1">Editar</button>
                  <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Licenciatura en Negocios</td>
                <td>Administración</td>
                <td><span className="badge bg-success">Publicada</span></td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-1">Editar</button>
                  <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}