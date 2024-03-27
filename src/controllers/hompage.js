// là mentor điều hướng các func
// call model and process data.
const express = require('express')
const connection = require('../config/database')

const getHomepage = (req, res) => {
    // process data
    return res.render('home.ejs')
}   
const getAbc = (req, res) => {
   return res.render('sample.ejs')
}
const postCreateuser = (req, res) => {
    let {email,Tên, city} = req.body
    
    connection.query(
        `INSERT INTO users (email, name1, city)
         VALUES (?, ?, ?) `,
        [email, Tên, city],
        function (err, results) {
          res.send('Create users sucsses')
        }
      );
}

module.exports = {
    getHomepage, getAbc, postCreateuser
}
