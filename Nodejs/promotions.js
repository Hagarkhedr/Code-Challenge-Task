
function getAllPromotions(req, res, next, conn) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    conn.query(
        'SELECT * FROM Promotions WHERE IsActive=true'
        , (err, rows) => {
            if (err) throw err;
            res.send(rows);
        });

}

function getProductsPromotions(req, res, next, conn) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    conn.query(
        'SELECT ProductsPromotions.Promotion_id, ProductsPromotions.Product_id , Promotions.Discount FROM Promotions INNER JOIN ProductsPromotions ON Promotions.Promotion_id = ProductsPromotions.Promotion_id WHERE Promotions.IsActive=true', (err, rows) => {
            if (err) throw err;
            res.send(rows);
        });

}

exports.getAllPromotions = getAllPromotions;
exports.getProductsPromotions = getProductsPromotions;