import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8080;
connectDB()
  .then(() => {
    app.on("Error: ", (error) => {
      console.log("Error:", error);
    });

    app.listen(port, () => {
      console.log(`App is listening on ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
