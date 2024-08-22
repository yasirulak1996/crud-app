const express = require('express');
const app = express();
const cors = require('cors');
const {createPool} = require('mysql2');

const pool =createPool({
    host:"localhost",
    user:"web_dev",
    password:"Hashan1996",
    database:"web_dev",
    port:"3306"
});



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


pool.query(`select * from names`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})


app.listen(5000, () => console.log('server is running on port 5000'));