const connection = require('../config');
const response = require('../lib/response');

exports.get_dosen = (req, res) => {
    connection.query('SELECT * from dosen', (errors, rows, field) => {
        if (errors){
            console.log(errors);
        }else {
            response.ok(rows, res);
        }
    });
}