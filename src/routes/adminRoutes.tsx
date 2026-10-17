import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../views/admin/AdminDashboard';
import SubirCarrera from '../views/admin/SubirCarrera';
import PublicarOferta from '../views/admin/PublicarOferta.tsx';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="carreras" element={<AdminDashboard />} />
      <Route path="carreras/nueva" element={<SubirCarrera />} />
      <Route path="carreras/publicar" element={<PublicarOferta />} />
    </Routes>
  );
}