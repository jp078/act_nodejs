//Escribe un comentario explicando para qué sirve http
import http from 'http';
// para cifrar y asegurar la comunicación entre el navegador del usuario y el servidor

//Escribe un comentario explicando para qué sirve fs
import fs from 'fs';
// para leer y escribir archivos en el sistema de archivos del servidor


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
      
       
      
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
          //El código de estado HTTP 500 significa "Error Interno del Servidor". Indica que el servidor encontró una condición inesperada que le impidió cumplir con la solicitud del cliente. Esto generalmente se debe a un error en el código del servidor o a un problema con los recursos del servidor.
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        //200 sifnifica que la solicitud se ha procesado correctamente y el servidor está devolviendo el recurso solicitado

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }
    function mostrarEquipo(req, res) {
    // Usamos fs.readFile para buscar el archivo en tu carpeta
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
            // Si el archivo no existe o tiene un error, mandamos el 500
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error interno: No se pudo cargar la pagina de equipo.');
            return;
        }

        // Si todo esta bien (200), enviamos el contenido del HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}


    //Esta función deberá enviar un json con los datos de las mascotas
    function getMascotas(req, res) {
        //Esto representa un objeto JSON de una mascota
        //Agrega otra MASCOTA
        const mascotas = {
            "nombre": "Pikachu",
            "color": "Amarillo",
            "nombre": "Mew",
            "color": "Rosa"
          };  
          
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      //La función JSON.stringify() convierte un valor de JavaScript en una cadena JSON. La usamos para enviar datos estructurados como JSON a través de la red, ya que JSON es un formato de texto que puede ser fácilmente interpretado por otros lenguajes de programación.
      res.end(JSON.stringify(mascotas));
  
    }

  
    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

     
      function mostrarAdoptantes(req, res) {
        //Construye una página básica adpotantes.html
        fs.readFile('adoptantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las adoptantes
    function getAdoptantes(req, res) {
    //Tienes que corregir varias cosas en esta sección
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Aquí van los datos de los adoptantes');
      const adoptantes = {
        "nombre": "Ash Ketchum",
        "edad": 10,
        "nombre": "Misty",
        "edad": 12
    }
    };

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      //Cambia el mensaje por algo más divertido
      res.end(JSON.stringify({ error: 'Página que es eso? No la conozco :(' }));
    }
    function mostrarMascotasHTML(req, res) {
    fs.readFile('mascotas.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error al cargar la pagina de mascotas');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

    function mostrarOpinion(req, res) {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error interno: No se pudo abrir la pagina de opinion.');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });}
    
    

      


    //incluye el enlace a la documentación de createServer
   const servidor = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        darBienvenida(req, res);
    }else if (url === '/mascotas') {
        mostrarMascotasHTML(req, res); 
    } else if (url === '/api/mascotas') {
        getMascotas(req, res);         
    } else if (url === '/perfil') {
        mostrarPerfil(req, res); // Esta llama a perfil.html
    } else if (url === '/adoptantes') {
        mostrarAdoptantes(req, res); // Esta llama a adoptantes.html
    } else if (url === '/equipo') {
        mostrarEquipo(req, res); // Esta llama a equipo.html
    } else if (url === '/api/adoptantes') {
        getAdoptantes(req, res); 
    } else if (url === '/opinion') {
        mostrarOpinion(req, res); 
    }
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los htm
