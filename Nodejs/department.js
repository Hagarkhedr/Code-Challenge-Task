
function getAllDepartments(req, res, next, conn) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    conn.query(
        'SELECT * FROM Departments'
        , (err, rows) => {
            if (err) throw err;
            res.send(rows);
        });




}

exports.getAllDepartments = getAllDepartments; 