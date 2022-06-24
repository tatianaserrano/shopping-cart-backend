const mysql = require('mysql2');

const getConnection = () => {
    const connection = mysql.createConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
        port: +process.env.DB_PORT,
        host: process.env.DB_HOST
    });
    connection.connect((error) => {
        if(error){
            throw error;
        } else{
            console.log('Conexión exitosa');
        }
    });
    return connection;
}

const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        try{
            const connection = getConnection();
            connection.query(query, (error, result) => {
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
        }catch(error){
            reject(error);
        }
    });
}

exports.executeQuery = executeQuery;