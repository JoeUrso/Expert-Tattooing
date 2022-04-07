const express = require("express");
const app = express();
const cors = require("cors");

/// IMPORT FROM ENV
require("dotenv").config();
const PORT = process.env.PORT;

// ENABLE CORS AND ALLOW PATHS TO READ REQ.BODY
app.use(cors());
app.use(express.json());

// DEFAULT ROUTES
// app.use("/battles", battlesRoutes);
// app.use("/rappers", rappersRoutes);
// app.use("/grades", gradesRoutes);
// app.use("/criteria", criteriaRoutes);

// LISTEN TO SERVER
app.listen(PORT, () => {
    console.log("server running on port", PORT);
});
