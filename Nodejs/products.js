
function getAllProducts(req, res, next, conn) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    conn.query('SELECT * FROM Products ', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
}
function getNumberOfProducts(req, res, next, conn) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    conn.query('SELECT COUNT(*) FROM Products ', (err, rows) => {
        if (err) throw err;

        res.send({ count: rows[0]['COUNT(*)'] });

    });
}
exports.getAllProducts = getAllProducts;
exports.getNumberOfProducts = getNumberOfProducts; 