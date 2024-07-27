const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
const port = "5000";

app.use(cors());

app.use(
  cors({
    origin: ["https://i-notes-kqv5w2u8y-karansuryawanshis-projects.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

// Available Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend app listerning at http://localhost:${port}`);
});
