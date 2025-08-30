const http = require("http");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const PORT = 3000;
handlebars.registerHelper("mayorA", function (valor, limite, options) {
    if (valor > limite) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
    });

const server = http.createServer((req, res) => {
    let filePath;
    let data;

    if (req.url === "/") {
    filePath = path.join(__dirname, "views", "home.hbs");
    data = {
        title: "Servidor de Handlebars",
        welcomeMessage: "Bienvenido al laboratorio de Node.js",
        day: new Date().toLocaleDateString("es-PE"),
        students: ["Ana", "Luis", "Pedro", "Maria"],
    };

    } else if (req.url === "/about") {
    filePath = path.join(__dirname, "views", "about.hbs");
    data = {
        title : "Informacion de clases",
        curso: "Programación Backend con Node.js",
        profesor: "Ing. Juan Pérez",
        fecha: new Date().toLocaleDateString("es-PE"),
    };

    } else if (req.url === "/students") {
    filePath = path.join(__dirname, "views", "students.hbs");
    data = {
        estudiantes: [
        { nombre: "Ana", nota: 18 },
        { nombre: "Luis", nota: 14 },
        { nombre: "Pedro", nota: 16 },
        { nombre: "María", nota: 12 },
        ],
    };

    } else {
    res.statusCode = 404;
    res.end("<h1>404 - Página no encontrada</h1>");
    return;
    }

    fs.readFile(filePath, "utf8", (err, templateData) => {
    if (err) {
        res.statusCode = 500;
        res.end("Error interno en el servidor");
        return;
    }

    const template = handlebars.compile(templateData);
    const html = template(data);

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(html);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
