const connection = require('../config');
const response = require('../lib/response');

exports.get_mata_kuliah = (req, res) => {
    connection.query('SELECT * from mata_kuliah', (errors, rows, field) => {
        if (errors){
            console.log(errors);
        }else {
            response.ok(rows, res);
        }
    });
}