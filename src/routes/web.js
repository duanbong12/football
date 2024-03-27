// sử lý các router
const express = require('express')
const {getHomepage, getAbc, postCreateuser} = require('../controllers/hompage')
const router = express.Router()

//router.Method('route', handler)

router.get('/', getAbc)

router.get('/name', getHomepage)
router.post('/create-user', postCreateuser)

module.exports = router