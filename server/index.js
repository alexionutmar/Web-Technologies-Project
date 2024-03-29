import express from "express";
import cors from "cors";
import masterRoute from "./src/routes/masterRoute.js";
import db_init from "./src/entities/databaseInit.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import authRouter from "./src/routes/authRoutes.js";
import profRouter from "./src/routes/professorRoutes.js";
import juryMemberRoutes from "./src/routes/juryMemberRoutes.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// ROUTES
// const studentRoutes = require('./src/routes/studentRoutes.js');
// const juryMemberRoutes = require('./src/routes/juryMemberRoutes.js');
// const professorRoutes = require('./src/routes/professorRoutes.js');
// const { default: router } = require('./src/routes/masterRoute.js');

db_init();

// // Use the route files
app.use('/auth', authRouter);
app.use('/jury', juryMemberRoutes);
app.use('/professors', profRouter);
app.use('/api', masterRoute);
app.use('/students', projectRoutes);

const PORT = process.env.PORT || 8080; // port

app.listen(PORT, () => {
  console.log(`Serverul functioneaza pe port-ul ${PORT}.`);
});
