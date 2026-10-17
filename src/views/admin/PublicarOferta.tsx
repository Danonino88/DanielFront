import { Link } from 'react-router-dom';

export default function PublicarOferta() {
  return (
    <div className="col-md-8 mx-auto">
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h4 className="mb-0"><i className="bi bi-broadcast me-2"></i>Publicar Oferta Académica</h4>
        </div>
        <div className="card-body">
          <p>Selecciona el periodo académico y confirma las carreras en estado borrador que quieres hacer visibles para los alumnos.</p>
          <div className="mb-3">
            <label className="form-label fw-bold">Periodo Escolar</label>
            <select className="form-select">
              <option>Septiembre - Diciembre 2026</option>
              <option>Enero - Abril 2027</option>
            </select>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="check1" />
            <label className="form-check-label" htmlFor="check1">
              Ingeniería en Software (Borrador)
            </label>
          </div>
          <div className="d-flex justify-content-end gap-2">
            <Link to="/admin/carreras" className="btn btn-outline-secondary">Volver</Link>
            <button className="btn btn-primary">Publicar en el Portal</button>
          </div>
        </div>
      </div>
    </div>
  );
}