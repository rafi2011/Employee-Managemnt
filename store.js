const connection = require('./connection');

class store {
    constructor(connection){
        this.connection('connection');
    }
    read(){
        return this.connection.query("SELECT * FROM Employee");
    }

    searchByName(name){
        return this.connection.query("SELECT * FROM")
    }
}