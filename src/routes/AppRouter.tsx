import { Routes, Route, Navigate } from 'react-router-dom';
import AdminRoutes from './adminRoutes';
import StudentRoutes from './StudentRoutes';

export default function AppRouter() {
  return (
    <Routes>
      {/* Redirección por defecto */}
      <Route path="/" element={<Navigate to="/alumno/carreras" replace />} />

      {/* Módulo Admin */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Módulo Alumno */}
      <Route path="/alumno/*" element={<StudentRoutes />} />

      {/* Ruta 404 simple */}
      <Route path="*" element={
        <div className="text-center mt-5">
          <h2 className="text-danger">404 - Página no encontrada</h2>
          <p>La ruta que buscas no existe.</p>
        </div>
      } />
    </Routes>
  );
}