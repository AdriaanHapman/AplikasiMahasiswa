const connection = require('../config');
const response = require('../lib/response');

exports.get_mahasiswa = (req, res) => {
    connection.query('SELECT * from mahasiswa', (errors, rows, field) => {
        if (errors){
            console.log(errors);
        }else {
            response.ok(rows, res)
        }
    });
}