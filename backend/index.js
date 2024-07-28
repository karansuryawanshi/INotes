const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
const port = "5000";

// app.use(cors());

const corsOptions = {
  origin: "https://virtual-notes-blush.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: [
//       "https://i-notes-kqv5w2u8y-karansuryawanshis-projects.vercel.app",
//       "http://localhost:3000",
//       "http://localhost:5000",
//     ],
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.options("*", cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend app listerning at http://localhost:${port}`);
});
