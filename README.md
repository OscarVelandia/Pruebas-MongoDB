# Tabla con algunos comandos de MongoDB 
La tabla es tomada de [este repositorio](https://github.com/eacevedof/prj_js_mongodb), fueron modificadas algunas 
descripciones y su formato.

~~~
+----------------------------------------------------+---------------------------------------------------------------+
|                      comando                       |                         acción                                |
+----------------------------------------------------+---------------------------------------------------------------+
| mongod                                             | inicia el servidor de mongodb, deja el servicio corriendo     |
|----------------------------------------------------|---------------------------------------------------------------+
| mongo                                              | para ejecutar comandos de mongo, habilita el shell propio     |
|                                                    | de mongo                                                      |
|----------------------------------------------------|---------------------------------------------------------------+
| show dbs                                           | muestra las bases de datos, (como show databases en mysql)    |
|----------------------------------------------------|---------------------------------------------------------------+
| db                                                 | indica la base de datos a la que se ha conectado              |
|----------------------------------------------------|---------------------------------------------------------------+
| use <nombrebd>                                     | cambia la conexión actual a la bd <nombrebd>                  |
|----------------------------------------------------|---------------------------------------------------------------+
| db.createUser()                                    | crea un usuario, muestra Successfully added user:<el json>    |
|----------------------------------------------------|---------------------------------------------------------------+
| db.datosCliente.insert()                           | indica <db actual>.<nombreDeLaColeccion>.<haz un isnert de>() |
|                                                    | seria como: INSERT INTO clientes (...) VALUES(...)            |
|----------------------------------------------------|---------------------------------------------------------------+
| db.datosCliente.find()                             | SELECT * FROM clientes                                        |
|----------------------------------------------------|---------------------------------------------------------------+
| db.datosCliente.insert([...])                      | hace un bulk insert como                                      |
|                                                    | INSERT INTO ... VALUES (...),(...)(...);                      |
|----------------------------------------------------|---------------------------------------------------------------+
| db.clientes.find({firstName:"Isaac"})              | SELECT * FROM clientes WHERE firstName='Isaac'                |
|----------------------------------------------------|---------------------------------------------------------------+
| db.clientes.update({.condicion.},{nuevos valores}) | UPDATE clientes SET nuevos valores WHERE condicion            |
|----------------------------------------------------|---------------------------------------------------------------+
| db.clientes.find().pretty()                        | Muestra los datos formateados para mejor legibilidad          |
|----------------------------------------------------|---------------------------------------------------------------+
| $set                                               | seria como un alter table de agregación de campo              |
|----------------------------------------------------|---------------------------------------------------------------+
| $inc                                               | seria como una funcion preprogramada                          |
|----------------------------------------------------|---------------------------------------------------------------+
| $unset                                             | seria como un alter table de eliminacion de campo             |
|----------------------------------------------------|---------------------------------------------------------------+
| upsert:true                                        | Flag que indica que si no existe el registro lo inserta       |
|                                                    | y si existe lo actualia                                       |
|----------------------------------------------------|---------------------------------------------------------------+
| $rename                                            | alter table de un nombre de campo                             |
|----------------------------------------------------|---------------------------------------------------------------+
| db.clientes.remove({condicion})                    | es como un DELETE FROM clientes WHERE <condición>             |
|----------------------------------------------------|---------------------------------------------------------------+
| $or                                                | condicional OR                                                |
|----------------------------------------------------|---------------------------------------------------------------+
| $regex                                             | Se podria entender como el LIKE                               |
|----------------------------------------------------|---------------------------------------------------------------+
| find().sort()                                      | Es la ordenacion como hace ORDER BY, el -1 es el DESC         |
|----------------------------------------------------|---------------------------------------------------------------+
| find().count()                                     | Es el COUNT(*)                                                |
|----------------------------------------------------|---------------------------------------------------------------+
| find().limit(iN)                                   | Es el LIMIT                                                   |
+----------------------------------------------------+---------------------------------------------------------------+
~~~

En el archivo de db.js hay ejemplos de uso de todos los comandos de la tabla. 

Aunque las bases de datos SQL son diferentes en su concepción (MongoDB es no-SQL) la explicación de la sintaxis es en gran medida un paralelo con su homologo en SQL.

