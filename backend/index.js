const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };

// app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: "https://virtual-notes-blush.vercel.app/",
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true"); // Explicitly set the header
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000", // Allow the client from localhost:3000
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "auth-token"], // Include any custom headers you need
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend app listerning at http://localhost:${port}`);
});
