# Open Bootcamp: React.js

## 1. **Temas:**

1. Componentes y jerarquía.
2. Tipos de componentes.
3. Hooks.
4. React-router-dom.
5. Aplicación de Formik y Yup para la creación de formularios y sus respectivas validaciones.

### 2. **Generación de funcionalidades PWA en aplicación existente**

Pasos para convertir una app en una Progressive Web App

> ### Prev:
>
> - **npm run build:** realizamos el build del proyecto.
> - **npm i -g serve:** instalamos el servidor para poder ejecutar el proyecto construido (builded).
> - **serve -s build -l 3002:** ejecutamos el servidor con la build en el puerto especificado (3002).

1.  **Package.json ->** Instalar todas las dependencias de Workbox

```json:
   "workbox-background-sync": "^6.5.4",
   "workbox-broadcast-update": "^6.5.4",
   "workbox-cacheable-response": "^6.5.4",
   "workbox-core": "^6.5.4",
   "workbox-expiration": "^6.5.4",
   "workbox-google-analytics": "^6.5.4",
   "workbox-navigation-preload": "^6.5.4",
   "workbox-precaching": "^6.5.4",
   "workbox-range-requests": "^6.5.4",
   "workbox-routing": "^6.5.4",
   "workbox-strategies": "^6.5.4",
   "workbox-streams": "^6.5.4"
```

2.  Crear los archivos relacionados con el **service worker** (service-worker.js + serviceWorkerRegistration.js).
3.  **Importamos** el serviceWorker en nuestro **index.js**.
