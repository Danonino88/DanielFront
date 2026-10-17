import { Routes, Route } from 'react-router-dom';
import Catalogocarreras from '../views/student/CatalogoCarreras';

export default function StudentRoutes() {
  return (
    <Routes>
      <Route path="carreras" element={<Catalogocarreras />} />
    </Routes>
  );
}