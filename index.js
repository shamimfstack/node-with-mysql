var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_node'
});

con.connect(function(err) {
    if(err) {
        console.log(err);
    }
    console.log("Connected!");

    // CreateDatabase(con);

    // InsertData(con);

    // UpdateData(con);

    DeleteData(con);
})


// create database
function CreateDatabase(con) {
    const SQLQuery = "CREATE DATABASE my_node";
    con.query(SQLQuery, function(err, result) {
        if(err) {
            console.log(err);
        }
        console.log("Database created");
    });

}

// insert data
function InsertData(con) {
    const SQLQuery = "INSERT INTO `citizens`(`name`, `age`, `phone`, `city`, `country`) VALUES ('Tanjin','32','01900000000','Mymensingh','Bangladesh')";
    con.query(SQLQuery, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("Data inserted successfully!!!");
    })
}

// update data
function UpdateData(con) {
    const SQLQuery = "UPDATE `citizens` SET `name`='Alisha',`age`='6',`phone`='01700000000',`city`='NY',`country`='USA' WHERE id=2";
    con.query(SQLQuery, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("Data updated successfully!!!");
    })
}

// delete data
function DeleteData(con) {
    const SQLQuery = "DELETE FROM `citizens` WHERE id=3";
    con.query(SQLQuery, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("Data deleted successfully!!!");
    })
}














