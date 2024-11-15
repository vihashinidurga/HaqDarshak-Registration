import express from "express";
import cors from "cors";
import db from "./database.js";
import bodyParser from "body-parser";
const app=express();
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json("welocme")
})


app.post("/api/save-user-details", (req, res) => {
  const {
    state,
    district,
    pincode,
    phonenumber,
    name,
    gender,
    dob,
    age
  } = req.body;
  const checkQuery = `SELECT * FROM details WHERE phonenumber = ?`;
  db.query(checkQuery, [phonenumber], (checkErr, checkResult) => {
    if (checkErr) {
      console.error("Database error:", checkErr);
      return res.status(500).json({ error: "Database error" });
    }

    if (checkResult.length > 0) {
      return res.status(409).json({ error: "Phone number already exists" });
    }
    const insertQuery = `
      INSERT INTO details (state, district, pincode, phonenumber, name, gender, dob, age)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [state, district, pincode, phonenumber, name, gender, dob, age];

    db.query(insertQuery, values, (insertErr, insertResult) => {
      if (insertErr) {
        console.error("Database error:", insertErr);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(200).json({ message: "User details saved successfully." });
    });
  });
});



// app.post("/api/save-user-details", (req, res) => {
//     const {
//       state,
//       district,
//       pincode,
//       phonenumber,
//       name,
//       gender,
//       dob,
//       age
//     } = req.body;
  
//     const query = `
//       INSERT INTO details (state, district, pincode, phonenumber, name, gender, dob, age)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//     `;

    
//     const values = [state, district, pincode, phonenumber, name, gender, dob, age];
  
//     db.query(query, values, (err, result) => {
//       if (err) {
//         console.error("Database error:", err);
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.status(200).json({ message: "User details saved successfully." });
//     });
//   });  
 
const PORT=process.env.PORT || 8800;




app.listen(PORT,()=>{
    console.log("Connected to Backend!!");
})

