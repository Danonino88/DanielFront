# Rutas de la Aplicación (`/src/routes`)

### Reglas básicas:
1. **`AppRouter.tsx`**: Contiene la raíz de la app y distribuye entre `/admin/*` y `/alumno/*`.
2. **Estructura modular**: Cada módulo (`admin`, `student`) maneja su propio archivo de rutas (`AdminRoutes.tsx`, `StudentRoutes.tsx`).
3. **Navegación**: Utilizar componentes `<Link>` o `useNavigate` de `react-router-dom` para no recargar la página.