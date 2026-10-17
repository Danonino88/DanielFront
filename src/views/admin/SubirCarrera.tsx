import { Link } from 'react-router-dom';

export default function SubirCarrera() {
  return (
    <div className="col-md-8 mx-auto">
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h4 className="mb-0">Subir Nueva Carrera</h4>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nombre de la Carrera</label>
              <input type="text" className="form-control" placeholder="Ej. Ingeniería Mecatrónica" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Facultad / Área</label>
              <input type="text" className="form-control" placeholder="Ej. Ingeniería" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Descripción y Plan de Estudios</label>
              <textarea className="form-control" rows={4} placeholder="Escribe el objetivo de la carrera..."></textarea>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <Link to="/admin/carreras" className="btn btn-secondary">Cancelar</Link>
              <button type="submit" className="btn btn-success">Guardar Borrador</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}