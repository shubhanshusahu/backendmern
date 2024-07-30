const { createPool } = require('mysql');
const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test',
    connectionLimit: 1000,
})
pool.query('select * from formdetail', (err, results, fields) => {
    if (err) {
        return console.log(err)

    }
    return console.log(results);
})
module.exports = pool