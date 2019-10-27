const connection = require('../config');
const response = require('../lib/response');

exports.get_jurusan = (req, res) => {
    connection.query('SELECT * from jurusan', (errors, rows, field) => {
        if (errors){
            console.log(errors);
        }else {
            response.ok(rows, res);
        }
    });
};

exports.add_jurusan = (req, res) => {
    console.log(req);
}