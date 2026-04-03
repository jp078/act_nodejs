import http from 'http';
import fs from 'fs';

async function getPersonaje(req, res) {
    try {
        const respuesta = await fetch('https://www.swapi.tech/api/people/4');
        const datos = await respuesta.json();

        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        res.end(JSON.stringify(datos));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error en la API');
    }
}

const servidor = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/' || url === '/starwarspersonaje.html') {
        fs.readFile('./starwarspersonaje.html', (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('No se pudo encontrar el HTML');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (url === '/api/personaje') {
        getPersonaje(req, res);
    } else {
        res.writeHead(404);
        res.end('Ruta no encontrada');
    }
});

const puerto = 1984;
servidor.listen(puerto, () => {
    console.log(`Servidor ${puerto}`);
});