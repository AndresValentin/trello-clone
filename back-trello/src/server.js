const http = require('http')


//datos de prueba para la api
let users = [
    {id:1,name:'usuario 1'},
    {id:2,name:'usuario 2'}
]


// Funcion para parsear el body de las peticiones POST
const getRequestBody = (req) => {
    return new Promise ((resolve,reject) =>{
        let body = '';
        req.on('data', chunk => {
            bodt += chunk.toString();
        });
        req.on('end' , ()=> {
            try{
                resolve(JSON.parse(body));
            } catch(error){
                reject(error)
            }

        });
    });
}

//crear servidor 
const server = http.createServer((req,res)=>{

    if (req.method === 'GET' && req.url==='api/users'){

    }


}
)




function saludar (nombre){
    return 'hola ' + nombre
}


console.log(saludar('goku'))