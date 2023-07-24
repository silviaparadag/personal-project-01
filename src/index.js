const express = require("express");
const cors = require("cors");
const env = require('dotenv');
env.config();


const server = express();


server.use(cors());
server.use(express.json({limit: "100mb"}));
server.set('view engine', 'ejs');


const itemsController = require('./controllers/itemsController');
const dbConn = require('./config/connection');


const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Ya se ha arrancado nuestro servidor: http://localhost:${port}/`);
});


server.get("/cities", async (req, res) => {
  itemsController.getCities(req, res);
});

server.get("/cities/:eachId", async (req, res) => {
  itemsController.getOneCity(req, res);
});

server.post("/cities", async (req,res) => {
  itemsController.createCity(req, res);
});

server.put("/cities/:eachId", async (req,res) => {
itemsController.updateCity(req,res);
});

server.delete("/cities/:eachId", async (req,res) => {
  itemsController.deleteCity(req,res)
});


server.get('/city/:eachId', async (req, res) => {
  const recipeId = req.params.eachId;
  const sql = `SELECT * FROM cities WHERE idcity= ? `;
  const conn = await dbConn.getConnection();
  const [results] = await conn.query(sql, recipeId);
  res.render('detail', results[0]);
})


const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));

const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));

const staticServerPathImages = './src/public-images/';
server.use(express.static(staticServerPathImages));