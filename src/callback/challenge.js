/***
 * xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
 * xmlhttp.readyState → Retorna el estado de la petición.
 * xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
 * xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
 * xmlhttp.send() → Envía la petición.
 * 
 * Existen 5 estados en un llamado XMLHttpRequest:
 * 0 → Se ha inicializado.
 * 1 → Loading (cargando).
 * 2 → Se ha cargado.
 * 3 → Procesamiento si existe alguna descarga.
 * 4 → Completado.
 * 
 * 
 * El código de estado (status codes) sirve para describir el estado de la petición hecha al servidor.
 * 1xx → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
 * 2xx → Indican que la petición fue recibida, aceptada y procesada correctamente.
 * 3xx → Indican que hay que tomar acciones adicionales para completar la solicitud.
 * 4xx → Indican errores del lado del cliente que hizo mal una solicitud.
 * 5xx → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

 */
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;; //llamado al XmlHttpRequest
const API = "https://api.escuelajs.co/api/v1"; //API en mayúscula porque es una referencia que no va a cambiar

function fetchData(urlApi, callback) {//urlApi: no confundir y colocar API
  let xhttp = new XMLHttpRequest(); //referencia a new XMLHttpRequest

  xhttp.open("GET", urlApi, true); //petición "obtener" con true para habilitarlo
  xhttp.onreadystatechange = function (event) {//escucha diferentes estados de la solicitud y conocer cuando está disponible la información
    if (xhttp.readyState === 4) {//si el estado ha sido completada la llamada
      if (xhttp.status === 200) {//el servido responde de forma correcta
        //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
        callback(null, JSON.parse(xhttp.responseText));
      } 
      else {
        const error = new Error("Error" + urlApi);
        return callback(error, null); //es null porque no se está regresando ningún dato
      }
    } 
  };
  xhttp.send();
}

/***
 * Estas son peticiones anidadas, para obtener toda la info desde un solo llamado
 */
fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});