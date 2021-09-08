# Masiv Comic - Prueba Técnica

Este es una aplicación creada con create-react-app, para correrla es necesario estar en el root del proyecto y correr los siguientes comandos:

> `npm install`
>
> `npm start`

Una vez terminado se iniciará la aplicación en la URL `http://localhost:3000/`

- La aplicación fue construida con React y Axios para hacer la petición al API
- El principal problema encontrado era poder realizar peticiones al API desde el localhost ya que el CORS del servidor del API tiene bloqueado dicho localhost
  - Para solucionarlo usamos un proxy el cual añade el header de CORS al request y así poder obtener la data del API
