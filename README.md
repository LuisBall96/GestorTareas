# ¡Hola! 👋  
**Bienvenido a este gestor de tareas**  

Este repositorio contiene un proyecto de un gestor de tareas construido con **NestJS**. A continuación, te explicaré cómo configurar el entorno y los endpoints disponibles.

## Configuración del Entorno  
Antes de comenzar, asegúrate de añadir las variables de entorno necesarias. Puedes usar el archivo `env.template` incluido en el proyecto como referencia para configurarlas correctamente.

## Endpoints de Autenticación  

### Registro de Usuario  
**POST**: `localhost:3000/v1/auth/register`  
- **Descripción**: Registra un nuevo usuario.  
- **Campos del body**:  
  - `name`: Nombre del usuario.  
  - `email`: Correo electrónico del usuario.  
  - `password`: Contraseña del usuario.  

### Inicio de Sesión  
**POST**: `localhost:3000/v1/auth/login`  
- **Descripción**: Inicia sesión un usuario registrado.  
- **Campos del body**:  
  - `email`: Correo electrónico registrado.  
  - `password`: Contraseña del usuario.  
- **Nota**: Al iniciar sesión, recibirás un token JWT con una duración de 24 horas. Este token será necesario para acceder a los endpoints protegidos.

## Endpoints del CRUD de Tareas  

### Relación Usuario - Tarea  
- **Nota importante**: Un usuario puede tener muchas tareas, pero cada tarea solo puede ser asignada a un único usuario.  
- **Autenticación**: Para consumir los endpoints de tareas, debes incluir el token JWT que recibiste al iniciar sesión en el **Bearer Token** de la cabecera de cada petición. Si no lo haces, no tendrás autorización para acceder a estos recursos.

### Crear una Nueva Tarea  
**POST**: `localhost:3000/v1/tareas/`  
- **Descripción**: Crea una nueva tarea.  
- **Campos del body**:  
  - `titulo`: Título de la tarea.  
  - `descripcion`: Descripción de la tarea.  
  - `usuarioId`: ID del usuario al que se le asigna la tarea.  

### Obtener el ID de tu Usuario  
**GET**: `localhost:3000/v1/usuarios`  
- **Descripción**: Obtén el ID de tu usuario. Este es necesario para asignar tareas.

### Listar Todas las Tareas  
**GET**: `localhost:3000/v1/tareas/`  
- **Descripción**: Devuelve una lista de todas las tareas, incluyendo el usuario asignado a cada una.

### Actualizar una Tarea  
**PATCH**: `localhost:3000/v1/tareas/{id_de_la_tarea}`  
- **Descripción**: Actualiza una tarea específica.  
- **Campos del body** (opcionales):  
  - `titulo`: Nuevo título de la tarea.  
  - `descripcion`: Nueva descripción de la tarea.

### Eliminar una Tarea  
**DELETE**: `localhost:3000/v1/tareas/{id_de_la_tarea}`  
- **Descripción**: Elimina una tarea específica.
"""
