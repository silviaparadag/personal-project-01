const Views = require('../views/itemView');
const dbConn = require('../config/connection');

const getCities = async (req, res) => {
  const selectCities = "SELECT * FROM cities";
  const conn = await dbConn.getConnection();
  const [results] = await conn.query(selectCities);
  conn.end();
  res.json(Views.generateJsonResult(results)); 

};

const getOneCity = async (req, res) => {
  const cityItem = req.params.eachId;
  const selectItem = "SELECT * FROM cities WHERE idcity=?";
  const conn = await dbConn.getConnection();
  const [results] = await conn.query(selectItem, cityItem);
  conn.end();
  res.json(Views.generateJsonResult(results));
};

const createCity = async (req, res) => {
  const newCity = req.body;
  try {
    const insertSql = `INSERT INTO cities (city_name, city_desc_short, city_desc_long) VALUES (?, ?, ?)`;
    const conn = await dbConn.getConnection();
    const [result] = await conn.query( insertSql, 
      [
        newCity.city_name, 
        newCity.city_desc_short, 
        newCity.city_desc_long,
      ] 
    );
    conn.end();
    res.json(Views.generateSuccess(result.insertId));
  }
  catch (error){
    res.json({
         success: false, 
         message: error.sqlMessage
     });

  }
};


const updateCity = async (req, res) => {
  const recipeId = req.params.eachId;
  const {nombre, ingredientes, instrucciones} = req.body;

  try {
    const updateSql = `UPDATE cities SET city_name= ?, ingredientes=?, instrucciones=? WHERE idcity=?`;
    const conn = await dbConn.getConnection();
    const [result] = await conn.query( updateSql,[
      nombre, 
      ingredientes, 
      instrucciones, 
      recipeId
    ] )
    conn.end();
    res.json({
         success: true 
     });
    }
  catch (error) {
    res.json({
      success: false, 
      message: error.sqlMessage
    });
  }
 
}

const deleteCity = async (req, res) => {
  const recipeId = req.params.eachId;
  try {
    const deleteSql = `DELETE FROM cities WHERE idcity=?`;
    const conn = await dbConn.getConnection();
    const [result] = await conn.query( deleteSql,[recipeId] )
    conn.end();
    if (result.affectedRows === 1) {
      res.json(Views.generateSuccessMsg("This cities has been remove succesfully"));
    } else {res.json(Views.generateErrorMsg("This city id doesn't exit"));}
    }
  catch (error) {
    res.json({
      success: false, 
      message: error
    });
  }
};

module.exports = { getOneCity, getCities, createCity, updateCity, deleteCity };
