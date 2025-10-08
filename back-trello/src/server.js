const http = require('http')
const url = require('url')

//datos de prueba para la api
let users = [
    {id:1,name:'usuario 1'},
    {id:2,name:'usuario 2'}
]

//crear servidor
const server = http.createServer((req,res) =>{
    const parsedUrl = url.parse(req.url,true);
    
    //detectar ruta y metodo
    if (req.method == 'GET' && parsedUrl.pathname === '/api/users'){
        //respuesta
        res.writeHead(200,{'Content-Type': 'applicationi/json'});
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404);
        res.end('Ruta no encontrada');
    }
}
)

//6.Iniciar servidor
server.listen(3000,() =>{
    console.log('servidor corriendo en http://localhost:3000');
})





// Crear una api , metodo get para obtener usuarios 