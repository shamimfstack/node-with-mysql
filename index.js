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

    // DeleteData(con);

    // SelectData(con);

    OrderData(con);
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
    // const SQLQuery = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(SQLQuery, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("Data deleted successfully!!!");
    })
}

// select data
function SelectData(con) {
    // const SQLQuery = "SELECT * FROM `citizens`";
    // const SQLQuery = "SELECT name, age FROM `citizens`";
    // const SQLQuery = "SELECT name, age FROM `citizens` WHERE id=1";
    const SQLQuery = "SELECT * FROM `citizens` WHERE name LIKE 'S%'";
    con.query(SQLQuery, function(err, result, fields) {
        if(err) {
            console.log(err);
        }
        console.log(result);
        // console.log(result[1].name);
        // console.log(fields);
        
    })
}

// order by
function OrderData(con) {
    // const SQLQuery = "SELECT * FROM customers ORDER BY name";
    // const SQLQuery = "SELECT * FROM customers ORDER BY name DESC";
    const SQLQuery = "SELECT name, age FROM `citizens` ORDER BY name";
    con.query(SQLQuery, function(err, result) {
        if(err) {
            console.log(err);
        }
        console.log(result);
    })
}















