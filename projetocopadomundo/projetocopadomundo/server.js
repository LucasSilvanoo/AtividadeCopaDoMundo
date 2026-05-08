const http = require('http');
const fs = require('fs');
const PORT = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
    // Configura o cabeçalho para HTML com UTF-8
    res.writeHead(200, { "content-type": "text/html; charset=utf8" });

    // 1. Lendo os arquivos do disco
    const html = fs.readFileSync("index.html", "utf8");
    const css = fs.readFileSync("style.css", "utf8");
    const js = fs.readFileSync("script.js", "utf8");

    let paginaFinal = html
    .replace('<link rel="stylesheet" href="style.css">', `<style>${css}</style>`)
    .replace('<script src="script.js" defer></script>', `<script>${js}</script>`)
    

    // Início da entrega do Projeto Inteiro
    res.write(paginaFinal);
    res.end();
})

server.listen(PORT, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
})