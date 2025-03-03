#Evaluación Angular - Grupo Universal

Desarollo de prueba técnica por **Pablo Lorenzo**, implementa la interfaz solicitada en el ejercicio "PruebaAngular" utilizando **Angular 19**.

## Características
- **Fiel al diseño proporcionado.**
- **Interfaz responsiva**, adaptada a diferentes tamaños de pantalla.
- **Manejo de estados de botones**, que se activan o desactivan según el resultado de la solicitud **POST** a `http://localhost:3000/api/product`.
- **API desarrollada en Express.js** con las siguientes funcionalidades:
  - Validación y obtención de productos.
  - Obtención de artículos para la sección "Descubre".
  - Obtención de productos para la sección "Mis Coberturas".
  - Autenticación mediante **JWT**.

Las secciones "Descubre" y "Mis Coberturas" se obtienen a través de la API, permitiendo que el contenido de la página sea gestionado a través de la API, para que se parezca más a un problema real.

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

Asegúrese de tener instalado Angular CLI:
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
  - Si la respuesta es satisfactoria, se muestra una alerta y el indicador cambia de color gris a **verde**.
  - Si la respuesta es fallida, el indicador cambia al color **rojo** y se muestra una alerta indicando el problema.

#### Ejemplo del payload enviado:
<p align="center">
  <img src="/assets/funcionalidad_2.png" width="600">
</p>

El JWT es agregado al Authorization header utilizando interceptores en Angular.

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
- **AuthService**: Encapsula el proceso de autenticación, este maneja la autenticación de usuarios, guarda los JSON Web Tokens en el local storage del cliente, registra, ingresa usuarios y tiene otros metodos utiles.
- **ProductService**: Encapsula la lógica detrás de los productos, tiene métodos para obtener los productos disponibles a través de la API, hacer las solicitudes POST que se realizan al hacer click a los productos.
- **DiscoverSectionService**: Obtiene los articulos que se muestran en la sección "Descubre".
- **MatIconService**: Esta aplicación utiliza el módulo de Angular Material, este servicio tiene métodos para registrar iconos (svg) para luego ser utilizados en los html.

#### **Páginas** (`/src/app/pages`)
- **Login**: Vista para inicio de sesión.
- **Profile**: Vista principal, donde se presenta el diseño realizado que se indicó para esta prueba.
- **Signup**: Vista para registro de usuario.

#### **Guards** (`/src/app/guards`)
- **AuthGuard**: Se encarga de proteger las rutas del frontend de usuarios no autenticados, revisa los tokens del usuario y la validez de los mismos.

#### **Interceptors** (`/src/app/interceptors`)
- **AuthInterceptor**: Agrega el token JWT al `Authorization Header` en cada solicitud.

#### **Modelos** (`/src/app/model`)
- **DiscoverArticle**: Tipo de datos para los articulos de la sección "Descubre".
- **Product**: Botón que aparece en la sección "Mis Coberturas".
- **User**.

---

### Backend (`/node-api`)

#### **Base de datos**
Se utiliza **SQLite** junto con el ORM **Sequelize** para manejar la información de los usuarios.

#### **Controladores** (`/src/controllers`)
- **discoverSectionController**: Maneja solicitudes **GET**, tiene una sola ruta que permite obtener todos los articulos de la sección "Descubre" para ser renderizados en el frontend.
- **productController**: Maneja **POST** y **GET** para productos, una ruta para obtener los productos disponibles y el otro para hacer el POST request a /api/product para modificar el estado de los botones de la sección "Mis Coberturas".
- **userController**: Maneja POST y GET requests, POST para registrar e ingresar usuarios, GET para obtener información del usuario, los usuarios son guardados en la base de datos.

#### **Middleware** (`/src/middleware`)
- **authenticate**: Valida JWTs en rutas protegidas.
- **uploads**: Maneja la subida de fotos de perfil con **Multer**, estas son guardadas en el /src/uploads.

#### **Modelos** (`/src/models`)
- **User**: Define la estructura de los usuarios.

#### **Rutas** (`/src/routes`)
Mapea las rutas a los controladores.

#### **Aplicación principal** (`/src/app.js`)
- Configura middlewares, rutas y exporta la aplicación para ser utilizada en `server.js`.

---

## Contacto
- **Correo:** [pablolorenzo802@gmail.com](mailto:pablolorenzo802@gmail.com)
- **Teléfono:** +1 (829)-518-3001
- **[WhatsApp](https://wa.link/dj36lf)**
- **[Portafolio](https://pablolorenzo.vercel.app)**

