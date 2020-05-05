var express = require('express');
var app = express();
var router = express.Router();
var app = new express();
var bodyParser = require("body-parser");
const Departments = require('./department');
const Promotions = require('./promotions');
const Products = require('./products');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password@admin',
    database: 'productsDB'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        console.log(err);
        return;
    }

    console.log('Connection established');
});
app.get("/getAllProducts", function (req, res, next) {
    Products.getAllProducts(req, res, next, con, req.params.pageNumber)

});
app.get("/getNumberOfProducts", function (req, res, next) {
    Products.getNumberOfProducts(req, res, next, con)

});
app.get("/getPromotion", function (req, res, next) {
    Promotions.getProductsPromotions(req, res, next, con)
});
app.get("/getDepartments", function (req, res, next) {

    Departments.getAllDepartments(req, res, next, con)
});

app.get("/getPromotions", function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    Promotions.getAllPromotions(req, res, next, con)

});

var server = app.listen(9000, function () {
    console.log('Server is running..');
});