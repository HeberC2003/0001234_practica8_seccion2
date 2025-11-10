# 0001234_practica8_seccion2

1. ¿Cuál es la diferencia entre autenticación y autorización?
La autenticación es el proceso de verificar la identidad de un usuario, es decir, comprobar que realmente es quien dice ser. Por ejemplo, cuando un usuario inicia sesión con su correo y contraseña, el sistema valida esos datos para confirmar su identidad.

En cambio, la autorización ocurre después de la autenticación y consiste en dar o negar acceso a ciertos recursos o acciones dentro del sistema, según los permisos del usuario. Por ejemplo, un usuario autenticado puede no estar autorizado para acceder a una ruta o endpoint de administración.

2. ¿Cuál es la función del token JWT en la guía?
El token JWT (JSON Web Token) sirve para mantener la sesión del usuario autenticado y permitir que el servidor identifique al usuario en cada solicitud sin tener que pedir sus credenciales nuevamente.

En la guía, el token se obtiene al hacer login con el endpoint /signIn. Luego, ese token se usa para acceder a los endpoints protegidos, enviándolo en la cabecera como Bearer Token.
Si el token no se envía o no es válido, el sistema debe devolver un error y no permitir el acceso.

En otras palabras, el JWT es como una “credencial digital” que confirma que el usuario ya se autenticó correctamente y puede realizar ciertas operaciones autorizadas dentro del backend