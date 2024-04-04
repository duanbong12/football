// là mentor điều hướng các func
// call model and process data.
const express = require('express')
const connection = require('../config/database')

const getHomepage = (req, res) => {
    // process data
    return res.render('home.ejs')
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
const getCreate = (req, res) => {
     return res.render('create.ejs')
}
const getListfootball = (req, res) => {
  connection.query(
    'SELECT * FROM demo2.pitches',
    function (err, results) {
      res.send(results)
    }
  );  
}
const getSuggest = (req, res) => {
     res.render('suggest.ejs')
}
module.exports = {
    getHomepage, postCreateuser, getCreate, getListfootball, getSuggest
}
