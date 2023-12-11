var express = require("express");
var mysql = require("mysql");
 
var app = express(); //Ejecutamos el constructor
 
//Configuramos la conexion
var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "controlescolar",
  port: 3306,
});
 
//Probar la conexion
conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conectado a la base de datos");
  }
});
const cors=require("cors");
const corsOptions ={
origin:'*', 
credentials:true, 
optionSuccessStatus:200,
}
app.use(cors(corsOptions))
 
//Verbos de solicitud del cliente
//app.get();
//app.post();
//app.put();
//app.delete();
 
app.get("/", function (req, res) {
  res.send("<h1>Ruta de inicio</h1>");
});
 
//Mostrar todos los maestros
app.get("/api/maestros", (req, res) => {
  conexion.query("SELECT * FROM maestros",(error,filas)=>{
    if(error){
        throw error;
    }else{
        res.header("Access-Control-Allow-Origin","*")
        res.send(filas);
    }
  });
});
//Mostrar todos los alumnos
app.get("/api/alumnos", (req, res) => {
    conexion.query("SELECT * FROM alumnos",(error,filas)=>{
      if(error){
          throw error;
      }else{
          res.header("Access-Control-Allow-Origin","*")
          res.send(filas);
      }
    });
  });
//Mostrar todos los materias
app.get("/api/materias", (req, res) => {
  conexion.query("SELECT * FROM materias",(error,filas)=>{
    if(error){
        throw error;
    }else{
        res.header("Access-Control-Allow-Origin","*")
        res.send(filas);
    }
  });
});
//Mostrar todos los grupos
app.get("/api/grupos", (req, res) => {
  conexion.query("SELECT * FROM grupos",(error,filas)=>{
    if(error){
        throw error;
    }else{
        res.header("Access-Control-Allow-Origin","*")
        res.send(filas);
    }
  });
});
//Mostrar un solo maestro
app.get('/api/maestros/:clavemaestro',(req,res)=>{
    conexion.query("SELECT * FROM maestros WHERE clavemaestro = ? LIMIT 1",[req.params.clavemaestro],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    })
}) 
//Mostrar un solo alumno
app.get('/api/alumnos/:ncontrol',(req,res)=>{
  conexion.query("SELECT * FROM alumnos WHERE ncontrol = ? LIMIT 1",[req.params.ncontrol],(error,fila)=>{
      if(error){
          throw error;
      }else{
          res.send(fila);
      }
  })
})
//Mostrar un solo materia
app.get('/api/materias/:clavemateria',(req,res)=>{
  conexion.query("SELECT * FROM materias WHERE clavemateria = ? LIMIT 1",[req.params.clavemateria],(error,fila)=>{
      if(error){
          throw error;
      }else{
          res.send(fila);
      }
  })
})
//Mostrar un solo grupo
app.get('/api/grupos/:clavegrupo',(req,res)=>{
  conexion.query("SELECT * FROM grupos WHERE clavegrupo = ? LIMIT 1",[req.params.clavegrupo],(error,fila)=>{
      if(error){
          throw error;
      }else{
          res.send(fila);
      }
  })
})
//Agregar un maestro
app.post("/api/maestros", (req, res) => {
  let data = {
    clave: req.body.cla,
    nombre: req.body.nom,
    departamento: req.body.dep,
    estatus: req.body.est,
  };
  let sql = "INSERT INTO maestros SET ?";
  conexion.query(sql, data, function (error, results) {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

//Actualizar datos del maestro
app.put("/api/maestros/:id", (req, res) => {
  let clave = req.params.id;
  let nombre = req.body.nom;
  let departamento = req.body.dep;
  let estatus = req.body.est;
  let sql =
    "UPDATE maestros set nombre=?,departamento=?,estatus=? WHERE clave=?";
  conexion.query(
    sql,
    [nombre, departamento, estatus, clave],
    function (error, results) {
      if (error) {
        throw error;
      } else {
        res.send(results);
      }
    }
  );
});

//Eliminar un registro de maestro
app.delete("/api/maestros/:id", (req, res) => {
  conexion.query(
    "DELETE from maestros WHERE clave=?",
    [req.params.id],
    function (error, filas) {
      if (error) {
        throw error;
      } else {
        res.send(filas);
      }
    }
  );
});

//Encender el servidor
app.listen("3000", function () {
  console.log("El servidor esta encendido en el puerto 3000");
});