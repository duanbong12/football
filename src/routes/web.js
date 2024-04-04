// sử lý các router
const axios = require('axios')
require('dotenv').config()
const express = require('express')
const connection = require('../config/database')
const {getHomepage, postCreateuser, getCreate, getListfootball, getSuggest} = require('../controllers/hompage')
const router = express.Router()

//router.Method('route', handler)
router.get('/create', getCreate)
router.get('/', getHomepage)
router.get('/listfootball', getListfootball)
router.post('/create-user', postCreateuser)

router.get('/suggest', getSuggest)
router.get('/pitches', async (req, res) => {
    try {
        const { price, location } = req.query;
        // Query dữ liệu từ cơ sở dữ liệu
        console.log(price);
        console.log(location);

        const query = `SELECT * FROM demo2.pitches WHERE price <= ? AND address = ?`;
        connection.query(query, [price, location], function (err, result) {
            if (err) {
                console.error('Lỗi truy vấn:', err);
                res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
            } else {
                const urls = result.map(item => item.url);
                console.log(urls)
                res.send(urls)
            }
        });
    } catch (error) {
        console.error('Lỗi xử lý:', error);
        res.status(500).send('Lỗi xử lý yêu cầu');
    }
});

module.exports = router