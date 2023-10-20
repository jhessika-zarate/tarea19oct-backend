// Importa las funciones del modelo "actorModel.js"
import {
    getAllActors,
    getActorById,
    createActor,
    updateActorById,
    deleteActorById,
  } from "../models/actorModel.js";
  
  // Obtener todos los actores
  export const getAllActorsController = (req, res) => {
    getAllActors((err, results) => {
      if (err) {
        res.status(500).json({ message: "Error al obtener actores" });
      } else {
        res.status(200).json(results);
      }
    });
  };
  
  // Obtener un actor por ID
  export const getActorByIdController = (req, res) => {
    const actorId = req.params.id;
    getActorById(actorId, (err, results) => {
      if (err) {
        res.status(500).json({ message: "Error al obtener el actor" });
      } else {
        if (results) {
          res.status(200).json(results);
        } else {
          res.status(404).json({ message: "Actor no encontrado" });
        }
      }
    });
  };
  
  // Crear un nuevo actor
  export const createActorController = (req, res) => {
    const actorData = req.body;
    createActor(actorData, (err, results) => {
      if (err) {
        res.status(500).json({ message: "Error al crear el actor" });
      } else {
        res.status(201).json({ message: "Actor creado exitosamente", actor: results });
      }
    });
  };
  
  // Actualizar un actor por ID
  export const updateActorController = (req, res) => {
    const actorId = req.params.id;
    const actorData = req.body;
    updateActorById(actorData, actorId, (err, results) => {
      if (err) {
        res.status(500).json({ message: "Error al actualizar el actor" });
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: "Actor actualizado exitosamente" });
        } else {
          res.status(404).json({ message: "Actor no encontrado" });
        }
      }
    });
  };
  
  // Eliminar un actor por ID
  export const deleteActorController = (req, res) => {
    const actorId = req.params.id;
    deleteActorById(actorId, (err, results) => {
      if (err) {
        res.status(500).json({ message: "Error al eliminar el actor" });
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: "Actor eliminado exitosamente" });
        } else {
          res.status(404).json({ message: "Actor no encontrado" });
        }
      }
    });
  };
  