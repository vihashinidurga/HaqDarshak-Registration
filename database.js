import mysql from"mysql2";
import express from"express";
import bodyParser from "body-parser";
const app=express();
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Durga@2004",
    database:"user_details",
    port:3306,
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });
  
export default db;
  