module.exports = (app) => {
    const jurusan = require('./controller/jurusan');
    const dosen = require('./controller/dosen');
    const mata_kuliah = require('./controller/mata_kuliah');
    const mahasiswa = require('./controller/mahasiswa');

    app.route('/').get((req, res) => {
        console.log(req);
        res.send('Helloooo')
    })

    app.route('/get_jurusan').get(jurusan.get_jurusan);
    app.route('/add_jurusan').post(jurusan.add_jurusan);

    app.route('/get_dosen').get(dosen.get_dosen);

    app.route('/get_mata_kuliah').get(mata_kuliah.get_mata_kuliah);

    app.route('/get_mahasiswa').get(mahasiswa.get_mahasiswa);
}