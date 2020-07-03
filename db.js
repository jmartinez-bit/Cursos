const { db } = require("./models/Curso");

conn = new Mongo();

db = conn.getDB('tecsupdb');
db.usuarios.insert(
    [
        {nombre:'James',
        apellido:'Farfan',
        email: 'jfarfan@abc.com',
        estado: 'A', 
        created_at: new Date ('07/01/2020')}
    ]
);
db.cursos.insert([
    {
        nombre: 'Matematicas',
        creditos: '20',
        nro_horas: '3'
    }
]);