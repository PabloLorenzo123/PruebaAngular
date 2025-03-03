# Evaluación Angular - Grupo Universal

Este proyecto, desarrollado por **Pablo Lorenzo**, implementa la interfaz solicitada en el ejercicio utilizando **Angular 19**.

## Características
- **Fiel al diseño proporcionado.**
- **Interfaz responsiva**, adaptada a diferentes tamaños de pantalla.
- **Gestor de estados de botones**, que se activan o desactivan según el resultado de la solicitud **POST** a `http://localhost:3000/api/product`.
- **API desarrollada en Express.js** con las siguientes funcionalidades:
  - Validación y obtención de productos.
  - Obtención de artículos para la sección "Descubre".
  - Obtención de productos para la sección "Mis Coberturas".
  - Autenticación mediante **JWT**.
- Se agregó funcionalidad adicional no solicitada, permitiendo que el contenido de la página, especialmente las secciones "Coberturas" y "Descubre", sea gestionado a través de la API.

---

## Video Demo
[Ver Demo](https://youtu.be/oI1ExUqwNk4)

## Capturas de pantalla
### Versión móvil
<p align="center">
  <img src="/assets/fe_mobile.png" alt="Frontend en móvil" width="400"/>
</p>
**Nota:** El navbar inferior está fijado en la parte baja de la pantalla, pero debido a un error en la captura de Chrome, parece estar despegado.

### Versión tableta
<p align="center">
  <img src="/assets/fe_tablet.png" alt="Frontend en tablet" width="600"/>
</p>

### Versión escritorio
<p align="center">
  <img src="/assets/fe_desktop.png" alt="Frontend en desktop" width="600"/>
</p>

### Pantalla de inicio de sesión
<p align="center">
  <img src="/assets/login.png" width="600"/>
</p>

---

## Instalación y ejecución
### 1. Clonar el repositorio
```bash
git clone https://github.com/PabloLorenzo123/PruebaAngular.git
cd PruebaAngular
```

### 2. Instalar dependencias y ejecutar la API
```bash
cd node-api
npm install
npm start
```
Esto iniciará la API en `http://localhost:3000/`.

### 3. Instalar dependencias y ejecutar el frontend
Desde la carpeta principal (`PruebaAngular`):

Asegúrate de tener instalado Angular CLI:
```bash
npm install -g @angular/cli
```
Luego:
```bash
cd angular-frontend
npm install
npm start
```
Esto iniciará el frontend en `http://localhost:4200/`.

---

## Funcionalidad
### Botones en "Mis Coberturas"
- Antes de interactuar, los botones muestran un estado neutro (indicador gris).
- Al hacer clic en un producto, se envía una solicitud **POST** a `http://localhost:3000/api/product`.
  - Si la respuesta es satisfactoria, se muestra una alerta y el indicador cambia a **verde**.
  - Si la respuesta es fallida, el indicador cambia a **rojo** y se muestra una alerta.

#### Ejemplo del payload enviado:
<p align="center">
  <img src="/assets/funcionalidad_2.png" width="600">
</p>

#### Respuesta de la API:
<p align="center">
  <img src="/assets/funcionalidad_4.png" width="600">
</p>

La API verifica que el producto exista y que el usuario esté autenticado.

---

## Estructura del proyecto
### Frontend (`/angular-frontend`)
#### **Componentes** (`/src/app/components`)
- **bottom-navbar**: Barra de navegación fija en la parte inferior.
- **discover**: Sección "Descubre".
- **navbar**: Botón y menú lateral derecho.
- **product**: Representa cada botón en "Mis Coberturas".
- **product-list**: Contenedor de "Mis Coberturas".
- **user-info**: Muestra la foto de perfil y datos del usuario.

#### **Servicios** (`/src/app/services`)
- **AuthService**: Maneja autenticación, almacenamiento de tokens y sesión de usuarios.
- **ProductService**: Gestiona los productos y solicitudes a la API.
- **DiscoverSectionService**: Obtiene artículos de "Descubre".
- **MatIconService**: Registra y gestiona íconos SVG.

#### **Páginas** (`/src/app/pages`)
- **Login**: Inicio de sesión.
- **Profile**: Vista principal con la interfaz evaluada.
- **Signup**: Registro de usuario.

#### **Guards** (`/src/app/guards`)
- **AuthGuard**: Protege rutas para usuarios autenticados.

#### **Interceptors** (`/src/app/interceptors`)
- **AuthInterceptor**: Agrega el token JWT al `Authorization Header` en cada solicitud.

#### **Modelos** (`/src/app/model`)
- **DiscoverArticle**: Tipo de datos para "Descubre".
- **Product**.
- **User**.

---

### Backend (`/node-api`)

#### **Base de datos**
Se utiliza **SQLite** junto con el ORM **Sequelize** para manejar la información de los usuarios.

#### **Controladores** (`/src/controllers`)
- **discoverSectionController**: Maneja solicitudes **GET**.
- **productController**: Maneja **POST** y **GET** para productos.
- **userController**: Maneja **POST** y **GET** para usuarios.

#### **Middleware** (`/src/middleware`)
- **authenticate**: Valida JWTs en rutas protegidas.
- **uploads**: Maneja la subida de fotos de perfil con **Multer**.

#### **Modelos** (`/src/models`)
- **User**: Define la estructura de los usuarios.

#### **Rutas** (`/src/routes`)
Mapea las rutas a los controladores.

#### **Aplicación principal** (`/src/app.js`)
- Configura middlewares, rutas y exporta la aplicación para ser utilizada en `server.js`.

---

## Contacto
- **Correo:** [pablolorenzo802@gmail.com](mailto:pablolorenzo802@gmail.com)
- **Teléfono:** +1 (829) 518-3001
- **[WhatsApp](https://wa.link/dj36lf)**
- **[Portafolio](https://pablolorenzo.vercel.app)**

