# Evaluación Angular - Grupo Universal por Pablo Lorenzo

Se desarolló la interfaz suministrada con Angular versión 19.
- Fiel al diseño suministrado.
- La interfaz es adaptable a diferentes pantallas.
- Los botones se desactivan, activan si la llamada a POST http://localhost:3000/api/product es sastisfactoria o no.

Además se desarolló una api con expressJs que maneja:
- Validación y obtención de productos.
- Autenticación con JWT.
- Registro de usuario.
- Obtención de articulos para la sección "Descubre".


Desarollé un poco más de lo pedido, haciendo que el contenido de la página especialmente la sección "Coberturas" y "Descubre" sean obtenidas mediante la api.

## Fotos de la interfaz.

### En móvil.
![Frontend en móvil](/assets/fe_mobile.png)
El navbar de abajo en realidad se encuentra posicionado fijamente en la parte baja de la pantalla, Se ve despegado por error de la función de captura de Chrome, lo mismo pasa con la foto de la interfaz suministrada.

## En tableta
![Frontend en tableta](/assets/fe_tablet.png)

### En desktop.
![Frontend en desktop](/assets/fe_desktop.png)

### Login.
![Login](/assets/login.png)

## Instalar y correr proyecto.

### 1. Clonar este repositorio.
```
git clone https://github.com/PabloLorenzo123/PruebaAngular.git
cd PruebaAngular
```



### 2. Instalar dependencias y correr la API.
```
cd node-api
npm install
npm start
```

Esto iniciará el API en `http://localhost:3000/`

### 3. Instalar dependencias y correr el frontend.
Desde /EvaluacionAngular

Asegurate de tener instalado el Angular CLI.
`npm install -g @angular/cli`
Luego
```
cd angular-frontend
npm install
ng serve
```

Esto iniciará el frontend en `http://localhost:4200/`

## Funcionalidad.

### Botones en 'Mis Coberturas'.
Cuando no se ha presionado el botón, este por defecto muestra un estado neutro, demostrado por el color de la bolita a la derecha.

![Funcionalidad 1](/assets/funcionalidad_0.png)

Al hacer click en uno de los productos/botones, se manda un POST request a http://localhost:3000/api/product, si la respuesta es sastisfactoria se presenta una alerta en pantalla y la bolita de estado pasa a ser de color verde.

![Funcionalidad 2](/assets/funcionalidad_1.png)

Este es el payload:

![Funcionalidad 3](/assets/funcionalidad_2.png)

El JWT es agregado en el Authorization header.

![Funcionalidad 4](/assets/funcionalidad_3.png)

La respuesta del api es la siguiente:

![Respuesta de la api](/assets/funcionalidad_4.png)

La API verifica que el producto exista, y que el usuario esté autenticado.

Cuando la respuesta no es sastisfactoria, la bolita de estado se vuelve roja y aparece una alerta.

![Respuesta no sastisfactoria](/assets/funcionalidad_5.png)

## Estructura del frontend /angular-frontend.

### Components en /src/app/components
- bottom_navbar: barra de navegación que se encuentra fijo en la parte inferior de la pantalla.
- discover: Representa la sección "Descubre".
- navbar: el botón y el menú que se despliega al lado derecho de la pantalla.

![Botón del navbar](/assets/navbar.png)

![Menu del navbar](/assets/navbar1.png)

- product: Se refiere a cada botón que aparece en la sección "Mis Coberturas".
- product-list: Representa la sección "Mis Coberturas".
- user-info: Representa la parte superior de la aplicación (en movil) o parte izquierda (en tableta y en desktop), donde se encuentra la foto de perfil.

### Servicios en /src/app/services
- AuthService: Encapsula el proceso de autenticación, este maneja la autenticación de usuarios, guarda los JSON Web Tokens en el local storage del cliente, registra, ingresa usuarios y tiene otros metodos utiles.
- ProductService: Encapsula la lógica detrás de los productos, tiene métodos para obtener los productos disponibles a través de la API, hacer las solicitudes POST que se realizan al hacer click a los productos.
- DiscoverSectionService: Obtiene los articulos que se muestran en la sección "Descubre".
- MatIconService: Esta aplicación utiliza el módulo de Angular Material, este servicio tiene métodos para registrar iconos (svg) para luego ser utilizados en los html.


### Paginas en /src/app/pages.
- Login: Página para iniciar sesión.
- Profile: Página principal, donde se presenta el diseño realizado que se indicó para esta prueba.
- Signup: Página para registrarse.

### Guards en /src/app/guards.
- AuthGuard: Se encarga de proteger las rutas del frontend de usuarios no autenticados, revisa los tokens del usuario y la validez de los mismos.

## Interceptors em /src/app/interceptors.
- AuthInterceptor: Se encarga de agregar el bearer token al `Authorization Header` de cada request que se haga a la api.

### Modelos / tipos en /src/app/model.
- DiscoverArticle: define el tipo de discoverArticle, estos son los articulos que se muestran en la sección "Descubre".
- Product.
- User.

## Estructura del backend (expressJs)
En este backend se agregó una base de datos SQLITE, este guarda la información de los usuarios. El ORM utilizados es sequelize.

### Controladores en /src/controllers
- discoverSectionController: Maneja solo GET requests.
- productController: Maneja POST y GET request, POST para crear producto y GET para obtener los ya disponibles.
- userController: Maneja POST y GET request, POST para crear e ingresar usuarios, los usuarios son guardados en la base de datos.

### Middleware en /src/middleware.
- authenticate: Valida los JWTS, se utiliza en las rutas protegidas.
- uploads: Maneja la subida de las foto de perfil, usando muller. Estas fotos se guardan en /src/uploads.

### Modelos en /src/models
- models: User, define el modelo/entidad de usuario.

### Rutas en /src/routes
Mapea las rutas con los controladores.

### app.js en /src/
Importa los middlewares, las rutas los agrega a la instancia de la aplicación y la exporta para luego ser utilizada en server.js para iniciar el servidor.

# Contacto
- [pablolorenzo802@gmail.com](mailto:pablolorenzo802@gmail.com)
- 1 (829) 518-3001
- [WhatsApp](https://wa.link/dj36lf)
- [Portafolio](https://pablolorenzo.vercel.app)
