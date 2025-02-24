require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");
const taskRoutes = require("./routes/task.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
