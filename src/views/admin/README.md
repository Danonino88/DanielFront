# Vistas de Administración (`/src/views/admin`)

### Reglas básicas:
1. **Acceso exclusivo**: Estas vistas solo deben usarse para usuarios con rol `ROLE_ADMIN`.
2. **Funcionalidades permitidas**:
   - Subir borradores de carreras (`SubirCarrera.tsx`).
   - Modificar información académica.
   - Publicar las carreras creadas para que se vuelvan visibles al público (`PublicarOferta.tsx`).
3. **Consumo de API**: Usar siempre los servicios definidos en `src/services/adminService.ts`.