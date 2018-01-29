//-----------------------------------------MongoDB es KeySensitive
//---------------------------Para limpia la consola de mongo se usa ---cls---

//Crea un user y esta colección SI tiene un esquema, solo recibe estos datos.
db.createUser({
    user: 'Oscar123', 
    pwd: '13242', 
    roles: ['readWrite', 'dbAdmin']
})

//Mongo directamente agrega un hash único que trabaja como _id: ObjectId(<hash>) o Primary Key en SQL. 
db.datosCliente.insert(
    {
        nombre: 'Oscar Daniel',
        apellido: 'Velandia Santafe',
        edad: '24',
        compraMensual: null,
        compraAnual: null,
        dni: '23455453'     
    },
)

//Insertar datos que tienen objetos como propiedades.
db.nombreDeLaColeccion.insert(
    {
        nombre: 'Zack',
        apellido: 'Wylde',
        edad: '56',
        direccion: {
            ciudad: 'Girardot',
            calle: 'Flying V',
            numero: '333'
        },
        compraMensual: null,
        compraAnual: null,
        dni: '4567844'
    }
)

//Para agregar más de un cliente tendria que insertarlos como un array ó arreglo
db.datosCliente.insert([
    {
        nombre: 'Electro',
        apellido: 'Harmonix',
        edad: '24',
        compraMensual: null,
        compraAnual: null,
        dni: '34545656'     
    },
    {
        nombre: 'Seymour',
        apellido: 'Duncan',
        edad: '80',
        compraMensual: null,
        compraAnual: null,
        dni: '234354634567'     
    },
    {
        nombre: 'Les',
        apellido: 'Paul',
        edad: '75',
        compraMensual: null,
        compraAnual: null,
        dni: '2349986345307'     
    },
])

//Actualizar datos in el _id.
db.nombreDeLaColeccion.update(
    /*Con esta primera busqueda se trae todo el registro, aunque solamente ponga 1 propiedad, esto permite 
    sobreescribir TODO el objeto*/
    {compraMensual: null},       //Para ser más preciso, lo mejor es hacerlo directamente con id.
    {
        nombre: 'Oscar',
        apellido: 'Velandia',
        edad:'24',
        compraMensual: null,
        compraAnual: null,
        dni: '65546542'
    }
)

//Hacer un update con el ObjectId(<'hash'>)
db.nombreDeLaColeccion.update(
    {_id: ObjectId("5a5640ae625a49b4c525f51e")},
    {
        nombre : "Lays", 
        apellido : "Thames", 
        edad : "21", 
        compraMensual : null, 
        compraAnual : null, 
        dni : "234998607"}
)

//Cambiar o agregar solo 1 datos a una coleccion existente, sin esto solo sobreescribe.
db.nombreDeLaColeccion.update(    
    {_id: ObjectId('5a5640ae625a49b4c525f51e')},
    {
        $set: {edad: 21}
    }
)

//Quita la propiedad indicada.
db.nombreDeLaColeccion.update(
    {_id: ObjectId('5a5640ae625a49b4c525f51e')},
    {
        $unset: {edad:4}
    }
)

//Aumentar o disminuir datos numéricos
db.nombreDeLaColeccion.update(
    {_id: ObjectId('5a5640ae625a49b4c525f51e')},
    {
        $inc: {edad:4}, //Aumenta
        $inc: {compraAnual: -1000} //Disminuye
    }
)

/*Con $rename cambio el nombre de la propiedad del objecto, es decir, si tengo {nombre: 'Daniel'}, 
con $rename puedo cambiar SOLO "nombre", NO "Daniel". Es importante tener en cuenta que NO se puede 
cambiar el tipo de dato.*/ 
db.nombreDeLaColeccion.update(
    {_id: ObjectId('5a5640ae625a49b4c525f51e')},
    {           //dato antiguo: dato nuevo
        $rename: {'documento de identidad'  : 'dni'}
    }
)

//Con upsert, si no encuentra el dato entonces lo crea
db.nombreDeLaColeccion.update(
    {nombre: 'Felipe'},
    {
        apellido: 'Santafe',
        compraMensual : null,
        compraAnual : null,
        dni: '34434534',      
        edad: 8,  
    },
    {upsert: true}
)

//Con $remove elimino los datos que coincidan con mi parámetro de busqueda.
db.nombreDeLaColeccion.remove(
    {nombre: 'Felipe'},
)

//Con $remove y jusOne: true elimino solo el PRIMER dato que coincidan con mi parámetro de busqueda.
db.nombreDeLaColeccion.remove(
    //Si solamente dejara esta linea eliminaria todos los objetos que tuvieran esa propiedad
    {nombre: 'Felipe'},
    {justOne: true}
)

//Eliminar una db
> use <dbAEliminar> 
> db.dropDatabase()

//Buscar todos los datos de la DB
db.nombreDeLaColeccion.find()

//Buscar todos los datos y obtener un resultado más legible.
db.nombreDeLaColeccion.find().pretty()

//Buscar datos especificos
db.nombreDeLaColeccion.find({algunaPropiedad: 'DelObjeto'})

//Para buscar dentro de una subpropiedad la ruta de la busqueda debe ir en comillas.
                        //nombre de la subpropiedad   
db.nombreDeLaColeccion.find({'nombreDelObjeto.nombreDeLaPropiedad': 'Girardot'})

//Lo mejor es buscar por el ObjectId(<hash>)
db.nombreDeLaColeccion.find({_id: ObjectId('<hash>')})

//Con $or se buscan datos que tengan uno u otra propiedad
db.nombreDeLaColeccion.find(
    {
        //pongo las condiciones dentro de un array, pueden ser más de 2.
        $or: [{nombre: 'Felipe'}, {nombre: 'Daniel'}]
    }
)

/*Con $gt (greater than) se buscan datos MAYORES QUE, funciona con datos tipo String Ó Number, a menos que se use $or, 
no funciona con datos String Y Number. */
db.nombreDeLaColeccion.find(
    {edad: {$gt: 29}}
)

//Con $lt (less than) se hace EXACTAMENTE LO CONTRARIO que con $gt. Busca datos MENORES QUE.
db.nombreDeLaColeccion.find(
    {edad: {$lt: 29}}
)

//Con $lt y $gt al tiempo se genera una especie de condicional &&
db.nombreDeLaColeccion.find(
    {edad: {$gt: 21, $lt: 24}} //Con esto se traerian 22 y 23
)


//Con $or se pueden generar 2 clausulas de busqueda, en este caso seria para conseguir datos String o Number.
db.nombreDeLaColeccion.find(
    {
        $or: [{edad: {$gt: 24}}, {edad: {$gt: '24'}} ]
    }
)

//Con $or Se pueden combinar $lt y $gt para tener más de 1 parámetro de busqueda, generaria un condicional tipo &&
db.nombreDeLaColeccion.find(
    {
        $or: [{edad: {$lt: 23}}, {edad: {$lt: '23'}}, {edad: {$gt: 24}}, {edad: {$gt: '24'}} ]
    }
)

//Con $regex se puede buscar usando una expresión regular
db.nombreDeLaColeccion.find(
    {nombre: {$regex: 'ani'}}
)

//Ordenar los resultador de menor a mayor   
db.nombreDeLaColeccion.find().sort({nombre: 1})

//Ordenar los resultador de mayor a menor   
db.nombreDeLaColeccion.find().sort({nombre: -1})

//Contar la cantidad de datos   
db.nombreDeLaColeccion.count()

//Poniendo un filtro
db.nombreDeLaColeccion.find(
    //En este filtro tiene que coincidir con el tipo de dato, en este caso busca strings
    {edad: {$gt: '18', $lt: '34'}}
).count()

//con limit(), se limita la cantidad de datos a mostrar.
db.nombreDeLaColeccion.find(
    //En este filtro tiene que coincidir con el tipo de dato, en este caso busca strings
    {edad: {$gt: '18', $lt: '34'}}
).limit(3)

//en mongoDB se pueden usar funciones con cierto aire a javascript
