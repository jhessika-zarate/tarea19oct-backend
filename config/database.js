import mysql from "mysql2";

// create the connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admi",
  database: "tarea19oct",
  //database: "feria_del_empleo_pruebas",

});

function handleDisconnect() {
  db.connect(function (err) {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      setTimeout(handleDisconnect, 2000); // Intenta reconectarte después de 2 segundos
    }
  });

  db.on("error", function (err) {
    console.error("MySQL connection error:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect(); // Reconecta si se pierde la conexión
    } else {
      throw err;
    }
  });
}

handleDisconnect();
export default db;