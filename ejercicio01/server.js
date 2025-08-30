const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) =>{
    
    res.setHeader("Content-Type","text/html; charset-utf-8")

    if(req.url === "/") {
        res.statusCode = 200;
        res.end("<h1>Bienvenido al servidor de Node.js</h1>");
    }else if (req.url === "/about"){
        res.statusCode = 200;
        res.end("<h1>Acerca de nosostros</h1><p>Este es un servidor basico</p>");
    } else if (req.url === "/contact"){
        res.statusCode = 200;
        res.end("<h1>Contacto</h1><p>Escribenos a contacto@ejemplo.com</p>")
    } else if (req.url === "/services"){
        res.statusCode = 200;
        res.end("<h1>Lista de Servicios</h1><ul><li>Desarrollo de software</li><li>Creacion web</li><li>Marketing digital</li><li>Soporte tecnico</li></ul>");
    } else if (req.url === "/error"){
        res.statusCode = 500;
        res.end("<h1>Error 500: Problema interno del servidor</h1>")
        console.log("Error 500: Problema interno del servidor")
    } else {
        res.statusCode = 404;
        res.end("<h1>404 - Pagina no encontrada</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http:localhost:${PORT}` )
})