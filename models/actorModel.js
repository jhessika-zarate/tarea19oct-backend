// Importa la conexión a la base de datos
import db from "../config/database.js";

// Obtener todos los actores
export const getAllActors = (result) => {
  db.query("SELECT * FROM actor", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Obtener un actor por ID
export const getActorById = (id, result) => {
  db.query("SELECT * FROM actor WHERE actor_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// Crear un nuevo actor
export const createActor = (data, result) => {
  db.query("INSERT INTO actor SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Actualizar un actor por ID
export const updateActorById = (data, id, result) => {
  db.query("UPDATE actor SET ? WHERE actor_id = ?", [data, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Eliminar un actor por ID
export const deleteActorById = (id, result) => {
  db.query("DELETE FROM actor WHERE actor_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
